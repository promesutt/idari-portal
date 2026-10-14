import { CalendarEvent } from '../types';

export const CALENDAR_EVENTS: CalendarEvent[] = [
  // EYLÜL (Index 8)
  {
    id: 'cal-eyl-1',
    monthIndex: 8,
    monthName: 'Eylül',
    title: 'Sene Başı Öğretmenler Kurulu Toplantısı',
    deadline: 'Eylül ayının ilk iş haftası',
    category: 'kurullar',
    description: 'Yıllık çalışma takvimi, kurul ve komisyon üyelerinin seçimi, nöbet görevleri ve ders dağılımlarının karara bağlanması.',
    legalBasis: 'MEB Okul Öncesi ve İlköğretim / Ortaöğretim Kurumları Yönetmeliği',
    isCritical: true
  },
  {
    id: 'cal-eyl-2',
    monthIndex: 8,
    monthName: 'Eylül',
    title: 'Nöbet ve Ders Dağılım Çizelgelerinin Onayı',
    deadline: 'Ders yılının ilk günü',
    category: 'personel',
    description: 'Haftalık ders programı, idareci ve öğretmen nöbet yerleri ile günlerinin tebliğ edilmesi.',
    legalBasis: 'MEB Yönetmelikleri Madde 44',
    isCritical: true
  },
  {
    id: 'cal-eyl-3',
    monthIndex: 8,
    monthName: 'Eylül',
    title: 'BİLSEM Yeni Kayıt ve Uyum Programı Başlangıcı',
    deadline: 'Eylül 2. hafta',
    category: 'bilsem',
    description: 'BİLSEM tanılama sonucunda yeni kayıt hakkı kazanan öğrencilerin oryantasyon ve Uyum eğitimi planlaması.',
    legalBasis: 'MEB BİLSEM Yönergesi',
    isCritical: true
  },
  {
    id: 'cal-eyl-4',
    monthIndex: 8,
    monthName: 'Eylül',
    title: 'Ders Dışı Eğitim (Egzersiz) Başvuruları ve Onayı',
    deadline: 'Eylül sonu',
    category: 'personel',
    description: 'Öğretmenlerin satranç, müzik, robotik vb. ders dışı egzersiz planlarının incelenip İlçe MEM / Kaymakamlık onayına sunulması.',
    legalBasis: 'MEB Ders ve Ek Ders Saatlerine İlişkin Karar',
    isCritical: false
  },

  // EKİM (Index 9)
  {
    id: 'cal-eki-1',
    monthIndex: 9,
    monthName: 'Ekim',
    title: 'Okul Aile Birliği Olağan Genel Kurulu',
    deadline: '31 Ekim tarihine kadar',
    category: 'mali',
    description: 'Yıllık genel kurul divan tutanağı, yönetim ve denetim kurullarının seçimi, TEFBİS yetkilendirmesi.',
    legalBasis: 'MEB Okul Aile Birliği Yönetmeliği',
    isCritical: true
  },
  {
    id: 'cal-eki-2',
    monthIndex: 9,
    monthName: 'Ekim',
    title: 'İSG 1. Dönem Kurul Toplantısı ve Risk Analizi',
    deadline: 'Ekim 2. hafta',
    category: 'isg',
    description: 'Okul iş sağlığı ve güvenliği kurulu toplanması, atölye ve laboratuvar risk analizlerinin güncellenmesi.',
    legalBasis: '6331 Sayılı İSG Kanunu',
    isCritical: true
  },
  {
    id: 'cal-eki-3',
    monthIndex: 9,
    monthName: 'Ekim',
    title: '29 Ekim Cumhuriyet Bayramı Tören Komitesi',
    deadline: 'Ekim 3. hafta',
    category: 'idari',
    description: 'Okul kutlama programı, görevli öğretmenler ve öğrenci gruplarının belirlenmesi.',
    isCritical: false
  },

  // KASIM (Index 10)
  {
    id: 'cal-kas-1',
    monthIndex: 10,
    monthName: 'Kasım',
    title: '1. Dönem Ara Tatil Mesleki Çalışma Programı',
    deadline: 'Kasım ara tatil haftası',
    category: 'personel',
    description: 'Öğretmenlerin ara tatil seminer programı, zümre toplantıları ve katılım puantajları.',
    isCritical: false
  },
  {
    id: 'cal-kas-2',
    monthIndex: 10,
    monthName: 'Kasım',
    title: 'TÜBİTAK 4006 ve 2204 Proje Başvuruları',
    deadline: 'Kasım sonu',
    category: 'projeler',
    description: 'BİLSEM ve okul proje ekiplerinin araştırma projelerinin sisteme yüklenmesi ve okul müdürü onayı.',
    legalBasis: 'TÜBİTAK Çağrı Metinleri',
    isCritical: true
  },
  {
    id: 'cal-kas-3',
    monthIndex: 10,
    monthName: 'Kasım',
    title: '1. Ortak Sınavlar ve e-Okul Not Girişleri',
    deadline: 'Kasım sonu',
    category: 'ogrenci',
    description: 'MEB merkezi ve okul ortak sınav takviminin uygulanması, sınav analizlerinin zümrelerce yapılması.',
    isCritical: true
  },

  // ARALIK (Index 11)
  {
    id: 'cal-ara-1',
    monthIndex: 11,
    monthName: 'Aralık',
    title: 'Taşınır Yıl Sonu Sayım İşlemleri (TKYS)',
    deadline: '31 Aralık tarihine kadar',
    category: 'mali',
    description: 'Taşınır Sayım Komisyonu marifetiyle demirbaş ve sarf malzemelerin fiili sayımı, yıl sonu cetvellerinin İlçe MEM\'e teslimi.',
    legalBasis: 'Taşınır Mal Yönetmeliği',
    isCritical: true
  },
  {
    id: 'cal-ara-2',
    monthIndex: 11,
    monthName: 'Aralık',
    title: 'Devamsızlık Uyarı Mektuplarının Gönderimi',
    deadline: 'Aralık ortası',
    category: 'ogrenci',
    description: 'Özürlü ve özürsüz devamsızlık sınırına yaklaşan öğrencilerin velilerine iadeli taahhütlü mektupların tebliği.',
    legalBasis: 'MEB Yönetmelikleri',
    isCritical: true
  },

  // OCAK (Index 0)
  {
    id: 'cal-oca-1',
    monthIndex: 0,
    monthName: 'Ocak',
    title: '1. Dönem Sonu Not Kilitlenmesi ve Karne Basımı',
    deadline: '1. Dönemin son haftası',
    category: 'ogrenci',
    description: 'Tüm notların e-Okul sistemine girilmesi, karne, takdir, teşekkür ve iftihar belgelerinin basımı ve imzalanması.',
    isCritical: true
  },
  {
    id: 'cal-oca-2',
    monthIndex: 0,
    monthName: 'Ocak',
    title: 'BİLSEM 1. Dönem Bireysel Gelişim Raporları',
    deadline: 'Dönem bitimi',
    category: 'bilsem',
    description: 'Destek, BYF ve ÖYG programı öğrencilerinin gelişim raporlarının hazırlanıp velilere ulaştırılması.',
    legalBasis: 'BİLSEM Yönergesi Madde 18',
    isCritical: true
  },
  {
    id: 'cal-oca-3',
    monthIndex: 0,
    monthName: 'Ocak',
    title: 'Yıl Sonu Mali Bütçe ve Ek Ders Kapatması',
    deadline: 'Ocak 15',
    category: 'mali',
    description: 'KBS ek ders icmalleri, vergi matrahı güncellemeleri ve SGK bildirgelerinin onaylanması.',
    isCritical: true
  },

  // ŞUBAT (Index 1)
  {
    id: 'cal-sub-1',
    monthIndex: 1,
    monthName: 'Şubat',
    title: '2. Dönem Başı Öğretmenler Kurulu',
    deadline: '2. Dönemin ilk haftası',
    category: 'kurullar',
    description: '1. Dönem akademik ve sosyal etkinlik başarılarının değerlendirilmesi, 2. dönem hedefleri ve kurul kararları.',
    isCritical: true
  },
  {
    id: 'cal-sub-2',
    monthIndex: 1,
    monthName: 'Şubat',
    title: 'Şube Öğretmenler Kurulu (ŞÖK) Toplantıları',
    deadline: 'Şubat 2. hafta',
    category: 'kurullar',
    description: 'Öğrenci başarı ve davranış durumlarının her şube bazında incelenip karara bağlanması.',
    isCritical: false
  },
  {
    id: 'cal-sub-3',
    monthIndex: 1,
    monthName: 'Şubat',
    title: 'BİLSEM Öğrenci Tanılama İtiraz Süreci',
    deadline: 'Kılavuzda belirtilen tarihler',
    category: 'bilsem',
    description: 'Ön değerlendirme sonuçlarına veli itiraz dilekçelerinin kabulü ve İl Tanılama Komisyonuna intikali.',
    isCritical: true
  },

  // MART (Index 2)
  {
    id: 'cal-mar-1',
    monthIndex: 2,
    monthName: 'Mart',
    title: '1-7 Mart Deprem Haftası Tahliye Tatbikatı',
    deadline: '7 Mart tarihine kadar',
    category: 'isg',
    description: 'Okul genelinde sirenli deprem ve yangın tahliyesi yapılması, tahliye süresinin tutanakla MEBBİS İSG modülüne işlenmesi.',
    legalBasis: 'MEB Yangın ve Afet Yönergesi',
    isCritical: true
  },
  {
    id: 'cal-mar-2',
    monthIndex: 2,
    monthName: 'Mart',
    title: 'TEKNOFEST Başvuru ve Ön Değerlendirme Süreci',
    deadline: 'Mart sonu',
    category: 'projeler',
    description: 'Takım danışman onayları, veli muvafakatnameleri ve proje raporlarının TEKNOFEST portalına yüklenmesi.',
    isCritical: false
  },

  // NİSAN (Index 3)
  {
    id: 'cal-nis-1',
    monthIndex: 3,
    monthName: 'Nisan',
    title: '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı',
    deadline: 'Nisan 3. hafta',
    category: 'idari',
    description: 'Tören ve şenlik hazırlıkları, okul içi gösteri ve yarışma organizasyonu.',
    isCritical: false
  },
  {
    id: 'cal-nis-2',
    monthIndex: 3,
    monthName: 'Nisan',
    title: 'Periyodik Teknik ve İSG Kontrolleri',
    deadline: 'Nisan sonu',
    category: 'isg',
    description: 'Yangın tüpleri basınç kontrolü, elektrik panoları termal ölçüm ve kazan dairesi periyodik muayene kontrolleri.',
    isCritical: true
  },

  // MAYIS (Index 4)
  {
    id: 'cal-may-1',
    monthIndex: 4,
    monthName: 'Mayıs',
    title: 'BİLSEM Bireysel Değerlendirme Uygulamaları',
    deadline: 'Mayıs - Haziran',
    category: 'bilsem',
    description: 'Genel zihinsel, resim ve müzik yetenek alanlarında randevulu bireysel inceleme sınavlarının yürütülmesi.',
    legalBasis: 'BİLSEM Tanılama Kılavuzu',
    isCritical: true
  },
  {
    id: 'cal-may-2',
    monthIndex: 4,
    monthName: 'Mayıs',
    title: 'TÜBİTAK 4006 Bilim Fuarı ve Yıl Sonu Sergileri',
    deadline: 'Mayıs ayı',
    category: 'projeler',
    description: 'Onaylanan projelerin sergilenmesi, protokol davetleri ve katılımcı belgelerinin dağıtımı.',
    isCritical: false
  },
  {
    id: 'cal-may-3',
    monthIndex: 4,
    monthName: 'Mayıs',
    title: 'Eğitim ve Kültür Gezileri Dosyalarının Onayı',
    deadline: 'Gezi tarihinden en az 7 gün önce',
    category: 'sosyal_etkinlik',
    description: 'Bahar dönemi okul ve BİLSEM gezilerinin 9 evraklı dosyasının İlçe MEM / Kaymakamlık onayına sunulması.',
    legalBasis: 'Sosyal Etkinlikler Yönetmeliği',
    isCritical: true
  },

  // HAZİRAN (Index 5)
  {
    id: 'cal-haz-1',
    monthIndex: 5,
    monthName: 'Haziran',
    title: 'Sene Sonu Öğretmenler Kurulu',
    deadline: 'Ders yılının son haftası',
    category: 'kurullar',
    description: 'Yıllık hedeflerin gerçekleşme raporu, sosyal kulüp raporları, komisyon çalışmalarının değerlendirilmesi.',
    isCritical: true
  },
  {
    id: 'cal-haz-2',
    monthIndex: 5,
    monthName: 'Haziran',
    title: 'Yıl Sonu Karne Basımı ve Mezuniyet İşlemleri',
    deadline: 'Ders yılının son Cuma günü',
    category: 'ogrenci',
    description: 'e-Okul dönem sonu kapatmaları, mezuniyet belgeleri, iftihar ve onur belgelerinin hazırlanması.',
    isCritical: true
  },
  {
    id: 'cal-haz-3',
    monthIndex: 5,
    monthName: 'Haziran',
    title: 'BİLSEM 2. Dönem Bireysel Gelişim Raporları',
    deadline: 'Ders yılı bitimi',
    category: 'bilsem',
    description: 'Öğrencilerin bir üst programa (BYF -> ÖYG -> Proje) geçiş durumlarının kurulla tespit edilmesi ve raporlanması.',
    legalBasis: 'BİLSEM Yönergesi',
    isCritical: true
  },

  // TEMMUZ & AĞUSTOS (Index 6 ve 7)
  {
    id: 'cal-tem-1',
    monthIndex: 6,
    monthName: 'Temmuz',
    title: 'LGS / YKS Tercih Danışmanlığı Komisyonları',
    deadline: 'Bakanlık tercih takvimi',
    category: 'idari',
    description: 'Rehber öğretmenlerin tercih danışmanlığı komisyonu görevlendirme ve çalışma çizelgeleri.',
    isCritical: false
  },
  {
    id: 'cal-agu-1',
    monthIndex: 7,
    monthName: 'Ağustos',
    title: 'BİLSEM Yeni Kayıt Evraklarının Kabulü',
    deadline: 'Ağustos 3. - 4. haftası',
    category: 'bilsem',
    description: 'Bireysel değerlendirme sonuçlarına göre kayıt hakkı kazanan yeni öğrencilerin kesin kayıt işlemlerinin yürütülmesi.',
    legalBasis: 'BİLSEM Yönergesi',
    isCritical: true
  },
  {
    id: 'cal-agu-2',
    monthIndex: 7,
    monthName: 'Ağustos',
    title: 'Yeni Eğitim Öğretim Yılı Fiziki Hazırlıklar',
    deadline: '31 Ağustos',
    category: 'idari',
    description: 'Derslikler, atölyeler ve laboratuvarların bakım-onarımı, temizlik ve kırtasiye malzemesi tedariki.',
    isCritical: false
  }
];
