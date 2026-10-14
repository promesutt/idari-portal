import React, { useState, useEffect } from 'react';
import {
  FileDown,
  Printer,
  Copy,
  Save,
  Check,
  RefreshCw,
  Sparkles,
  Layers,
  HelpCircle,
  FileText
} from 'lucide-react';
import { InstitutionProfile, OfficialDocumentData, DocumentTemplate } from '../types';
import { TEMPLATES_DATA } from '../data/templatesData';
import { exportOfficialDocumentToDocx, hasEmbeddedConclusion, getEffectiveConclusion } from '../utils/docxExport';
import { saveDocumentDraft } from '../utils/storage';

interface DocumentGeneratorViewProps {
  profile: InstitutionProfile;
  initialTemplateId?: string | null;
  onClearInitialTemplate?: () => void;
}

export const DocumentGeneratorView: React.FC<DocumentGeneratorViewProps> = ({
  profile,
  initialTemplateId,
  onClearInitialTemplate,
}) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(initialTemplateId || '');
  const [copied, setCopied] = useState<boolean>(false);
  const [savedNotification, setSavedNotification] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Document State
  const [docData, setDocData] = useState<OfficialDocumentData>({
    province: profile.province,
    district: profile.district,
    schoolName: profile.schoolName,
    number: `${profile.dysCode}-10245`,
    subject: 'Mazeret İzni Talebi',
    date: new Date().toLocaleDateString('tr-TR'),
    addressee: `${profile.district} İLÇE MİLLÎ EĞİTİM MÜDÜRLÜĞÜNE`,
    interest: '',
    body: `Kurumumuz bünyesinde yürütülen eğitim-öğretim ve yönetim faaliyetleri kapsamında düzenlenen bilgi ve belgeler ilişikte sunulmuştur.`,
    conclusionType: 'arz',
    signerName: profile.principalName,
    signerTitle: profile.principalTitle,
    attachments: '',
    distribution: '',
  });

  // Dynamic template variables map
  const [customFieldValues, setCustomFieldValues] = useState<Record<string, string>>({});

  // When initialTemplateId changes or user selects template
  useEffect(() => {
    if (initialTemplateId) {
      loadTemplate(initialTemplateId);
      if (onClearInitialTemplate) {
        onClearInitialTemplate();
      }
    }
  }, [initialTemplateId]);

  const loadTemplate = (templateId: string) => {
    const tpl = TEMPLATES_DATA.find((t) => t.id === templateId);
    if (!tpl) return;

    setSelectedTemplateId(templateId);

    // Initial values for template fields
    const initialValues: Record<string, string> = {};
    if (tpl.customFields) {
      tpl.customFields.forEach((f) => {
        initialValues[f.id] = f.defaultValue || '';
      });
    }
    setCustomFieldValues(initialValues);

    // Process body text by replacing default variables
    let processedBody = tpl.defaultBody
      .replace(/{OKUL_ADI}/g, profile.schoolName)
      .replace(/{ILCE_ADI}/g, profile.district)
      .replace(/{ILCE_MEM}/g, `${profile.district} İLÇE MİLLÎ EĞİTİM`)
      .replace(/{MUDUR_ADI}/g, profile.principalName)
      .replace(/{MUDUR_UNVANI}/g, profile.principalTitle)
      .replace(/{TARIH}/g, new Date().toLocaleDateString('tr-TR'));

    if (tpl.customFields) {
      tpl.customFields.forEach((f) => {
        processedBody = processedBody.replace(new RegExp(`{${f.id}}`, 'g'), f.defaultValue || '');
      });
    }

    let processedAddressee = (tpl.suggestedAddressee || `${profile.district} İLÇE MİLLÎ EĞİTİM MÜDÜRLÜĞÜNE`)
      .replace(/{OKUL_ADI}/g, profile.schoolName)
      .replace(/{ILCE_ADI}/g, profile.district)
      .replace(/{ILCE_MEM}/g, `${profile.district} İLÇE MİLLÎ EĞİTİM`);

    // Sonuç ifadesini akıllı belirleme (mükerrerliği önler)
    let conclusion: 'arz' | 'rica' | 'arz_rica' | 'none' = 'arz';
    if (tpl.suggestedConclusionType) {
      conclusion = tpl.suggestedConclusionType;
    } else if (hasEmbeddedConclusion(processedBody)) {
      conclusion = 'none';
    } else if (
      tpl.category === 'kurullar' ||
      tpl.title.toLowerCase().includes('tutanak') ||
      tpl.title.toLowerCase().includes('karar') ||
      tpl.title.toLowerCase().includes('çizelge') ||
      tpl.title.toLowerCase().includes('rapor') ||
      tpl.title.toLowerCase().includes('form') ||
      tpl.title.toLowerCase().includes('taahhüt')
    ) {
      conclusion = 'none';
    } else if (processedAddressee.includes('KAYMAKAM') || processedAddressee.includes('MÜDÜRLÜĞÜNE')) {
      conclusion = 'arz';
    } else {
      conclusion = 'rica';
    }

    setDocData({
      province: profile.province,
      district: profile.district,
      schoolName: profile.schoolName,
      number: `E-${profile.institutionCode}-${tpl.decimalCode}-` + Math.floor(10000 + Math.random() * 90000),
      subject: tpl.defaultSubject || tpl.title,
      date: new Date().toLocaleDateString('tr-TR'),
      addressee: processedAddressee,
      interest: '',
      body: processedBody,
      conclusionType: conclusion,
      signerName: tpl.suggestedSignerName || profile.principalName,
      signerTitle: tpl.suggestedSignerTitle || profile.principalTitle,
      attachments: tpl.attachments ? tpl.attachments.join('\n') : '',
      distribution: '',
    });
  };

  const handleCustomFieldChange = (fieldId: string, val: string) => {
    const updated = { ...customFieldValues, [fieldId]: val };
    setCustomFieldValues(updated);

    // Recompute body if template active
    const tpl = TEMPLATES_DATA.find((t) => t.id === selectedTemplateId);
    if (tpl) {
      let newBody = tpl.defaultBody
        .replace(/{OKUL_ADI}/g, profile.schoolName)
        .replace(/{ILCE_ADI}/g, profile.district)
        .replace(/{ILCE_MEM}/g, `${profile.district} İLÇE MİLLÎ EĞİTİM`)
        .replace(/{MUDUR_ADI}/g, profile.principalName)
        .replace(/{MUDUR_UNVANI}/g, profile.principalTitle)
        .replace(/{TARIH}/g, docData.date);

      Object.entries(updated).forEach(([k, v]) => {
        newBody = newBody.replace(new RegExp(`{${k}}`, 'g'), v);
      });

      setDocData((prev) => ({ ...prev, body: newBody }));
    }
  };

  const handleExportDocx = async () => {
    setIsExporting(true);
    try {
      await exportOfficialDocumentToDocx(docData);
    } catch (e) {
      console.error('Docx export failed', e);
      alert('Word dosyası oluşturulurken bir hata meydana geldi.');
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyForDYS = () => {
    const effectiveConclusion = getEffectiveConclusion(docData.body, docData.conclusionType);
    const fullText = `${docData.subject}\n\n${docData.addressee}\n\n${docData.interest ? `İlgi: ${docData.interest}\n\n` : ''}${docData.body}${
      effectiveConclusion ? `\n\n${effectiveConclusion}` : ''
    }\n\n${docData.signerName}\n${docData.signerTitle}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveDraft = () => {
    saveDocumentDraft({
      id: `draft-${Date.now()}`,
      title: docData.subject,
      subject: docData.subject,
      date: docData.date,
      body: docData.body,
      templateId: selectedTemplateId
    });
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2500);
  };

  const activeTemplate = TEMPLATES_DATA.find((t) => t.id === selectedTemplateId);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header & Quick Action Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm no-print">
        <div>
          <h1 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span>Resmi Yazı & Tutanak Sihirbazı</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            MEB DYS ve Resmi Yazışma Usul ve Esaslarına %100 tam uyumlu format
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Docx Download */}
          <button
            onClick={handleExportDocx}
            disabled={isExporting}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm shadow-blue-200"
          >
            <FileDown className="w-4 h-4" />
            <span>{isExporting ? 'Oluşturuluyor...' : 'Word (.docx) İndir'}</span>
          </button>

          {/* Print / PDF */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Yazdır / PDF</span>
          </button>

          {/* Copy for DYS */}
          <button
            onClick={handleCopyForDYS}
            className="inline-flex items-center space-x-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-all border border-slate-200"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'DYS Metni Kopyalandı!' : 'DYS Metnini Kopyala'}</span>
          </button>

          {/* Save Draft */}
          <button
            onClick={handleSaveDraft}
            className="inline-flex items-center space-x-1.5 px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold transition-all border border-slate-200"
            title="Taslağı Yerel Belleğe Kaydet"
          >
            {savedNotification ? <Check className="w-4 h-4 text-emerald-600" /> : <Save className="w-4 h-4" />}
            <span>{savedNotification ? 'Kaydedildi' : 'Taslağı Kaydet'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Form Inputs (Left) and Live A4 Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form Settings Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-5 no-print">
          
          {/* Template Selector Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Hazır Şablondan Doldur</span>
              </label>
              {selectedTemplateId && (
                <button
                  onClick={() => {
                    setSelectedTemplateId('');
                    setCustomFieldValues({});
                  }}
                  className="text-[11px] text-red-600 hover:underline"
                >
                  Sıfırla
                </button>
              )}
            </div>

            <select
              value={selectedTemplateId}
              onChange={(e) => loadTemplate(e.target.value)}
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Boş Resmi Yazı / Özel Metin --</option>
              {TEMPLATES_DATA.map((t) => (
                <option key={t.id} value={t.id}>
                  [{t.decimalCode}] {t.title}
                </option>
              ))}
            </select>

            {activeTemplate && (
              <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs text-blue-900 space-y-1">
                <p className="font-bold flex items-center space-x-1">
                  <span>Dayanak:</span>
                  <span className="font-medium text-blue-800">{activeTemplate.legalBasis}</span>
                </p>
                <p className="text-[11px] text-blue-700 leading-relaxed">
                  {activeTemplate.summary}
                </p>
              </div>
            )}
          </div>

          {/* Dynamic Template Specific Inputs */}
          {activeTemplate?.customFields && activeTemplate.customFields.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Şablon Alanları (Otomatik Yerleştirilir)
                </h2>
              </div>

              <div className="space-y-3">
                {activeTemplate.customFields.map((field) => (
                  <div key={field.id} className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        rows={2}
                        value={customFieldValues[field.id] || ''}
                        onChange={(e) => handleCustomFieldChange(field.id, e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                      />
                    ) : field.type === 'select' ? (
                      <select
                        value={customFieldValues[field.id] || ''}
                        onChange={(e) => handleCustomFieldChange(field.id, e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 focus:ring-2 focus:ring-blue-500"
                      >
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={customFieldValues[field.id] || ''}
                        onChange={(e) => handleCustomFieldChange(field.id, e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* General Document Meta Fields */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
              Resmi Yazı Üst Bilgileri
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Sayı (DYS Kod)</label>
                <input
                  type="text"
                  value={docData.number}
                  onChange={(e) => setDocData({ ...docData, number: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Tarih</label>
                <input
                  type="text"
                  value={docData.date}
                  onChange={(e) => setDocData({ ...docData, date: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Konu</label>
              <input
                type="text"
                value={docData.subject}
                onChange={(e) => setDocData({ ...docData, subject: e.target.value })}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 font-semibold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Muhatap (Hitap)</label>
              <textarea
                rows={2}
                value={docData.addressee}
                onChange={(e) => setDocData({ ...docData, addressee: e.target.value })}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 font-bold uppercase"
                placeholder="Örn: GÜNGÖREN İLÇE MİLLÎ EĞİTİM MÜDÜRLÜĞÜNE"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">İlgi (Varsa)</label>
              <input
                type="text"
                value={docData.interest || ''}
                onChange={(e) => setDocData({ ...docData, interest: e.target.value })}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2"
                placeholder="Örn: 10.10.2026 tarihli ve E-12345 sayılı yazınız."
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Gövde Metni</label>
              <textarea
                rows={7}
                value={docData.body}
                onChange={(e) => setDocData({ ...docData, body: e.target.value })}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 leading-relaxed font-sans"
              />
            </div>

            {/* Arz / Rica Radio */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-700">
                  Sonuç İfadesi (Kural: Üst makama Arz, Alt makama Rica)
                </label>
                {hasEmbeddedConclusion(docData.body) && (
                  <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-medium">
                    Metinde sonuç ifadesi mevcut
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="conclusion"
                    checked={docData.conclusionType === 'arz'}
                    onChange={() => setDocData({ ...docData, conclusionType: 'arz' })}
                    className="text-blue-600"
                  />
                  <span>Arz ederim.</span>
                </label>
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="conclusion"
                    checked={docData.conclusionType === 'rica'}
                    onChange={() => setDocData({ ...docData, conclusionType: 'rica' })}
                    className="text-blue-600"
                  />
                  <span>Rica ederim.</span>
                </label>
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="conclusion"
                    checked={docData.conclusionType === 'arz_rica'}
                    onChange={() => setDocData({ ...docData, conclusionType: 'arz_rica' })}
                    className="text-blue-600"
                  />
                  <span>Arz ve rica ederim.</span>
                </label>
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="conclusion"
                    checked={docData.conclusionType === 'none'}
                    onChange={() => setDocData({ ...docData, conclusionType: 'none' })}
                    className="text-blue-600"
                  />
                  <span>Metne Dahil / Yok</span>
                </label>
              </div>
              {hasEmbeddedConclusion(docData.body) && docData.conclusionType !== 'none' && (
                <p className="text-[11px] text-amber-700 bg-amber-50/70 p-1.5 rounded-md border border-amber-200/60 leading-tight">
                  💡 Gövde metniniz zaten bir sonuç ifadesi ('...arz/rica ederim') içerdiği için belgenizde mükerrer cümle oluşması otomatik olarak engellenmiştir.
                </p>
              )}
            </div>

            {/* Signer Block */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">İmzalayan Ad Soyad</label>
                <input
                  type="text"
                  value={docData.signerName}
                  onChange={(e) => setDocData({ ...docData, signerName: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 font-bold"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">İmzalayan Unvanı</label>
                <input
                  type="text"
                  value={docData.signerTitle}
                  onChange={(e) => setDocData({ ...docData, signerTitle: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2"
                />
              </div>
            </div>

            {/* Attachments & Distribution */}
            <div className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Ekler (Her satıra bir ek)</label>
                <textarea
                  rows={2}
                  value={docData.attachments || ''}
                  onChange={(e) => setDocData({ ...docData, attachments: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2"
                  placeholder="1. Başvuru Formu&#10;2. Nüfus Cüzdanı Fotokopisi"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Dağıtım (Gereği / Bilgi)</label>
                <textarea
                  rows={2}
                  value={docData.distribution || ''}
                  onChange={(e) => setDocData({ ...docData, distribution: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2"
                  placeholder="Gereği: Okul Aile Birliği&#10;Bilgi: İlçe MEM"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Right Live A4 Visual Preview (7 cols) */}
        <div className="lg:col-span-7 sticky top-20">
          <div className="text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 no-print flex items-center justify-between">
            <span>Canlı A4 Baskı / DYS Önizleme</span>
            <span className="text-[11px] font-normal text-slate-400">Times New Roman 12pt Standart</span>
          </div>

          {/* Paper A4 Simulation */}
          <div className="paper-a4 print-paper rounded-lg border border-slate-200">
            
            {/* Header (Antet) */}
            <div className="text-center font-bold space-y-1 mb-8">
              <div className="text-base tracking-widest">T.C.</div>
              <div className="text-sm">
                {docData.district} KAYMAKAMLIĞI
              </div>
              <div className="text-xs font-normal">
                İlçe Millî Eğitim Müdürlüğü
              </div>
              <div className="text-sm font-bold tracking-tight">
                {docData.schoolName} Müdürlüğü
              </div>
            </div>

            {/* Number, Date, Subject */}
            <div className="flex justify-between items-start text-xs font-bold mb-1">
              <div>Sayı : {docData.number}</div>
              <div>Tarih : {docData.date}</div>
            </div>
            <div className="text-xs font-bold mb-8">
              Konu : {docData.subject}
            </div>

            {/* Addressee (Muhatap) */}
            <div className="text-center font-bold text-sm uppercase my-6 whitespace-pre-line leading-relaxed">
              {docData.addressee}
            </div>

            {/* Interest (İlgi) */}
            {docData.interest && (
              <div className="text-xs italic mb-4">
                İlgi : {docData.interest}
              </div>
            )}

            {/* Body */}
            <div className="text-justify text-xs leading-relaxed space-y-3 whitespace-pre-line indent-8">
              {docData.body}
            </div>

            {/* Conclusion (Mükerrerlik Kontrollü) */}
            {getEffectiveConclusion(docData.body, docData.conclusionType) && (
              <div className="text-justify text-xs mt-4 indent-8">
                {getEffectiveConclusion(docData.body, docData.conclusionType)}
              </div>
            )}

            {/* Signer Block */}
            <div className="mt-12 ml-auto w-64 text-right space-y-1">
              <div className="font-bold text-xs uppercase">{docData.signerName}</div>
              <div className="text-xs">{docData.signerTitle}</div>
            </div>

            {/* Attachments */}
            {docData.attachments && docData.attachments.trim() && (
              <div className="mt-10 text-[11px] space-y-1">
                <div className="font-bold">EKLER :</div>
                <div className="whitespace-pre-line pl-2 text-slate-700">
                  {docData.attachments}
                </div>
              </div>
            )}

            {/* Distribution */}
            {docData.distribution && docData.distribution.trim() && (
              <div className="mt-4 text-[11px] space-y-1">
                <div className="font-bold">DAĞITIM :</div>
                <div className="whitespace-pre-line pl-2 text-slate-700">
                  {docData.distribution}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
