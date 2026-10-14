import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  BookOpen,
  FileText,
  FileDown,
  Layers,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { InstitutionProfile } from '../types';
import { exportOfficialDocumentToDocx } from '../utils/docxExport';

interface BilsemSpecialViewProps {
  profile: InstitutionProfile;
  onSelectTemplateForEdit: (templateId: string) => void;
}

export const BilsemSpecialView: React.FC<BilsemSpecialViewProps> = ({
  profile,
  onSelectTemplateForEdit,
}) => {
  const [activeTab, setActiveTab] = useState<'programs' | 'report' | 'patents' | 'attendance'>('programs');

  // Gelişim Raporu Hızlı Oluşturucu State
  const [reportData, setReportData] = useState({
    studentName: 'Burak ŞEN',
    tcNo: '12345678901',
    parentName: 'Hülya ŞEN',
    program: 'BYF (Bireysel Yetenekleri Fark Ettirme)',
    talentArea: 'Genel Zihinsel Yetenek',
    workshop: 'Robotik ve Mekatronik Atölyesi',
    advisorTeacher: 'Bilişim Teknolojileri Öğretmeni',
    term: '2026-2027 1. Dönem',
    problemSolving: 'İleri düzeyde meraklı, algoritmik düşünme becerileri çok yüksek.',
    creativity: 'Farklı çözüm yolları üretmede ve tasarımda oldukça özgün.',
    teamwork: 'Grup içi fikir paylaşımında aktif ve uyumlu.',
    responsibility: 'Verilen araştırma görevlerini zamanında ve titizlikle tamamlıyor.',
    nextProgram: 'BYF-2 Programı',
    recommendations: 'Öğrencinin TEKNOFEST ve TÜBİTAK 2204-B yarışmalarına yönlendirilmesi önerilmektedir.',
  });

  const handleDownloadReportDocx = async () => {
    const reportDoc = {
      province: profile.province,
      district: profile.district,
      schoolName: profile.schoolName,
      number: `E-${profile.institutionCode}-821.06.05-` + Math.floor(10000 + Math.random() * 90000),
      subject: `Bireysel Gelişim ve Değerlendirme Raporu (${reportData.studentName})`,
      date: new Date().toLocaleDateString('tr-TR'),
      addressee: `Sayın ${reportData.parentName}\n(${reportData.studentName} Velisi)`,
      body: `ÖĞRENCİ KİMLİK VE PROGRAM BİLGİLERİ:\nÖğrenci Adı Soyadı : ${reportData.studentName}\nT.C. Kimlik No      : ${reportData.tcNo}\nYetenek Alanı       : ${reportData.talentArea}\nDevam Ettiği Program: ${reportData.program}\nAtölye / Modül      : ${reportData.workshop}\nDanışman Öğretmen   : ${reportData.advisorTeacher}\nEğitim Dönemi       : ${reportData.term}\n\nGELİŞİM ALANLARI VE YETKİNLİK DEĞERLENDİRMELERİ:\n1. Bilimsel/Sanatsal Merak ve Problem Çözme: ${reportData.problemSolving}\n2. Yaratıcı Düşünme ve Özgün Üretim Becerisi: ${reportData.creativity}\n3. İletişim, İş Birliği ve Takım Çalışması  : ${reportData.teamwork}\n4. Proje Geliştirme ve Sorumluluk Bilinci   : ${reportData.responsibility}\n\nGENEL DEĞERLENDİRME VE GELECEK DÖNEM TAVSİYELERİ:\n${reportData.recommendations}\n\nÖğrencinin bir sonraki dönemde "${reportData.nextProgram}" programına devam etmesi Merkezimiz Bireysel Gelişim ve Değerlendirme Kurulunca uygun görülmüştür.`,
      conclusionType: 'none' as const,
      signerName: profile.principalName,
      signerTitle: profile.principalTitle,
    };

    await exportOfficialDocumentToDocx(reportDoc, `Bilisem_Gelisim_Raporu_${reportData.studentName}.docx`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-xs font-semibold border border-purple-400/30">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>Özel Yetenekliler & BİLSEM Yönetim Sistemi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {profile.schoolName} BİLSEM Modülü
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            MEB Bilim ve Sanat Merkezleri Yönergesi hükümleri doğrultusunda tanılama, uyum, BYF, ÖYG ve proje basamakları idari yönetimi.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSelectTemplateForEdit('bilsem-bireysel-gelisim-raporu')}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold shadow-md transition-all"
          >
            Gelişim Raporu Yaz
          </button>
          <button
            onClick={() => onSelectTemplateForEdit('bilsem-kayit-dondurma')}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-medium border border-white/20 transition-all"
          >
            Kayıt Dondurma
          </button>
        </div>
      </div>

      {/* Sub-module Navigation Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-bold">
        {[
          { id: 'programs', label: '1. BİLSEM Eğitim Aşamaları Mimarisi' },
          { id: 'report', label: '2. Bireysel Gelişim Raporu Sihirbazı' },
          { id: 'attendance', label: '3. Devamsızlık & %30 Kuralı Rehberi' },
          { id: 'patents', label: '4. TÜRKPATENT Tescil Takip' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Educational Programs Architecture */}
      {activeTab === 'programs' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '1. Aşama',
                name: 'Uyum (Oryantasyon)',
                duration: '40 Ders Saati',
                desc: 'Merkeze yeni kayıt olan öğrencilerin kurum kültürünü, atölyeleri ve arkadaş çevresini tanıması programı.',
                color: 'border-blue-300 bg-blue-50/50 text-blue-900',
              },
              {
                step: '2. Aşama',
                name: 'Destek Eğitimi',
                duration: '1-2 Yıl',
                desc: 'İletişim, bilimsel çalışma yöntemleri, problem çözme, yaratıcılık ve grupla çalışma becerilerini geliştirme.',
                color: 'border-emerald-300 bg-emerald-50/50 text-emerald-900',
              },
              {
                step: '3. Aşama',
                name: 'BYF (Yetenekleri Fark Etme)',
                duration: '2-3 Yıl',
                desc: 'Tüm bilim ve sanat disiplinlerinde modüler atölye deneyimleri ile bireysel ilgi ve yeteneklerin keşfi.',
                color: 'border-amber-300 bg-amber-50/50 text-amber-900',
              },
              {
                step: '4. Aşama',
                name: 'ÖYG (Yetenekleri Geliştirme)',
                duration: '2-3 Yıl',
                desc: 'Öğrencinin derinleşmek istediği 1-2 özel alanda (örn: Yapay Zekâ, Biyoteknoloji, Resim) uzmanlaşma eğitimi.',
                color: 'border-purple-300 bg-purple-50/50 text-purple-900',
              },
              {
                step: '5. Aşama',
                name: 'Proje Üretimi & Yönetimi',
                duration: 'Lise Mezuniyetine Kadar',
                desc: 'TÜBİTAK, TEKNOFEST, patent, makale ve uluslararası yarışmalara yönelik özgün Ar-Ge üretimi.',
                color: 'border-rose-300 bg-rose-50/50 text-rose-900',
              },
            ].map((p, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border ${p.color} flex flex-col justify-between space-y-3`}>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider opacity-75">{p.step}</div>
                  <h3 className="font-extrabold text-base mt-1">{p.name}</h3>
                  <div className="text-xs font-semibold mt-1 opacity-80">{p.duration}</div>
                  <p className="text-xs mt-2 leading-relaxed opacity-90">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Administrative quick actions */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              BİLSEM İdari Süreçleri Hızlı Şablonları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <button
                onClick={() => onSelectTemplateForEdit('bilsem-bireysel-gelisim-raporu')}
                className="p-4 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50/30 text-left transition-all space-y-1"
              >
                <div className="font-bold text-slate-900">Bireysel Gelişim Raporu</div>
                <div className="text-slate-500 text-[11px]">Dönemlik veli ve e-Okul bilgilendirme belgesi</div>
              </button>

              <button
                onClick={() => onSelectTemplateForEdit('bilsem-kayit-dondurma')}
                className="p-4 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50/30 text-left transition-all space-y-1"
              >
                <div className="font-bold text-slate-900">Kayıt Dondurma Dilekçesi</div>
                <div className="text-slate-500 text-[11px]">Yönerge Madde 21 kapsamında 1 yıllık dondurma</div>
              </button>

              <button
                onClick={() => onSelectTemplateForEdit('bilsem-atolye-guvenlik')}
                className="p-4 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50/30 text-left transition-all space-y-1"
              >
                <div className="font-bold text-slate-900">Atölye Güvenlik Taahhüdü</div>
                <div className="text-slate-500 text-[11px]">3D yazıcı, kimya ve robotik atölye veli izni</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Individual Development Report Wizard */}
      {activeTab === 'report' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
              Öğrenci ve Değerlendirme Bilgileri
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Öğrenci Adı Soyadı</label>
                <input
                  type="text"
                  value={reportData.studentName}
                  onChange={(e) => setReportData({ ...reportData, studentName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-bold"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">T.C. Kimlik No</label>
                <input
                  type="text"
                  value={reportData.tcNo}
                  onChange={(e) => setReportData({ ...reportData, tcNo: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Veli Adı Soyadı</label>
                <input
                  type="text"
                  value={reportData.parentName}
                  onChange={(e) => setReportData({ ...reportData, parentName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Dönem</label>
                <input
                  type="text"
                  value={reportData.term}
                  onChange={(e) => setReportData({ ...reportData, term: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">BİLSEM Programı</label>
                <select
                  value={reportData.program}
                  onChange={(e) => setReportData({ ...reportData, program: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold"
                >
                  <option value="Uyum Programı">Uyum Programı</option>
                  <option value="Destek Eğitimi">Destek Eğitimi</option>
                  <option value="BYF (Bireysel Yetenekleri Fark Ettirme)">BYF Programı</option>
                  <option value="ÖYG (Özel Yetenekleri Geliştirme)">ÖYG Programı</option>
                  <option value="Proje Üretimi ve Yönetimi">Proje Programı</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Yetenek Alanı</label>
                <select
                  value={reportData.talentArea}
                  onChange={(e) => setReportData({ ...reportData, talentArea: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                >
                  <option value="Genel Zihinsel Yetenek">Genel Zihinsel</option>
                  <option value="Görsel Sanatlar Yetenek">Görsel Sanatlar</option>
                  <option value="Müzik Yetenek">Müzik Yetenek</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Atölye / Modül Adı</label>
              <input
                type="text"
                value={reportData.workshop}
                onChange={(e) => setReportData({ ...reportData, workshop: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Problem Çözme ve Bilimsel Merak</label>
              <textarea
                rows={2}
                value={reportData.problemSolving}
                onChange={(e) => setReportData({ ...reportData, problemSolving: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Yaratıcılık ve Özgün Üretim</label>
              <textarea
                rows={2}
                value={reportData.creativity}
                onChange={(e) => setReportData({ ...reportData, creativity: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Tavsiyeler ve Sonraki Program</label>
              <textarea
                rows={2}
                value={reportData.recommendations}
                onChange={(e) => setReportData({ ...reportData, recommendations: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
              />
            </div>

            <button
              onClick={handleDownloadReportDocx}
              className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Gelişim Raporunu Word (.docx) Olarak İndir</span>
            </button>
          </div>

          {/* Live Preview of Report */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Canlı Rapor Önizleme
            </h2>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs space-y-4 whitespace-pre-wrap leading-relaxed text-slate-800">
              <div className="text-center font-bold text-sm">
                T.C.&#10;{profile.district} KAYMAKAMLIĞI&#10;İlçe Millî Eğitim Müdürlüğü&#10;{profile.schoolName} Müdürlüğü&#10;&#10;BİREYSEL GELİŞİM VE DEĞERLENDİRME RAPORU
              </div>
              <div>
                Öğrenci: {reportData.studentName} ({reportData.tcNo})&#10;
                Program: {reportData.program} - {reportData.workshop}&#10;
                Dönem: {reportData.term}&#10;
                Yetenek Alanı: {reportData.talentArea}
              </div>
              <div className="border-t border-slate-300 pt-2">
                1. Problem Çözme: {reportData.problemSolving}&#10;&#10;
                2. Yaratıcılık: {reportData.creativity}&#10;&#10;
                3. Takım Çalışması: {reportData.teamwork}&#10;&#10;
                4. Sorumluluk: {reportData.responsibility}
              </div>
              <div className="border-t border-slate-300 pt-2">
                Öneriler: {reportData.recommendations}&#10;&#10;
                Karar: Öğrencinin {reportData.nextProgram} programına geçişi uygun görülmüştür.
              </div>
              <div className="text-right font-bold mt-4">
                {profile.principalName}&#10;{profile.principalTitle}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Attendance & 30% Rule Guidance */}
      {activeTab === 'attendance' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold">MEB BİLSEM Yönergesi Madde 16 - Devamsızlık Kuralı</h2>
              <p className="text-xs leading-relaxed mt-1 text-amber-800">
                Öğrenciler kayıtlı oldukları programa devam etmek zorundadır. Bir ders yılında mazeretsiz olarak toplam ders saatinin <strong>%30'undan fazlasına</strong> devam etmeyen öğrencilerin merkez ile ilişiği kesilir.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-800">İdarecinin İzlemesi Gereken Resmi Devamsızlık Takvim Süreci:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-blue-700">1. Aşama: 1. Uyarı</span>
                <p className="text-slate-600 leading-relaxed">
                  Öğrencinin devamsızlığı toplam sürenin %10'una ulaştığında veliye e-Okul veya SMS/resmi yazı ile ilk bilgilendirme yapılır.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-amber-700">2. Aşama: Taahhütlü Tebligat</span>
                <p className="text-slate-600 leading-relaxed">
                  Devamsızlık %20'ye ulaştığında iadeli taahhütlü resmi mektup veli adresine tebliğ edilir ve öğrenci görüşmeye çağrılır.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-red-700">3. Aşama: Kurul Kararı & İlişik Kesme</span>
                <p className="text-slate-600 leading-relaxed">
                  Geçerli sağlık kurulu raporu veya dondurma dilekçesi olmaksızın %30'u aşan öğrencinin kaydı Yönetim Kurulu kararıyla silinir.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Patents & Intellectual Property */}
      {activeTab === 'patents' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">MEB - TÜRKPATENT Fikri Mülkiyet Başvuru Rehberi</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              BİLSEM öğrencilerinin atölyelerde tasarladığı modeller ve buluşlar için okul adına patent, faydalı model ve tasarım tescili takibi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 text-sm">Faydalı Model</span>
              <p className="text-slate-500">Sanayiye uygulanabilir yeni teknik buluşlar. Koruma süresi: 10 yıl.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 text-sm">Tasarım Tescili</span>
              <p className="text-slate-500">3D yazıcı veya sanat atölyesinde üretilen özgün ürün dış görünümü. Koruma: 5-25 yıl.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 text-sm">İncelemeli Patent</span>
              <p className="text-slate-500">Buluş basamağı içeren, dünya çapında yenilikçi teknik icatlar. Koruma: 20 yıl.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 text-sm">Marka Tescili</span>
              <p className="text-slate-500">BİLSEM Ar-Ge takımlarının ve projelerinin isim ve logo tescilleri.</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onSelectTemplateForEdit('proj-patent-faydali-model')}
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs"
            >
              <span>Patent Başvuru Takip Formunu Aç</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
