import React, { useState } from 'react';
import {
  Compass,
  FileDown,
  CheckCircle2,
  Printer,
  Copy,
  AlertCircle,
  FileText,
  Clock,
  Car,
  ShieldCheck,
  Check
} from 'lucide-react';
import { InstitutionProfile } from '../types';
import { exportOfficialDocumentToDocx } from '../utils/docxExport';

interface TripWizardViewProps {
  profile: InstitutionProfile;
}

export const TripWizardView: React.FC<TripWizardViewProps> = ({ profile }) => {
  const [tripData, setTripData] = useState({
    destination: 'Kocaeli Bilim Merkezi ve TÜBİTAK MAM',
    tripDate: '2026-10-25',
    departureTime: '08:30',
    returnTime: '17:30',
    tripType: 'il_disi', // il_ici | il_disi
    responsibleTeacher: 'Sosyal Bilgiler / Fen Bilimleri Öğretmeni',
    accompanyingTeachers: 'Görsel Sanatlar Öğretmeni, Bilişim Öğretmeni',
    studentCount: '40',
    plateNumber: '34 BLC 789',
    driverName: 'Ramazan KILIÇ',
    transportCompany: 'Özel Turizm Taşımacılık Ltd. Şti.',
    tursabNo: 'TÜRSAB Belge No: 12458',
  });

  const [activeTab, setActiveTab] = useState<'letter' | 'plan' | 'parent' | 'vehicle' | 'checklist'>('letter');
  const [copied, setCopied] = useState<boolean>(false);

  // 1. Kaymakamlık / İlçe MEM Onay Üst Yazısı
  const generateApprovalLetter = () => {
    const authority = tripData.tripType === 'il_disi' ? 'KAYMAKAMLIĞINA' : 'İLÇE MİLLÎ EĞİTİM MÜDÜRLÜĞÜNE';
    return {
      province: profile.province,
      district: profile.district,
      schoolName: profile.schoolName,
      number: `E-${profile.institutionCode}-821.05.01-` + Math.floor(10000 + Math.random() * 90000),
      subject: `Eğitim ve Bilim Gezisi Onayı (${tripData.destination})`,
      date: new Date().toLocaleDateString('tr-TR'),
      addressee: `${profile.district} ${authority}`,
      body: `Kurumumuz öğrencilerinin bilimsel, teknolojik ve kültürel vizyonlarını geliştirmek amacıyla ${tripData.tripDate} tarihinde ${tripData.destination} mevkiine eğitim gezisi düzenlenmesi planlanmaktadır.\n\nMEB Sosyal Etkinlikler Yönetmeliği hükümleri uyarınca gezi planı, veli muvafakatnameleri, TÜRSAB sözleşmesi, araç ve sürücü evrakları incelenmiş olup eksiksiz olarak dosyalanmıştır.\n\nSöz konusu gezinin ${tripData.responsibleTeacher} sorumluluğunda, ekli listede yer alan ${tripData.studentCount} öğrenci ve refakatçi öğretmenler nezaretinde ${tripData.plateNumber} plakalı araç ile gerçekleştirilmesi hususunu;\n\nOlurlarınıza arz ederim.`,
      conclusionType: 'none' as const,
      signerName: profile.principalName,
      signerTitle: profile.principalTitle,
      attachments: `1. Gezi Planı ve Seyahat Çizelgesi (1 Adet)\n2. Katılımcı Öğrenci ve Öğretmen Listesi (1 Adet)\n3. Veli İzin (Muvafakat) Belgeleri Dosyası\n4. TÜRSAB Seyahat Sözleşmesi ve Yetki Belgesi\n5. Araç Ruhsatı ve Periyodik Muayene Belgesi\n6. D-2 Yetki Belgesi\n7. Sürücü Ehliyeti ve SRC-2 / Psikoteknik Belgeleri\n8. Zorunlu Koltuk Ferdi Kaza Sigortası Poliçesi`,
    };
  };

  // 2. Gezi Planı Metni
  const generateTripPlanText = () => {
    return `GEZİ PLANI VE SEYAHAT ÇİZELGESİ\n\nGezi Yapılacak Yer: ${tripData.destination}\nGezi Tarihi: ${tripData.tripDate}\nHareket Saati: ${tripData.departureTime} (Okul Önü)\nDönüş Saati: ${tripData.returnTime} (Okul Önü)\nGezi Sorumlusu: ${tripData.responsibleTeacher}\nRefakatçi Öğretmenler: ${tripData.accompanyingTeachers}\nKatılımcı Öğrenci Sayısı: ${tripData.studentCount}\nTaşıma Şirketi: ${tripData.transportCompany} (${tripData.plateNumber})\n\nPROGRAM AKIŞI:\n${tripData.departureTime} - Okul bahçesinde toplanma, yoklama ve hareket.\n10:00 - ${tripData.destination} varış ve bilgilendirme.\n10:30 - 13:00 - Atölye, laboratuvar ve sergi alanları inceleme.\n13:00 - 14:00 - Öğle yemeği ve dinlenme.\n14:00 - 16:00 - Bilimsel gösteriler ve rehberli gezi turu.\n16:00 - Toplanma, araç kontrolü ve okula dönüş hareketi.\n${tripData.returnTime} - Okula varış ve öğrencilerin velilere teslimi.`;
  };

  // 3. Veli Muvafakat Metni
  const generateParentConsentText = () => {
    return `VELİ İZİN (MUVAFAKAT) BELGESİ\n\n${profile.schoolName.toUpperCase()} MÜDÜRLÜĞÜNE\n\nVelisi bulunduğum kurumunuz öğrencisinin, kurumunuzca ${tripData.tripDate} tarihinde düzenlenecek olan "${tripData.destination}" eğitim gezisine katılmasına, gezi kurallarına riayet etmek şartıyla izin veriyorum.\n\nÖğrenci Adı Soyadı: .................................................\nSınıfı / Programı: ......................... Okul No: ...........\nVeli Adı Soyadı: .....................................................\nİmza: .....................................\nİletişim Telefonu: .................................................\nTarih: ${new Date().toLocaleDateString('tr-TR')}`;
  };

  // 4. Araç ve Sürücü Kontrol Tutanağı
  const generateVehicleCheckText = () => {
    return `GEZİ ARACI VE SÜRÜCÜ KONTROL TUTANAĞI\n\n${tripData.tripDate} günü saat ${tripData.departureTime}'de ${tripData.destination} gezisi için okul önüne gelen ${tripData.plateNumber} plakalı araç ve sürücüsü ${tripData.driverName} üzerinde yapılan fiziki ve resmi evrak kontrollerinde;\n\n1. Sürücünün ehliyet, SRC-2 ve Psikoteknik belgesinin geçerli olduğu,\n2. Taşıtın D-2 Yetki Belgesi ve TÜRSAB sözleşmesinin mevcut olduğu,\n3. Zorunlu Mali Sorumluluk ve Koltuk Ferdi Kaza Sigortalarının yapıldığı,\n4. Emniyet kemerlerinin, yangın tüpünün ve ilk yardım çantasının faal olduğu tespit edilmiş olup aracın hareket etmesinde sakınca bulunmadığı görülmüştür.\n\nGezi Sorumlusu: ${tripData.responsibleTeacher} (İmza)\nNöbetçi İdareci: ${profile.vicePrincipalName} (İmza)\nSürücü: ${tripData.driverName} (İmza)`;
  };

  const handleDownloadWord = async () => {
    const letter = generateApprovalLetter();
    await exportOfficialDocumentToDocx(letter, `Gezi_Onay_Yazisi_${tripData.tripDate}.docx`);
  };

  const handleCopyCurrent = () => {
    let text = '';
    if (activeTab === 'letter') {
      const l = generateApprovalLetter();
      text = `${l.subject}\n\n${l.addressee}\n\n${l.body}\n\nEKLER:\n${l.attachments}\n\n${l.signerName}\n${l.signerTitle}`;
    } else if (activeTab === 'plan') {
      text = generateTripPlanText();
    } else if (activeTab === 'parent') {
      text = generateParentConsentText();
    } else if (activeTab === 'vehicle') {
      text = generateVehicleCheckText();
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-teal-100 text-teal-800 font-bold text-xs">MEB SOSYAL ETKİNLİK</span>
            <h1 className="text-xl font-bold text-slate-900">MEB Okul Gezisi Dosyası Hazırlama Sihirbazı</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Sosyal Etkinlikler Yönetmeliği gereği zorunlu 9 evraklı gezi dosyasını tek tıkla otomatik oluşturun
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyCurrent}
            className="inline-flex items-center space-x-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-all border border-slate-200"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Kopyalandı!' : 'Metni Kopyala'}</span>
          </button>

          <button
            onClick={handleDownloadWord}
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm shadow-blue-200 transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Onay Üst Yazısını Word İndir</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs (Left) and Generated Documents (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Inputs (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center space-x-1.5">
            <Compass className="w-4 h-4 text-teal-600" />
            <span>Gezi Bilgileri Formu</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Gezi Hedefi / Kurum</label>
              <input
                type="text"
                value={tripData.destination}
                onChange={(e) => setTripData({ ...tripData, destination: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Gezi Tarihi</label>
                <input
                  type="date"
                  value={tripData.tripDate}
                  onChange={(e) => setTripData({ ...tripData, tripDate: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Gezi Türü</label>
                <select
                  value={tripData.tripType}
                  onChange={(e) => setTripData({ ...tripData, tripType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold"
                >
                  <option value="il_ici">İl İçi Gezi (İlçe MEM Onayı)</option>
                  <option value="il_disi">İl Dışı Gezi (Kaymakamlık Onayı)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Hareket Saati</label>
                <input
                  type="text"
                  value={tripData.departureTime}
                  onChange={(e) => setTripData({ ...tripData, departureTime: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Dönüş Saati</label>
                <input
                  type="text"
                  value={tripData.returnTime}
                  onChange={(e) => setTripData({ ...tripData, returnTime: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Gezi Sorumlusu Öğretmen</label>
              <input
                type="text"
                value={tripData.responsibleTeacher}
                onChange={(e) => setTripData({ ...tripData, responsibleTeacher: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Refakatçi Öğretmenler</label>
              <input
                type="text"
                value={tripData.accompanyingTeachers}
                onChange={(e) => setTripData({ ...tripData, accompanyingTeachers: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Öğrenci Sayısı</label>
                <input
                  type="number"
                  value={tripData.studentCount}
                  onChange={(e) => setTripData({ ...tripData, studentCount: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Araç Plakası</label>
                <input
                  type="text"
                  value={tripData.plateNumber}
                  onChange={(e) => setTripData({ ...tripData, plateNumber: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 uppercase font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Şoför Adı Soyadı</label>
                <input
                  type="text"
                  value={tripData.driverName}
                  onChange={(e) => setTripData({ ...tripData, driverName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Taşıma / Tur Şirketi</label>
                <input
                  type="text"
                  value={tripData.transportCompany}
                  onChange={(e) => setTripData({ ...tripData, transportCompany: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>
            </div>

          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 space-y-1">
            <span className="font-bold flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Yasal Onay Takvimi:</span>
            </span>
            <p className="text-[11px] leading-relaxed">
              İl dışı gezilerde gezi tarihinden <strong>en az 10-15 gün önce</strong>, il içi gezilerde ise <strong>en az 7 gün önce</strong> dosyanın onay makamına teslim edilmesi şarttır.
            </p>
          </div>
        </div>

        {/* Generated Documents Viewer (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          
          {/* Document Sub-tabs */}
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3 overflow-x-auto text-xs">
            {[
              { id: 'letter', label: '1. Onay Üst Yazısı' },
              { id: 'plan', label: '2. Gezi Planı' },
              { id: 'parent', label: '3. Veli İzin Belgesi' },
              { id: 'vehicle', label: '4. Araç Kontrol Tutanağı' },
              { id: 'checklist', label: '5. 9 Evrak Kontrol Listesi' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[420px]">
            {activeTab === 'letter' && (
              <div className="space-y-4 text-xs font-mono bg-slate-50 p-5 rounded-xl border border-slate-200 whitespace-pre-wrap leading-relaxed text-slate-800">
                <div className="text-center font-bold text-sm">T.C.&#10;{profile.district} KAYMAKAMLIĞI&#10;İlçe Millî Eğitim Müdürlüğü&#10;{profile.schoolName} Müdürlüğü</div>
                <div>Sayı : E-{profile.institutionCode}-821.05.01-41258&#10;Konu : Eğitim ve Bilim Gezisi Onayı ({tripData.destination})</div>
                <div className="text-center font-bold">{tripData.tripType === 'il_disi' ? 'KAYMAKAMLIĞINA' : 'İLÇE MİLLÎ EĞİTİM MÜDÜRLÜĞÜNE'}&#10;({profile.district})</div>
                <div>Kurumumuz öğrencilerinin bilimsel, teknolojik ve kültürel vizyonlarını geliştirmek amacıyla {tripData.tripDate} tarihinde {tripData.destination} mevkiine eğitim gezisi düzenlenmesi planlanmaktadır.

MEB Sosyal Etkinlikler Yönetmeliği hükümleri uyarınca gezi planı, veli muvafakatnameleri, TÜRSAB sözleşmesi, araç ve sürücü evrakları incelenmiş olup eksiksiz olarak dosyalanmıştır.

Söz konusu gezinin {tripData.responsibleTeacher} sorumluluğunda, ekli listede yer alan {tripData.studentCount} öğrenci ve refakatçi öğretmenler nezaretinde {tripData.plateNumber} plakalı araç ile gerçekleştirilmesi hususunu;

Olurlarınıza arz ederim.</div>
                <div className="text-right font-bold mt-4">{profile.principalName}&#10;{profile.principalTitle}</div>
                <div className="text-[11px] font-sans text-slate-500 pt-2 border-t border-slate-200">
                  EKLER:&#10;1. Gezi Planı ve Seyahat Çizelgesi&#10;2. Katılımcı Öğrenci ve Öğretmen Listesi&#10;3. Veli İzin Belgeleri Dosyası&#10;4. TÜRSAB Seyahat Sözleşmesi&#10;5. Araç Ruhsatı ve Muayene Belgesi&#10;6. D-2 Yetki Belgesi&#10;7. Sürücü Ehliyeti ve SRC-2 / Psikoteknik Belgeleri&#10;8. Koltuk Sigorta Poliçesi
                </div>
              </div>
            )}

            {activeTab === 'plan' && (
              <pre className="text-xs font-mono bg-slate-50 p-5 rounded-xl border border-slate-200 whitespace-pre-wrap leading-relaxed text-slate-800">
                {generateTripPlanText()}
              </pre>
            )}

            {activeTab === 'parent' && (
              <pre className="text-xs font-mono bg-slate-50 p-5 rounded-xl border border-slate-200 whitespace-pre-wrap leading-relaxed text-slate-800">
                {generateParentConsentText()}
              </pre>
            )}

            {activeTab === 'vehicle' && (
              <pre className="text-xs font-mono bg-slate-50 p-5 rounded-xl border border-slate-200 whitespace-pre-wrap leading-relaxed text-slate-800">
                {generateVehicleCheckText()}
              </pre>
            )}

            {activeTab === 'checklist' && (
              <div className="space-y-3 text-xs">
                <p className="font-bold text-slate-800">MEB Sosyal Etkinlikler Yönetmeliği Gezi Dosyası Kontrol Listesi:</p>
                <div className="space-y-2">
                  {[
                    '1. Gezi Planı ve Zaman Çizelgesi (İmzalı)',
                    '2. Okul İzin Onay Üst Yazısı (İlçe MEM / Kaymakamlık)',
                    '3. Katılımcı Öğretmen ve Öğrenci İsim Listesi (T.C. Kimlik No ve İletişim Bilgili)',
                    '4. Tüm Öğrencilere Ait Islak İmzalı Veli İzin (Muvafakat) Belgeleri',
                    '5. TÜRSAB Yetki Belgesi ve A Grubu Seyahat Acentesi Sözleşmesi',
                    '6. Gezi Aracına Ait Tescil ve Trafik Belgesi (Ruhsat) ve Muayene Belgesi',
                    '7. Ulaştırma Bakanlığı D-2 veya B-2 Yolcu Taşıma Yetki Belgesi',
                    '8. Sürücüye Ait Sürücü Belgesi, SRC-2 Mesleki Yeterlilik ve Psikoteknik Raporu',
                    '9. Karayolu Yolcu Taşımacılığı Zorunlu Koltuk Ferdi Kaza Sigortası Poliçesi'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
