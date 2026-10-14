import React, { useState } from 'react';
import {
  Search,
  Filter,
  FileDown,
  Edit3,
  Eye,
  X,
  Sparkles,
  BookOpen,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { InstitutionProfile, DocumentTemplate, CategoryType } from '../types';
import { TEMPLATES_DATA } from '../data/templatesData';
import { CATEGORIES } from '../data/categoriesData';
import { exportOfficialDocumentToDocx, hasEmbeddedConclusion } from '../utils/docxExport';

interface TemplatesCatalogViewProps {
  profile: InstitutionProfile;
  initialCategory?: CategoryType | null;
  onSelectTemplateForEdit: (templateId: string) => void;
}

export const TemplatesCatalogView: React.FC<TemplatesCatalogViewProps> = ({
  profile,
  initialCategory,
  onSelectTemplateForEdit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewTemplate, setPreviewTemplate] = useState<DocumentTemplate | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Filter templates
  const filteredTemplates = TEMPLATES_DATA.filter((tpl) => {
    const matchesCategory = selectedCategory === 'all' || tpl.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      tpl.title.toLowerCase().includes(query) ||
      tpl.summary.toLowerCase().includes(query) ||
      tpl.decimalCode.toLowerCase().includes(query) ||
      tpl.legalBasis.toLowerCase().includes(query) ||
      tpl.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  const handleQuickDownload = async (tpl: DocumentTemplate) => {
    setDownloadingId(tpl.id);
    try {
      let processedBody = tpl.defaultBody
        .replace(/{OKUL_ADI}/g, profile.schoolName)
        .replace(/{ILCE_ADI}/g, profile.district)
        .replace(/{ILCE_MEM}/g, `${profile.district} İLÇE MİLLÎ EĞİTİM`)
        .replace(/{MUDUR_ADI}/g, profile.principalName)
        .replace(/{MUDUR_UNVANI}/g, profile.principalTitle)
        .replace(/{TARIH}/g, new Date().toLocaleDateString('tr-TR'));

      if (tpl.customFields) {
        tpl.customFields.forEach((f) => {
          processedBody = processedBody.replace(new RegExp(`{${f.id}}`, 'g'), f.defaultValue || `[${f.label}]`);
        });
      }

      await exportOfficialDocumentToDocx({
        province: profile.province,
        district: profile.district,
        schoolName: profile.schoolName,
        number: `E-${profile.institutionCode}-${tpl.decimalCode}-` + Math.floor(10000 + Math.random() * 90000),
        subject: tpl.defaultSubject || tpl.title,
        date: new Date().toLocaleDateString('tr-TR'),
        addressee: (tpl.suggestedAddressee || `${profile.district} İLÇE MİLLÎ EĞİTİM MÜDÜRLÜĞÜNE`)
          .replace(/{OKUL_ADI}/g, profile.schoolName)
          .replace(/{ILCE_ADI}/g, profile.district),
        body: processedBody,
        conclusionType: tpl.suggestedConclusionType || (hasEmbeddedConclusion(processedBody) ? 'none' : 'arz'),
        signerName: tpl.suggestedSignerName || profile.principalName,
        signerTitle: tpl.suggestedSignerTitle || profile.principalTitle,
        attachments: tpl.attachments ? tpl.attachments.join('\n') : '',
      });
    } catch (e) {
      console.error('Quick download failed', e);
      alert('İndirme sırasında bir hata oluştu.');
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">İdari Evrak & Şablon Kütüphanesi</h1>
          <p className="text-xs text-slate-500 mt-1">
            Devlet okulları ve BİLSEM'lerde kullanılan tüm yasal şablonlar, tutanaklar ve resmi yazılar
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Şablon adı, desimal kod (903), etiket ara..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Tüm Şablonlar ({TEMPLATES_DATA.length})
        </button>

        {CATEGORIES.map((cat) => {
          const count = TEMPLATES_DATA.filter((t) => t.category === cat.id).length;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{cat.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTemplates.map((tpl) => (
          <div
            key={tpl.id}
            className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                  Desimal: {tpl.decimalCode}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">
                  {tpl.category}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tpl.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-3">
                  {tpl.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tpl.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
              <div className="text-[11px] text-slate-400 font-medium truncate">
                Dayanak: {tpl.legalBasis}
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPreviewTemplate(tpl)}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1"
                  title="Şablonu İncele"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>İncele</span>
                </button>

                <button
                  onClick={() => handleQuickDownload(tpl)}
                  disabled={downloadingId === tpl.id}
                  className="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1"
                  title="Varsayılan bilgilerle anında Word indir"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{downloadingId === tpl.id ? 'İniyor...' : 'Word'}</span>
                </button>

                <button
                  onClick={() => onSelectTemplateForEdit(tpl.id)}
                  className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-2xs"
                  title="Resmi Yazı Oluşturucuda Düzenle"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Düzenle</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 space-y-3">
          <p className="text-slate-500 text-sm">Aramanızla eşleşen şablon bulunamadı.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs text-blue-600 font-bold hover:underline"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}

      {/* Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-4">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                  Desimal: {previewTemplate.decimalCode}
                </span>
                <h2 className="text-lg font-bold text-slate-900 mt-1">
                  {previewTemplate.title}
                </h2>
              </div>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="font-bold text-slate-700">Mevzuat Dayanağı:</span>
                <p className="text-slate-600">{previewTemplate.legalBasis}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="font-bold text-slate-700">Kullanım Özeti:</span>
                <p className="text-slate-600 leading-relaxed">{previewTemplate.summary}</p>
              </div>

              <div>
                <span className="font-bold text-slate-700 block mb-1">Şablon Metni Örneği:</span>
                <pre className="p-3 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
                  {previewTemplate.defaultBody}
                </pre>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-3">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Kapat
              </button>
              <button
                onClick={() => {
                  const id = previewTemplate.id;
                  setPreviewTemplate(null);
                  onSelectTemplateForEdit(id);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
              >
                Bu Şablonla Yazı Başlat
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
