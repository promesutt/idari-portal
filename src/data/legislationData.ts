import { LegislationItem } from '../types';

export const LEGISLATION_DATA: LegislationItem[] = [
  {
    id: 'leg-657-izin',
    title: '657 Sayılı Devlet Memurları Kanunu - İzin Hakları',
    code: '657 Sayılı Kanun Madde 102 - 105',
    category: 'Personel & Özlük',
    summary: 'Devlet memurlarının yıllık, mazeret, hastalık ve refakat izinlerine ilişkin temel yasal süreler ve koşullar.',
    keyArticles: [
      {
        articleNo: 'Madde 102',
        topic: 'Yıllık İzin',
        content: 'Hizmeti 1 yıldan 10 yıla kadar olan memurlar için 20 gün, 10 yıldan fazla olanlar için 30 gündür. Öğretmenler yaz ve dinlenme tatillerinde izinli sayıldıklarından ayrıca yıllık izin kullanmazlar (İdareciler hariç).'
      },
      {
        articleNo: 'Madde 104/A',
        topic: 'Doğum ve Süt İzni',
        content: 'Kadın memura doğumdan önce 8 ve doğumdan sonra 8 hafta analık izni verilir. Doğum sonrası analık izni bitiminde ilk 6 ay günde 3 saat, ikinci 6 ay günde 1.5 saat süt izni verilir. Süt izninin kullanım saatleri memur tarafından belirlenir.'
      },
      {
        articleNo: 'Madde 104/B',
        topic: 'Babalık, Evlilik ve Ölüm İzni',
        content: 'Memura eşinin doğum yapması halinde 10 gün babalık izni verilir. Memurun kendisinin veya çocuğunun evlenmesi halinde 7 gün; eşinin, çocuğunun, kendisinin veya eşinin ana, baba ve kardeşinin ölümü halinde 7 gün mazeret izni verilir.'
      },
      {
        articleNo: 'Madde 104/C',
        topic: 'İdarenin Takdirindeki Mazeret İzni',
        content: 'Zorunlu ve mazeret teşkil eden durumlarda birim amirinin muvafakatiyle bir yıl içinde toptan veya parça parça en fazla 10 gün mazeret izni verilebilir. Öğretmenler için bu izin mülki idare amiri / ilçe milli eğitim müdürlüğü yetkisindedir.'
      },
      {
        articleNo: 'Madde 105',
        topic: 'Hastalık ve Refakat İzni',
        content: 'Memura tek hekim raporu ile bir defada en çok 10 gün rapor verilebilir. Bir takvim yılında tek hekimden alınan raporların toplamı 40 günü aşamaz; aşan günler için sağlık kurulu (heyet) raporu şarttır. Birinci derece yakınların ağır kaza veya hayati tehlikeli hastalıklarında sağlık kurulu raporuyla 3 aya kadar refakat izni verilebilir.'
      }
    ]
  },
  {
    id: 'leg-bilsem-yonerge',
    title: 'MEB Bilim ve Sanat Merkezleri Yönergesi',
    code: 'BİLSEM Yönergesi',
    category: 'BİLSEM Özel Modülü',
    summary: 'Özel yetenekli öğrencilerin tespiti, tanılama süreci, eğitim programları ve merkez yönetimine dair usul ve esaslar.',
    keyArticles: [
      {
        articleNo: 'Madde 12',
        topic: 'Eğitim Programları ve Aşamaları',
        content: 'BİLSEM\'de eğitim; Uyum (Oryantasyon), Destek Eğitimi, Bireysel Yetenekleri Fark Ettirme (BYF), Özel Yetenekleri Geliştirme (ÖYG) ve Proje Üretimi ve Yönetimi olmak üzere 5 aşamalı olarak yürütülür.'
      },
      {
        articleNo: 'Madde 16',
        topic: 'Devam-Devamsızlık ve Kayıt Silme',
        content: 'Öğrenciler kayıtlı oldukları programa devam etmek zorundadır. Her eğitim programında, bir ders yılında mazeretsiz olarak toplam ders saatinin %30\'undan fazlasına devam etmeyen öğrencilerin merkez ile ilişiği kesilir. Devamsızlık durumları dönem içinde veliye yazılı tebliğ edilir.'
      },
      {
        articleNo: 'Madde 18',
        topic: 'Bireysel Gelişim Raporları',
        content: 'Her eğitim döneminde danışman ve atölye öğretmenleri tarafından her öğrenci için "Bireysel Gelişim Raporu" düzenlenir. Bu raporlar öğrencinin portfolyosuna eklenir ve veli bilgilendirmesi amacıyla kullanılır.'
      },
      {
        articleNo: 'Madde 21',
        topic: 'Kayıt Dondurma ve Mazeret',
        content: 'Sağlık, ailevi nakil veya zorunlu sebeplerle devam edemeyecek öğrencilerin velileri, gerekçeli dilekçe ve belgelerle başvurmaları halinde Merkez Müdürlüğü Yönetim Kurulu kararı ile 1 eğitim öğretim yılına kadar kayıt dondurabilir.'
      }
    ]
  },
  {
    id: 'leg-nobet',
    title: 'Öğretmen Nöbet Görevi ve Muafiyetleri',
    code: 'İlköğretim ve Ortaöğretim Kurumları Yönetmelikleri',
    category: 'Personel & Özlük',
    summary: 'Okulda nöbet görevinin başlangıcı, bitişi, ücreti ve yasal muafiyet halleri.',
    keyArticles: [
      {
        articleNo: 'Madde 44 (Nöbet Esasları)',
        topic: 'Nöbet Süresi ve Başlangıcı',
        content: 'Nöbet görevi ilk ders başlamadan 15-30 dakika önce başlar, son ders bitiminden 15-30 dakika sonra biter. İkili eğitim yapılan okullarda bu süre idarece belirlenir.'
      },
      {
        articleNo: 'Madde 44/Muafiyet-1',
        topic: 'Hamilelikte Nöbet Muafiyeti',
        content: 'Hamile öğretmenlere, gebeliğin 24. haftasından itibaren ve doğumdan sonraki analık izninin bitiminden itibaren 2 yıl süreyle (isteği dışında) nöbet görevi verilemez.'
      },
      {
        articleNo: 'Madde 44/Muafiyet-2',
        topic: 'Engelli Yakını ve Sağlık Durumu',
        content: 'Engelli çocuğu veya bakmakla yükümlü olduğu ağır engelli yakını bulunan öğretmenlere nöbet muafiyeti sağlanır veya günleri durumlarına göre esnetilir.'
      }
    ]
  },
  {
    id: 'leg-sosyal-etkinlik',
    title: 'MEB Sosyal Etkinlikler ve Okul Gezileri',
    code: 'MEB Sosyal Etkinlikler Yönetmeliği',
    category: 'Sosyal Etkinlik & Gezi',
    summary: 'Okul gezilerinin onaylanması için gerekli 9 zorunlu evrak ve başvuru takvimi.',
    keyArticles: [
      {
        articleNo: 'Madde 13',
        topic: 'Gezi Dosyası ve Onay Süresi',
        content: 'İl içi gezilerde gezi tarihinden en az 7 gün önce okul müdürlüğünce onaylanır veya ilçe MEM\'e sunulur. İl dışı gezilerde ise en az 10-15 gün önce mülki idare amirliği (Kaymakamlık / Valilik) onayı alınmak zorundadır.'
      },
      {
        articleNo: 'Madde 13/Zorunlu Evraklar',
        topic: 'Gezi Dosyasında Bulunması Gereken 9 Belge',
        content: '1. Gezi Planı, 2. Gezi Başvuru Dilekçesi, 3. Katılımcı Öğretmen ve Öğrenci Listesi, 4. Veli İzin (Muvafakat) Belgeleri, 5. TÜRSAB Yetki Belgesi ve Sözleşmesi, 6. Araç Ruhsatı ve Muayene Belgesi, 7. D-2 Yetki Belgesi, 8. Sürücü Ehliyeti ve SRC-2/Psikoteknik Belgesi, 9. Zorunlu Koltuk Ferdi Kaza Sigortası Poliçesi.'
      }
    ]
  },
  {
    id: 'leg-isg-6331',
    title: '6331 Sayılı İş Sağlığı ve Güvenliği Kanunu & MEB Uygulamaları',
    code: '6331 Sayılı Kanun & MEB İSG Genelgeleri',
    category: 'İş Sağlığı ve Güvenliği',
    summary: 'Okullarda iş kazası bildirimi, risk değerlendirmesi ve acil durum tahliye tatbikatları.',
    keyArticles: [
      {
        articleNo: 'Madde 14',
        topic: 'İş Kazası Bildirim Süresi (Kritik 3 Gün Kuralı)',
        content: 'Okulda görev yapan kadrolu, sözleşmeli veya İŞKUR personeli ile öğrencilerin geçirdiği kazalar, kazadan sonraki en geç 3 İŞ GÜNÜ içinde SGK sistemine ve MEBBİS İSG modülüne bildirilmelidir. Süresinde yapılmayan bildirimlerde idari para cezası uygulanır.'
      },
      {
        articleNo: 'Madde 11',
        topic: 'Tahliye Tatbikatları ve Acil Durum Ekipleri',
        content: 'Tüm eğitim kurumlarında yılda en az 1 kez yangın ve deprem tahliye tatbikatı yapılması ve tutanağının MEBBİS İSG modülüne işlenmesi yasal zorunluluktur. Acil durum ekipleri (Söndürme, Kurtarma, Koruma, İlk Yardım) her eğitim yılı başında güncellenir.'
      }
    ]
  },
  {
    id: 'leg-resmi-yazisma',
    title: 'Resmi Yazışmalarda Uygulanacak Usul ve Esaslar',
    code: 'Cumhurbaşkanlığı Kararnamesi / DYS Kuralları',
    category: 'Resmi Yazışma Standartları',
    summary: 'Resmi yazıların şekil şartları, hitap, sayı, tarih, yazı tipi, imza bloğu ve arz/rica kuralları.',
    keyArticles: [
      {
        articleNo: 'Madde 15',
        topic: 'Metin Bitiriş Kuralı (Arz / Rica)',
        content: 'Üst ve aynı düzey makamlara: "Arz ederim." / Ast makamlara: "Rica ederim." / Hem üst hem alt makamlara veya muhatabı belirsiz dağıtımlara: "Arz ve rica ederim." kuralı uygulanır.'
      },
      {
        articleNo: 'Madde 12',
        topic: 'Yazı Tipi ve Kenar Boşlukları',
        content: 'Resmi yazılarda "Times New Roman" 12 punto veya "Arial" 11 punto yazı tipi kullanılır. Sayfa kenar boşlukları sol 2.5 cm, sağ 1.5 cm, üst 2.5 cm, alt 2.5 cm standart olarak ayarlanır.'
      }
    ]
  }
];
