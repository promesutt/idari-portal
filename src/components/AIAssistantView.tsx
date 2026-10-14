import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Send,
  RefreshCw,
  FileCheck,
  ShieldAlert,
  Building
} from 'lucide-react';
import { InstitutionProfile } from '../types';

interface AIAssistantViewProps {
  profile: InstitutionProfile;
  onTransferToGenerator: (subject: string, addressee: string, body: string) => void;
}

interface ScenarioTemplate {
  id: string;
  title: string;
  category: string;
  sampleInput: string;
  generatedSubject: string;
  generatedAddressee: string;
  generatedBody: string;
}

const PRESET_SCENARIOS: ScenarioTemplate[] = [
  {
    id: 'scen-derse-girmeme',
    title: 'Öğretmen Derse Mazeretsiz Girmeme / Savunma İstemi',
    category: 'Personel / Disiplin',
    sampleInput: 'Matematik öğretmeni Ahmet Hoca salı günü 3. ve 4. saat dersine girmedi, nöbetçi müdür yardımcısı tutanak tuttu. 7 gün içinde yazılı savunmasını istiyoruz.',
    generatedSubject: 'Yazılı Savunma İstemi',
    generatedAddressee: 'Sayın Ahmet YILMAZ\n(Matematik Öğretmeni)',
    generatedBody: `Müdürlüğümüze intikal eden 14.10.2026 tarihli nöbetçi müdür yardımcısı tespit tutanağının tetkikinde; 14.10.2026 Salı günü 3. ve 4. ders saatlerinde kurumumuz 7/B ve 8/A sınıflarındaki ders görevlerinize geçerli ve belgelendirilmiş bir mazeret beyan etmeksizin girmediğiniz tespit edilmiştir.\n\n657 sayılı Devlet Memurları Kanunu'nun 125. ve 130. maddeleri gereğince, bahse konu fiiliniz ile ilgili yazılı savunmanızı işbu yazının tarafınıza tebliğ edildiği tarihten itibaren 7 (yedi) gün içerisinde Müdürlüğümüze ibraz etmeniz hususunda;\n\nBilgilerinizi ve gereğini rica ederim.`
  },
  {
    id: 'scen-belediye-destek',
    title: 'Belediyeden Atölye / Malzeme Desteği Talebi',
    category: 'Kurumlar Arası İş Birliği',
    sampleInput: 'Güngören Belediyesinden BİLSEM robotik atölyemiz için 3 adet 3D yazıcı ve filament seti desteği istiyoruz. Öğrencilerimiz TEKNOFEST ve TÜBİTAK yarışmalarına hazırlanıyor.',
    generatedSubject: 'Eğitim Teknolojileri ve Atölye Donatım Desteği Talebi',
    generatedAddressee: 'GÜNGÖREN BELEDİYE BAŞKANLIĞINA\n(Kültür ve Sosyal İşler Müdürlüğü)',
    generatedBody: `Kurumumuz, ilçemiz genelinde özel yetenekli öğrencilerin bilimsel, teknolojik ve sanatsal kapasitelerini geliştirmek üzere faaliyet göstermektedir. Öğrencilerimiz TEKNOFEST Havacılık, Uzay ve Teknoloji Festivali ile TÜBİTAK Araştırma Projeleri yarışmalarına hazırlanmakta olup milli teknoloji hamlesi vizyonu doğrultusunda özgün prototipler geliştirmektedir.\n\nÖğrencilerimizin proje çalışmalarında ihtiyaç duyulan 3 (üç) adet 3D yazıcı ve baskı sarf malzemelerinin (filament) Belediyeniz imkânları dahilinde kurumumuza hibe/tahsis edilmesi hususunda;\n\nDesteklerinizi ve gereğini tensiplerinize arz ederim.`
  },
  {
    id: 'scen-universite-mentorluk',
    title: 'Üniversiteden Akademisyen Mentorluk Protokolü Talebi',
    category: 'Ar-Ge & Projeler',
    sampleInput: 'Yıldız Teknik Üniversitesinden veya İstanbul Üniversitesinden akademisyenlerin BİLSEM proje öğrencilerine danışmanlık yapması için iş birliği talebi.',
    generatedSubject: 'Akademik Mentorluk ve Eğitim İş Birliği Talebi',
    generatedAddressee: 'YILDIZ TEKNİK ÜNİVERSİTESİ REKTÖRLÜĞÜNE\n(Genel Sekreterlik)',
    generatedBody: `Milli Eğitim Bakanlığı Bilim ve Sanat Merkezleri Yönergesi doğrultusunda merkezimizde eğitim gören lise ve ortaokul kademesindeki özel yetenekli öğrencilerimiz TÜBİTAK 2204 Araştırma Projeleri, ulusal ve uluslararası bilim yarışmaları kapsamında ileri düzey bilimsel araştırmalar yürütmektedir.\n\nÖğrencilerimizin araştırma projelerinin akademik niteliğini artırmak, laboratuvar imkânlarından istifade etmek ve Üniversitenizin ilgili fakülte öğretim üyelerinin öğrencilerimize danışmanlık/mentorluk sağlaması amacıyla kurumlarımız arasında Eğitimde İş Birliği Protokolü akdedilmesi hususunu;\n\nTensiplerinize ve takdirlerinize arz ederim.`
  },
  {
    id: 'scen-veli-zarar-tazmin',
    title: 'Öğrencinin Okul Malına Zarar Vermesi & Veli Bilgilendirme',
    category: 'Öğrenci & Mali İşler',
    sampleInput: 'Bir öğrenci laboratuvardaki mikroskobu kasten kırdı, hasar tespit tutanağı tuttuk, veliye hasarın karşılanması gerektiğini resmi dille ileteceğiz.',
    generatedSubject: 'Kurum Malına Verilen Zarar ve Tazmin Talebi',
    generatedAddressee: 'Sayın Veli Adı Soyadı\n(Öğrenci Adı Soyadı Velisi)',
    generatedBody: `Kurumumuz bünyesinde eğitim gören öğrenciniz hakkında düzenlenen 14.10.2026 tarihli Olay ve Hasar Tespit Tutanağı ekte sunulmuştur. Yapılan incelemede öğrencinizin laboratuvar dersi esnasında gerekli dikkat ve özeni göstermeyerek kurum demirbaşına kayıtlı optik mikroskoba zarar verdiği ve cihazın kullanılamaz hale geldiği tespit edilmiştir.\n\nKamu Zararlarının Tahsiline İlişkin Usul ve Esaslar ile MEB Yönetmelikleri gereğince, oluşan ... TL tutarındaki kamu zararının Okul Aile Birliği hesabına defaten yatırılarak dekontunun Müdürlüğümüze teslim edilmesi hususunda;\n\nBilgilerinizi ve gereğini önemle rica ederim.`
  }
];

export const AIAssistantView: React.FC<AIAssistantViewProps> = ({
  profile,
  onTransferToGenerator,
}) => {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioTemplate>(PRESET_SCENARIOS[0]);
  const [userInput, setUserInput] = useState<string>(PRESET_SCENARIOS[0].sampleInput);
  const [generatedResult, setGeneratedResult] = useState<{
    subject: string;
    addressee: string;
    body: string;
  }>({
    subject: PRESET_SCENARIOS[0].generatedSubject,
    addressee: PRESET_SCENARIOS[0].generatedAddressee,
    body: PRESET_SCENARIOS[0].generatedBody,
  });
  const [copied, setCopied] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSelectScenario = (scen: ScenarioTemplate) => {
    setSelectedScenario(scen);
    setUserInput(scen.sampleInput);
    setGeneratedResult({
      subject: scen.generatedSubject,
      addressee: scen.generatedAddressee,
      body: scen.generatedBody,
    });
  };

  const handleGenerateFromCustom = () => {
    setIsProcessing(true);
    setTimeout(() => {
      // Intelligent rule-based bureaucratic formatter
      const isKaymakam = userInput.toLowerCase().includes('kaymakam') || userInput.toLowerCase().includes('vali') || userInput.toLowerCase().includes('müdürlük');
      const addressee = isKaymakam
        ? `${profile.district.toUpperCase()} KAYMAKAMLIĞINA\n(İlçe Millî Eğitim Müdürlüğü)`
        : `${profile.district.toUpperCase()} İLÇE MİLLÎ EĞİTİM MÜDÜRLÜĞÜNE`;

      const conclusion = isKaymakam ? 'Gereğini olurlarınıza arz ederim.' : 'Gereğini bilgilerinize arz ederim.';

      setGeneratedResult({
        subject: 'İdari İşlem ve Talep Bildirimi',
        addressee: addressee,
        body: `Kurumumuz bünyesinde yürütülen eğitim-öğretim ve yönetim faaliyetleri kapsamında;\n\n${userInput.trim()}\n\nKonuya ilişkin mevzuat hükümleri ve makamlarınızın talimatları doğrultusunda gerekli idari iş ve işlemlerin yürütülmesi hususunda;\n\n${conclusion}`,
      });
      setIsProcessing(false);
    }, 600);
  };

  const handleCopyText = () => {
    const text = `${generatedResult.subject}\n\n${generatedResult.addressee}\n\n${generatedResult.body}`;
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
            <span className="p-1.5 rounded-lg bg-purple-100 text-purple-700 font-bold text-xs">AKILLI ASİSTAN</span>
            <h1 className="text-xl font-bold text-slate-900">DYS & Resmi Dil Yazışma Asistanı</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Gündelik dille yazılan idari notları ve olayları MEB Resmi Yazışma Usul ve Esaslarına uygun resmi bürokratik metne çevirir
          </p>
        </div>
      </div>

      {/* Preset Scenarios Carousel / Buttons */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Sık Karşılaşılan İdari Durum Şablonları:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRESET_SCENARIOS.map((scen) => (
            <button
              key={scen.id}
              onClick={() => handleSelectScenario(scen)}
              className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                selectedScenario.id === scen.id
                  ? 'border-purple-600 bg-purple-50/70 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-[10px] font-bold uppercase text-purple-700 tracking-wider">
                {scen.category}
              </span>
              <span className="text-xs font-bold text-slate-900 mt-1 line-clamp-2">
                {scen.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Two Columns: Raw Notes Input (Left) -> Formatted Official Text (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Input */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Kaba Notlar / Olayın Özeti</span>
            </h2>
            <span className="text-[11px] text-slate-400">Serbest Anlatım</span>
          </div>

          <div className="space-y-2">
            <textarea
              rows={8}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Olayı, kişileri, tarihleri ve ne talep ettiğinizi serbest dille yazın..."
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 leading-relaxed text-slate-800"
            />
          </div>

          <button
            onClick={handleGenerateFromCustom}
            disabled={isProcessing || !userInput.trim()}
            className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Resmi Dille Düzenleniyor...</span>
              </>
            ) : (
              <>
                <Bot className="w-4 h-4" />
                <span>Resmi Yazışma Metnine Dönüştür</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Output */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>Üretilen MEB DYS Resmi Metni</span>
            </h2>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center space-x-1 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
              </button>

              <button
                onClick={() => onTransferToGenerator(generatedResult.subject, generatedResult.addressee, generatedResult.body)}
                className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-2xs"
              >
                <span>Oluşturucuya Aktar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
            <div>
              <span className="font-sans font-bold text-slate-500 text-[11px] block">KONU:</span>
              <span className="font-bold">{generatedResult.subject}</span>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <span className="font-sans font-bold text-slate-500 text-[11px] block">MUHATAP:</span>
              <span className="font-bold">{generatedResult.addressee}</span>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <span className="font-sans font-bold text-slate-500 text-[11px] block mb-1">GÖVDE METNİ:</span>
              <p className="whitespace-pre-wrap">{generatedResult.body}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
