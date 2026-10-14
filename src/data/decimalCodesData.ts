import { DecimalCode } from '../types';

export const DECIMAL_CODES: DecimalCode[] = [
  // Personel & Özlük (903 Grubu)
  {
    code: '903.02.01',
    name: 'Mazeret İzinleri (Doğum, Ölüm, Evlilik, Süt İzni)',
    category: 'Personel & Özlük',
    isPopular: true,
    description: '657 sayılı Kanunun 104. maddesi kapsamındaki mazeret izinleri yazışmaları.'
  },
  {
    code: '903.02.02',
    name: 'Yıllık İzinler',
    category: 'Personel & Özlük',
    isPopular: true,
    description: 'Yönetici ve memurların yıllık izin talep ve onay yazışmaları.'
  },
  {
    code: '903.03.01',
    name: 'Hastalık ve Sağlık Raporları İntikali',
    category: 'Personel & Özlük',
    isPopular: true,
    description: 'Personelin aldığı hekim ve heyet raporlarının İlçe MEM ve SGK sistemine bildirimi.'
  },
  {
    code: '903.02.03',
    name: 'Refakat İzni ve Aylıksız İzinler',
    category: 'Personel & Özlük',
    isPopular: false,
    description: 'Birinci derece yakınların sağlık kurulu raporuna bağlı refakat izni ve doğum/askerlik aylıksız izinleri.'
  },
  {
    code: '903.01.01',
    name: 'Personel Göreve Başlama ve Ayrılma Yazıları',
    category: 'Personel & Özlük',
    isPopular: true,
    description: 'Atama, nakil, askerlik, doğum sonrası göreve başlama veya ilişik kesme tebliğleri.'
  },
  {
    code: '903.04.01',
    name: 'Ders Dışı Eğitim Çalışmaları (Egzersiz) Onayları',
    category: 'Personel & Özlük',
    isPopular: true,
    description: 'Tiyatro, izcilik, müzik, spor, satranç, resim egzersiz programı ve kaymakamlık onayı.'
  },
  {
    code: '903.04.02',
    name: 'Destek Eğitim Odası ve DYK Görevlendirmeleri',
    category: 'Personel & Özlük',
    isPopular: true,
    description: 'Destek eğitim odası açılması, öğretmen görevlendirilmesi ve ek ders yazışmaları.'
  },
  {
    code: '903.04.03',
    name: 'Nöbet Dağılım Çizelgesi ve Nöbet Görevleri',
    category: 'Personel & Özlük',
    isPopular: true,
    description: 'Öğretmenlerin haftalık okul nöbet görev dağılımları ve nöbet muafiyet yazıları.'
  },
  {
    code: '903.05.01',
    name: 'Hizmet İçi Eğitim Başvuru ve Görevlendirmeler',
    category: 'Personel & Özlük',
    isPopular: false,
    description: 'Mahalli ve merkezi hizmet içi eğitim kursları izin ve yolluk onayları.'
  },
  {
    code: '903.06.01',
    name: 'Sendika Üyelik, Çekilme ve Temsilcilik İşleri',
    category: 'Personel & Özlük',
    isPopular: true,
    description: 'Sendika üyelik ve çekilme bildirim formlarının İlçe MEM ve malmüdürlüğüne gönderilmesi.'
  },
  {
    code: '903.07.01',
    name: 'İş Sağlığı ve Güvenliği (İSG) Genel Yazışmaları',
    category: 'İş Sağlığı ve Güvenliği',
    isPopular: true,
    description: 'İSG Kurul toplantıları, risk değerlendirme ve MEBBİS İSG modülü bildirimleri.'
  },
  {
    code: '903.07.02',
    name: 'İş Kazası Bildirimi ve Tutanakları',
    category: 'İş Sağlığı ve Güvenliği',
    isPopular: true,
    description: 'Okulda meydana gelen personel veya öğrenci kazalarının SGK ve İSG birimine resmi intikali (3 iş günü).'
  },
  {
    code: '903.09.01',
    name: 'Personel Disiplin, İnceleme ve Soruşturma',
    category: 'Personel & Özlük',
    isPopular: false,
    description: 'Savunma istem yazıları, disiplin cezası bildirimleri ve tebliğ-tebellüğ evrakları.'
  },
  {
    code: '903.10.01',
    name: 'Terfi, Terfi İtirazı ve Hizmet Cetveli',
    category: 'Personel & Özlük',
    isPopular: false,
    description: 'Yıllık kademe ve derece ilerlemeleri, uzman/başöğretmenlik unvan intikalleri.'
  },

  // Öğrenci İşleri (821 Grubu)
  {
    code: '821.01.01',
    name: 'Öğrenci Kayıt-Kabul ve Nakil İşlemleri',
    category: 'Öğrenci İşleri',
    isPopular: true,
    description: 'Öğrenci nakil talepleri, yabancı uyruklu öğrenci denklik ve kayıt yazışmaları.'
  },
  {
    code: '821.02.01',
    name: 'Öğrenci Devamsızlık Bildirimleri (Mektuplar)',
    category: 'Öğrenci İşleri',
    isPopular: true,
    description: '5, 10, 15 günlük devamsızlık durumlarında veliye gönderilen iadeli taahhütlü resmi mektuplar.'
  },
  {
    code: '821.02.02',
    name: 'Öğrenci İzin Talepleri ve Mazeret İzinleri',
    category: 'Öğrenci İşleri',
    isPopular: true,
    description: 'Velinin yazılı talebi doğrultusunda okul müdürlüğünce verilen mazeret izinleri.'
  },
  {
    code: '821.03.01',
    name: 'Öğrenci Not, Sınav İtirazı ve Telafi Sınavları',
    category: 'Öğrenci İşleri',
    isPopular: false,
    description: 'Yazılı sınav sonuçlarına veli itirazları, komisyon inceleme tutanakları.'
  },
  {
    code: '821.04.01',
    name: 'Öğrenci Ödül ve Disiplin İşlemleri',
    category: 'Öğrenci İşleri',
    isPopular: true,
    description: 'Öğrenci Davranışlarını Değerlendirme Kurulu (ÖDDK) ve Disiplin Kurulu karar tutanakları.'
  },
  {
    code: '821.05.01',
    name: 'Okul Gezileri Onay ve Dosya Yazışmaları',
    category: 'Sosyal Etkinlik & Gezi',
    isPopular: true,
    description: 'İl içi ve il dışı eğitim, bilim, kültür ve müze gezileri mülki idare amiri / ilçe onay yazıları.'
  },
  {
    code: '821.05.02',
    name: 'Sosyal Kulüpler ve Toplum Hizmeti Faaliyetleri',
    category: 'Sosyal Etkinlik & Gezi',
    isPopular: false,
    description: 'Öğrenci kulüpleri yıllık planları, toplum hizmeti çalışma tutanakları.'
  },
  {
    code: '821.05.03',
    name: 'Yarışma, Sergi ve Festival Katılım Onayları',
    category: 'Sosyal Etkinlik & Gezi',
    isPopular: true,
    description: 'Robotik, resim, müzik, münazara ve spor yarışmaları resmi katılım yazıları.'
  },

  // BİLSEM Özel (Özel Eğitim ve Rehberlik - 821.06)
  {
    code: '821.06.01',
    name: 'BİLSEM Tanılama ve Değerlendirme Süreçleri',
    category: 'BİLSEM Özel Modülü',
    isPopular: true,
    description: 'BİLSEM ön değerlendirme ve bireysel değerlendirme sınavları koordinasyon yazışmaları.'
  },
  {
    code: '821.06.02',
    name: 'BİLSEM Kayıt Kabul ve Uyum Programı',
    category: 'BİLSEM Özel Modülü',
    isPopular: true,
    description: 'Yeni kayıt hakkı kazanan özel yetenekli öğrencilerin kayıt evrakları ve Uyum programı.'
  },
  {
    code: '821.06.03',
    name: 'BİLSEM Program Geçişleri (Destek, BYF, ÖYG, Proje)',
    category: 'BİLSEM Özel Modülü',
    isPopular: true,
    description: 'Öğrencilerin BİLSEM program basamaklarındaki gelişim raporları ve dönem sonu intikalleri.'
  },
  {
    code: '821.06.04',
    name: 'BİLSEM Öğrenci İzin, Kayıt Dondurma ve Ayrılma',
    category: 'BİLSEM Özel Modülü',
    isPopular: true,
    description: 'Veli talebiyle kayıt dondurma, BİLSEM nakil istekleri ve telafi eğitimleri.'
  },
  {
    code: '821.06.05',
    name: 'BİLSEM Bireysel Gelişim ve Değerlendirme Raporları',
    category: 'BİLSEM Özel Modülü',
    isPopular: true,
    description: 'Öğretmenler tarafından hazırlanan dönemlik gelişim formlarının arşivi ve veli tebliği.'
  },

  // Kurul & Komisyonlar
  {
    code: '821.99.01',
    name: 'Öğretmenler Kurulu Toplantı Kararları ve Tutanağı',
    category: 'Kurullar & Komisyonlar',
    isPopular: true,
    description: 'Sene başı, 2. dönem başı ve sene sonu Öğretmenler Kurulu gündem, tebliğ ve karar defteri.'
  },
  {
    code: '821.99.02',
    name: 'Zümre Öğretmenler Kurulu Tutanakları',
    category: 'Kurullar & Komisyonlar',
    isPopular: true,
    description: 'Alan ve branş zümre kararları, zümre başkanları kurulu toplantı tutanakları.'
  },
  {
    code: '821.99.03',
    name: 'Şube Öğretmenler Kurulu (ŞÖK) Tutanakları',
    category: 'Kurullar & Komisyonlar',
    isPopular: true,
    description: 'Her dönem yapılan ŞÖK toplantı tespitleri ve öğrenci takip kararları.'
  },
  {
    code: '841.03.01',
    name: 'Muayene ve Kabul Komisyonu Tutanağı',
    category: 'Kurullar & Komisyonlar',
    isPopular: true,
    description: 'Doğrudan temin veya malzeme alımlarında taşınırın şartnameye uygun teslim alındığına dair tutanak.'
  },
  {
    code: '841.02.01',
    name: 'Taşınır Sayım ve Düşüm Komisyonu Tutanağı',
    category: 'Mali & Taşınır İşleri',
    isPopular: true,
    description: 'Yıl sonu taşınır sayım cetvelleri, hurdaya ayırma ve kayıttan düşme tutanakları.'
  },
  {
    code: '841.04.01',
    name: 'Okul Aile Birliği Genel Kurul ve Harcama Tutanağı',
    category: 'Mali & Taşınır İşleri',
    isPopular: true,
    description: 'OAB genel kurul divan tutanağı, yönetim-denetim raporları ve TEFBİS harcama kararları.'
  },
  {
    code: '841.05.01',
    name: 'Ek Ders ve Puantaj Çizelgesi Üst Yazısı',
    category: 'Mali & Taşınır İşleri',
    isPopular: true,
    description: 'Her ay sonu KBS sistemine girilen ek ders icmal çizelgesinin İlçe MEM Muhasebe birimine intikali.'
  },

  // Projeler & Ar-Ge (300 ve 400 Grubu)
  {
    code: '302.01.01',
    name: 'TÜBİTAK Projeleri Başvuru ve Kabul İşlemleri (4006 / 2204)',
    category: 'Projeler & Ar-Ge',
    isPopular: true,
    description: 'TÜBİTAK 4006 Bilim Fuarları ve 2204 Araştırma Projeleri okul onayı ve sözleşmeleri.'
  },
  {
    code: '302.01.02',
    name: 'TEKNOFEST Yarışmaları Takım Kurulum ve İzin Onayları',
    category: 'Projeler & Ar-Ge',
    isPopular: true,
    description: 'TEKNOFEST takımları veli izinleri, danışman öğretmen görevlendirmesi ve atölye kullanım izinleri.'
  },
  {
    code: '410.01.01',
    name: 'Erasmus+ / eTwinning ve Uluslararası Projeler',
    category: 'Projeler & Ar-Ge',
    isPopular: true,
    description: 'Avrupa Birliği hibe projeleri, yurt dışı çıkış onayları ve ortaklık protokolleri.'
  },
  {
    code: '302.02.01',
    name: 'Fikri ve Sınai Mülkiyet Hakları (Patent / Faydalı Model / Tasarım)',
    category: 'Projeler & Ar-Ge',
    isPopular: true,
    description: 'MEB ve TÜRKPATENT iş birliği kapsamında yapılan patent, faydalı model ve marka başvuruları.'
  },
  {
    code: '302.03.01',
    name: 'Kalkınma Ajansı ve Yerel Kurum Protokolleri',
    category: 'Projeler & Ar-Ge',
    isPopular: false,
    description: 'İSTKA, belediyeler ve üniversiteler ile yapılan eğitim iş birliği protokolleri.'
  },

  // Sivil Savunma & İSG (880 ve 903.07)
  {
    code: '880.01.01',
    name: 'Sivil Savunma Planı ve Tahliye Tatbikatları',
    category: 'İş Sağlığı ve Güvenliği',
    isPopular: true,
    description: 'Deprem, yangın ve KBRN tatbikat senaryoları, tahliye süresi tespit tutanakları.'
  },
  {
    code: '880.02.01',
    name: 'Acil Durum ve Yangın Söndürme Ekipleri Görev Dağılımı',
    category: 'İş Sağlığı ve Güvenliği',
    isPopular: true,
    description: 'Söndürme, Kurtarma, Koruma ve İlk Yardım ekipleri listesi ve görev tebliğleri.'
  },
  {
    code: '903.07.03',
    name: 'Kazan Dairesi, Elektrik ve Yangın Tüpleri Periyodik Kontrolleri',
    category: 'İş Sağlığı ve Güvenliği',
    isPopular: true,
    description: 'Akredite kuruluşlarca yapılan periyodik muayene raporlarının takibi ve kaymakamlık bildirimi.'
  }
];
