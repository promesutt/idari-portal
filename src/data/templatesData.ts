import { DocumentTemplate } from '../types';

export const TEMPLATES_DATA: DocumentTemplate[] = [
  // ==========================================
  // 1. ÖZLÜK & PERSONEL İŞLERİ
  // ==========================================
  {
    id: 'pers-mazeret-izni',
    title: 'Öğretmen / Personel Mazeret İzni Talep Dilekçesi',
    category: 'personel',
    decimalCode: '903.02.01',
    legalBasis: '657 Sayılı Devlet Memurları Kanunu Madde 104',
    summary: 'Doğum, ölüm, evlilik veya idari mazeret izin taleplerinde kullanılan standart dilekçe.',
    tags: ['İzin', 'Mazeret', '657', 'Dilekçe'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Mazeret İzni Talebi',
    defaultBody: `Kurumunuzda {BRANS_UNVAN} olarak görev yapmaktayım. 657 Sayılı Devlet Memurları Kanunu'nun 104. maddesi gereğince, {MAZERET_SEBEBI} nedeniyle {BASLANGIC_TARIHI} tarihinden itibaren {GUN_SAYISI} gün süreyle mazeret izni kullanmak istiyorum.

İznimi geçireceğim adres ve iletişim bilgilerim aşağıda belirtilmiştir.

Gereğini bilgilerinize arz ederim.`,
    customFields: [
      { id: 'BRANS_UNVAN', label: 'Branş / Unvan', type: 'text', defaultValue: 'Öğretmen' },
      { id: 'MAZERET_SEBEBI', label: 'Mazeret Nedeni', type: 'text', defaultValue: 'ailevi mazeretim' },
      { id: 'BASLANGIC_TARIHI', label: 'İzin Başlangıç Tarihi', type: 'date', defaultValue: '2026-10-15' },
      { id: 'GUN_SAYISI', label: 'İzin Gün Sayısı', type: 'number', defaultValue: '3' }
    ],
    tips: ['Mazeret izni amirin uygun bulmasına bağlıdır.', 'Ölüm, evlilik ve doğumda kanunen zorunlu süreler geçerlidir.']
  },
  {
    id: 'pers-rapor-intikali',
    title: 'Hastalık Raporu Bildirim ve İntikal Üst Yazısı',
    category: 'personel',
    decimalCode: '903.03.01',
    legalBasis: 'Devlet Memurlarına Verilecek Hastalık Raporları Hakkında Yönetmelik',
    summary: 'Personelin aldığı hekim veya heyet raporunun İlçe MEM ve SGK sistemine bildirimi.',
    tags: ['Rapor', 'Hastalık', 'SGK', 'Üst Yazı', 'DYS'],
    suggestedAddressee: '{ILCE_MEM} MÜDÜRLÜĞÜNE\n({ILCE_ADI})',
    defaultSubject: 'Hastalık Raporu İntikali ({PERSONEL_ADI})',
    defaultBody: `Kurumumuz personeli {PERSONEL_ADI} ({TC_NO}), {SAGLIK_KURUMU} tarafından düzenlenen {RAPOR_TARIHI} tarihli ve {RAPOR_NO} sayılı {GUN_SAYISI} günlük hastalık raporunu kurumumuza ibraz etmiştir.

Söz konusu raporun incelenerek hastalık iznine çevrilmesi ve MEBBİS / SGK kayıtlarına işlenmesi hususunda;

Gereğini arz ederim.`,
    customFields: [
      { id: 'PERSONEL_ADI', label: 'Personel Adı Soyadı', type: 'text', defaultValue: 'Ahmet YILMAZ' },
      { id: 'TC_NO', label: 'T.C. Kimlik No', type: 'text', defaultValue: '12345678901' },
      { id: 'SAGLIK_KURUMU', label: 'Raporu Düzenleyen Kurum', type: 'text', defaultValue: 'Güngören İlçe Devlet Hastanesi' },
      { id: 'RAPOR_TARIHI', label: 'Rapor Tarihi', type: 'date', defaultValue: '2026-10-14' },
      { id: 'RAPOR_NO', label: 'Rapor Numarası', type: 'text', defaultValue: '2026/1458' },
      { id: 'GUN_SAYISI', label: 'Rapor Gün Sayısı', type: 'number', defaultValue: '5' }
    ],
    attachments: ['1 Adet Onaylı Sağlık Raporu']
  },
  {
    id: 'pers-goreve-baslama',
    title: 'Göreve Başlama Üst Yazısı (Doğum, Askerlik, Nakil)',
    category: 'personel',
    decimalCode: '903.01.01',
    legalBasis: '657 Sayılı Kanun ve MEB Atama Yönetmeliği',
    summary: 'Aylıksız izin, askerlik, doğum izni sonrası veya naklen atanan personelin göreve başlama bildirimi.',
    tags: ['Göreve Başlama', 'Özlük', 'Üst Yazı'],
    suggestedAddressee: '{ILCE_MEM} MÜDÜRLÜĞÜNE\n({ILCE_ADI})',
    defaultSubject: 'Göreve Başlama ({PERSONEL_ADI})',
    defaultBody: `Kurumumuz {BRANS_UNVAN} kadrosunda görevli iken {IZIN_TURU} nedeniyle ayrılan {PERSONEL_ADI} ({TC_NO}), {BASLAMA_TARIHI} tarihi itibarıyla kurumumuzdaki fiili görevine başlamıştır.

Maaş ve özlük işlemlerinin başlatılması hususunda;

Gereğini arz ederim.`,
    customFields: [
      { id: 'PERSONEL_ADI', label: 'Personel Adı Soyadı', type: 'text', defaultValue: 'Ayşe KAYA' },
      { id: 'TC_NO', label: 'T.C. No', type: 'text', defaultValue: '23456789012' },
      { id: 'BRANS_UNVAN', label: 'Branş / Unvan', type: 'text', defaultValue: 'Fen Bilimleri Öğretmeni' },
      { id: 'IZIN_TURU', label: 'Ayrılma Sebebi', type: 'text', defaultValue: 'doğum sonrası aylıksız izin' },
      { id: 'BASLAMA_TARIHI', label: 'Başlama Tarihi', type: 'date', defaultValue: '2026-10-14' }
    ],
    attachments: ['1 Adet Göreve Başlama Dilekçesi']
  },
  {
    id: 'pers-egzersiz-onay',
    title: 'Ders Dışı Eğitim Çalışmaları (Egzersiz) Onay Yazısı',
    category: 'personel',
    decimalCode: '903.04.01',
    legalBasis: 'MEB Ders ve Ek Ders Saatlerine İlişkin Karar Madde 17',
    summary: 'Müzik, robotik, satranç, tiyatro, izcilik vb. ders dışı çalışma onay yazısı ve programı.',
    tags: ['Egzersiz', 'Ek Ders', 'Kaymakamlık Onayı'],
    suggestedAddressee: 'KAYMAKAMLIK MAKAMINA\n({ILCE_ADI})',
    defaultSubject: 'Ders Dışı Eğitim Çalışması Onayı ({ETKINLIK_ADI})',
    defaultBody: `Kurumumuz {BRANS_UNVAN} kadrosunda görev yapan {OGRETMEN_ADI} tarafından ekte sunulan çalışma programı doğrultusunda {ETKINLIK_ADI} alanında haftada {HAFTALIK_SAAT} saat ders dışı eğitim çalışması yapılması müdürlüğümüzce uygun görülmektedir.

Makamlarınızca da uygun görülmesi halinde söz konusu çalışmanın {BASLANGIC_TARIHI} - {BITIS_TARIHI} tarihleri arasında yürütülmesi hususunu olurlarınıza arz ederim.`,
    customFields: [
      { id: 'OGRETMEN_ADI', label: 'Öğretmen Adı Soyadı', type: 'text', defaultValue: 'Mehmet DEMİR' },
      { id: 'BRANS_UNVAN', label: 'Branş / Unvan', type: 'text', defaultValue: 'Bilişim Teknolojileri Öğretmeni' },
      { id: 'ETKINLIK_ADI', label: 'Etkinlik / Egzersiz Alanı', type: 'text', defaultValue: 'Robotik ve Kodlama' },
      { id: 'HAFTALIK_SAAT', label: 'Haftalık Saat (Maks 6)', type: 'number', defaultValue: '6' },
      { id: 'BASLANGIC_TARIHI', label: 'Başlangıç Tarihi', type: 'date', defaultValue: '2026-10-20' },
      { id: 'BITIS_TARIHI', label: 'Bitiş Tarihi', type: 'date', defaultValue: '2027-06-11' }
    ],
    attachments: ['1. Yıllık Çalışma Planı (1 Adet)', '2. Öğrenci İsim Listesi ve Veli İzinleri (1 Adet)', '3. Antrenörlük/Eğitici Sertifikası']
  },
  {
    id: 'pers-teblig-tebellug',
    title: 'Personel Tebliğ - Tebellüğ Belgesi',
    category: 'personel',
    decimalCode: '903.01.01',
    legalBasis: 'Tebligat Kanunu ve 657 Sayılı Kanun',
    summary: 'Resmi yazı, görevlendirme, nöbet veya disiplin yazılarının personele imzayla tebliğ edilmesi tutanağı.',
    tags: ['Tebliğ', 'Tebellüğ', 'Tutanak', 'İmza'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Tebliğ ve Tebellüğ Tutanağı',
    defaultBody: `Müdürlüğümüz tarafından düzenlenen {TEBLIG_EDILEN_YAZI_KONUSU} konulu, {YAZI_TARIHI} tarihli ve {YAZI_SAYISI} sayılı resmi yazı / görev emri tarafıma elden teslim edilmiş ve içeriği tebliğ edilmiştir.

TEBLİĞ EDEN: {MUDUR_ADI} - {MUDUR_UNVANI} (İmza)
TEBELLÜĞ EDEN: {PERSONEL_ADI} - {PERSONEL_UNVANI} (İmza)

Tarih: {TARIH}`,
    customFields: [
      { id: 'TEBLIG_EDILEN_YAZI_KONUSU', label: 'Tebliğ Edilen Konu', type: 'text', defaultValue: 'Haftalık Ders ve Nöbet Programı' },
      { id: 'YAZI_TARIHI', label: 'Yazı Tarihi', type: 'date', defaultValue: '2026-10-14' },
      { id: 'YAZI_SAYISI', label: 'Yazı Sayısı / DYS No', type: 'text', defaultValue: 'E-62846872-903-14562' },
      { id: 'PERSONEL_ADI', label: 'Tebellüğ Eden Personel', type: 'text', defaultValue: 'Mustafa ÇELİK' },
      { id: 'PERSONEL_UNVANI', label: 'Personel Unvanı', type: 'text', defaultValue: 'Matematik Öğretmeni' }
    ]
  },
  {
    id: 'pers-nobet-tutanağı',
    title: 'Nöbet Görevini Yerine Getirmeme Tespit Tutanağı',
    category: 'personel',
    decimalCode: '903.04.03',
    legalBasis: 'MEB Kurumları Yönetmelikleri Madde 44 ve 657 Sayılı Kanun Madde 125',
    summary: 'Nöbet yerine gelmeyen veya görevini aksatan personelin tespiti amacıyla tutulan resmi tutanak.',
    tags: ['Nöbet', 'Tutanak', 'İdari İşlem'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Nöbet Görevi İhlal Tutanağı',
    defaultBody: `.../.../2026 günü yapılan rutin idari denetim ve nöbetçi müdür yardımcısı kontrollerinde; kurumumuz {BRANS_UNVAN} {OGRETMEN_ADI}'nin {NOBET_YERI} nöbet yerinde {SAAT_ARALIGI} saatleri arasında fiilen bulunmadığı ve geçerli bir mazeret beyan etmeksizin nöbet mahallini terk ettiği tespit edilmiştir.

İşbu tespit tutanağı tarafımızca mahallinde tanzim edilerek müştereken imza altına alınmıştır.

Nöbetçi Müdür Yardımcısı: {MUDUR_YRD} (İmza)
Nöbetçi Öğretmen (Şahit): {SAHIT_OGRETMEN} (İmza)`,
    customFields: [
      { id: 'OGRETMEN_ADI', label: 'İhlal Eden Öğretmen', type: 'text', defaultValue: 'Ad Soyad' },
      { id: 'BRANS_UNVAN', label: 'Branş', type: 'text', defaultValue: 'Fizik Öğretmeni' },
      { id: 'NOBET_YERI', label: 'Nöbet Yeri / Kat', type: 'text', defaultValue: '2. Kat Koridor ve Laboratuvarlar' },
      { id: 'SAAT_ARALIGI', label: 'Tespit Edilen Saat', type: 'text', defaultValue: '10:45 - 11:30' },
      { id: 'SAHIT_OGRETMEN', label: 'Şahit Nöbetçi Öğretmen', type: 'text', defaultValue: 'Diğer Nöbetçi Öğretmen' }
    ]
  },

  // ==========================================
  // 2. ÖĞRENCİ İŞLERİ
  // ==========================================
  {
    id: 'ogr-veli-kvkk-izin',
    title: 'Veli Muvafakatnamesi (KVKK, Sosyal Medya, Fotoğraf & Video)',
    category: 'ogrenci',
    decimalCode: '821.01.01',
    legalBasis: '6698 Sayılı Kişisel Verilerin Korunması Kanunu ve MEB Sosyal Medya Genelgesi',
    summary: 'Okul etkinliklerinde öğrencinin fotoğraf, video ve ses kayıtlarının MEB ve okul web sitesinde yayınlanması izni.',
    tags: ['Veli İzni', 'KVKK', 'Sosyal Medya', 'Muvafakatname'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Kişisel Veri ve Sosyal Medya Veli İzin Muvafakatnamesi',
    defaultBody: `Velisi bulunduğum kurumunuz {SINIF_PROGRAM} öğrencisi {OGRENCI_ADI} ({TC_NO})'nin eğitim-öğretim süresi boyunca okulda, BİLSEM atölyelerinde, yarışmalarda, sergilerde ve bilim şenliklerinde çekilen fotoğraf, video ve ses kayıtlarının; ticari amaç taşımaksızın, yalnızca okulu ve eğitimi tanıtıcı mahiyette Bakanlık, İlçe MEM ve kurumun resmi web sitesi ile sosyal medya hesaplarında paylaşılmasına:

[ ] Açık Rıza Veriyorum / Kabul Ediyorum
[ ] Kabul Etmiyorum

Bilgilerini ve gereğini arz ederim.

Veli Adı Soyadı: {VELI_ADI}
İmza:
Tarih: {TARIH}`,
    customFields: [
      { id: 'OGRENCI_ADI', label: 'Öğrenci Adı Soyadı', type: 'text', defaultValue: 'Kerem YILDIRIM' },
      { id: 'TC_NO', label: 'Öğrenci T.C. No', type: 'text', defaultValue: '34567890123' },
      { id: 'SINIF_PROGRAM', label: 'Sınıf / BİLSEM Programı', type: 'text', defaultValue: 'BYF-1 Programı / 6. Sınıf' },
      { id: 'VELI_ADI', label: 'Veli Adı Soyadı', type: 'text', defaultValue: 'Selim YILDIRIM' }
    ]
  },
  {
    id: 'ogr-devamsizlik-mektubu',
    title: 'Öğrenci Devamsızlık Uyarı Mektubu (Taahhütlü Tebligat)',
    category: 'ogrenci',
    decimalCode: '821.02.01',
    legalBasis: 'MEB Yönetmelikleri Devam-Devamsızlık Maddeleri',
    summary: 'Özürsüz veya toplam devamsızlık sınırını aşan öğrencilerin velilerine gönderilen resmi uyarı yazısı.',
    tags: ['Devamsızlık', 'Veli Tebligatı', 'e-Okul'],
    suggestedAddressee: 'Sayın {VELI_ADI}\n({OGRENCI_ADI} Velisi)',
    defaultSubject: 'Öğrenci Devamsızlık Bildirimi',
    defaultBody: `Velisi bulunduğunuz kurumumuz {SINIF_SUBE} şubesi {OKUL_NO} nolu öğrencisi {OGRENCI_ADI}'nin {TARIH} tarihi itibarıyla;

- Özürsüz Devamsızlığı: {OZURSUZ_GUN} gün,
- Özürlü Devamsızlığı: {OZURLU_GUN} gün,
- Toplam Devamsızlığı: {TOPLAM_GUN} gün olmuştur.

İlgili yönetmelik gereğince devamsızlık sınırının aşılması durumunda öğrencinin sınıf tekrarı yapacağı veya BİLSEM ile ilişiğinin kesileceği hususunu önemle hatırlatır, öğrencinin devamsızlık durumunu takip etmenizi rica ederim.`,
    customFields: [
      { id: 'VELI_ADI', label: 'Veli Adı Soyadı', type: 'text', defaultValue: 'Mehmet KÖSE' },
      { id: 'OGRENCI_ADI', label: 'Öğrenci Adı Soyadı', type: 'text', defaultValue: 'Zeynep KÖSE' },
      { id: 'SINIF_SUBE', label: 'Sınıf / Program', type: 'text', defaultValue: 'Destek-2 / 5. Sınıf' },
      { id: 'OKUL_NO', label: 'Öğrenci No', type: 'text', defaultValue: '412' },
      { id: 'OZURSUZ_GUN', label: 'Özürsüz Gün Sayısı', type: 'number', defaultValue: '6.5' },
      { id: 'OZURLU_GUN', label: 'Özürlü Gün Sayısı', type: 'number', defaultValue: '12' },
      { id: 'TOPLAM_GUN', label: 'Toplam Devamsızlık', type: 'number', defaultValue: '18.5' }
    ]
  },
  {
    id: 'ogr-veli-izin-dilekcesi',
    title: 'Veli İzinli Sayılma Talebi Dilekçesi (Mazeret İzni)',
    category: 'ogrenci',
    decimalCode: '821.02.02',
    legalBasis: 'MEB Okul Öncesi ve İlköğretim / Ortaöğretim Kurumları Yönetmeliği',
    summary: 'Velinin yazılı beyanına istinaden öğrencinin izinli sayılması talebi.',
    tags: ['İzin', 'Veli Dilekçesi', 'Mazeret'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Öğrenci İzinli Sayılma Talebi',
    defaultBody: `Velisi bulunduğum kurumunuz {SINIF_SUBE} şubesi {OKUL_NO} nolu öğrencisi {OGRENCI_ADI}'nin {MAZERET_NEDENI} sebebiyle {BASLANGIC_TARIHI} ile {BITIS_TARIHI} tarihleri arasında izinli sayılmasını arz ederim.

Öğrenci Velisi: {VELI_ADI}
İmza:
İletişim Tel: {VELI_TEL}`,
    customFields: [
      { id: 'SINIF_SUBE', label: 'Sınıf / Şube', type: 'text', defaultValue: '7/B' },
      { id: 'OKUL_NO', label: 'Öğrenci No', type: 'text', defaultValue: '835' },
      { id: 'OGRENCI_ADI', label: 'Öğrenci Adı Soyadı', type: 'text', defaultValue: 'Canan AY' },
      { id: 'MAZERET_NEDENI', label: 'Mazeret Gerekçesi', type: 'text', defaultValue: 'ailevi seyahat ve sağlık kontrolü' },
      { id: 'BASLANGIC_TARIHI', label: 'Başlangıç Tarihi', type: 'date', defaultValue: '2026-10-20' },
      { id: 'BITIS_TARIHI', label: 'Bitiş Tarihi', type: 'date', defaultValue: '2026-10-23' },
      { id: 'VELI_ADI', label: 'Veli Adı Soyadı', type: 'text', defaultValue: 'Kemal AY' },
      { id: 'VELI_TEL', label: 'Veli Telefon', type: 'text', defaultValue: '0532 000 00 00' }
    ]
  },
  {
    id: 'ogr-olay-tespit-tutanagi',
    title: 'Öğrenci Olay Tespit Tutanağı (Disiplin / ÖDDK Süreci)',
    category: 'ogrenci',
    decimalCode: '821.04.01',
    legalBasis: 'MEB Ödül ve Disiplin / Davranış Değerlendirme Hükümleri',
    summary: 'Okulda veya atölyede gerçekleşen istenmeyen bir davranış veya olayın resmi tespiti.',
    tags: ['Disiplin', 'Olay Tespit', 'Tutanak'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Olay Tespit Tutanağı',
    defaultBody: `.../.../2026 tarihinde saat yaklaşık {OLAY_SAATI} sularında kurumumuz {OLAY_YERI} mahallinde meydana gelen olayda; {OGRENCI_ADI_NO} isimli öğrencinin {OLAY_OZETI} şeklinde davrandığı nöbetçi ve görevli öğretmenlerce bizzat görülmüş / tespit edilmiştir.

Olay esnasında çevreye verilen zarar / durum: {ZARAR_DURUMU}.

İşbu tutanak gerekli idari ve disipliner işlemlerin (ÖDDK / Disiplin Kurulu) başlatılması maksadıyla tarafımızca imza altına alınmıştır.

Nöbetçi / Görevli Öğretmen: {OGRETMEN_1} (İmza)
Nöbetçi / Görevli Öğretmen: {OGRETMEN_2} (İmza)`,
    customFields: [
      { id: 'OLAY_SAATI', label: 'Olay Saati', type: 'text', defaultValue: '14:20' },
      { id: 'OLAY_YERI', label: 'Olay Yeri', type: 'text', defaultValue: '3. Kat Robotik Atölyesi önü' },
      { id: 'OGRENCI_ADI_NO', label: 'İlgili Öğrenci(ler)', type: 'text', defaultValue: 'Ali ŞEN (No: 512, 8/A)' },
      { id: 'OLAY_OZETI', label: 'Olayın Kısa Özeti', type: 'textarea', defaultValue: 'Arkadaşının kişisel eşyalarına izinsiz el koyarak zarar verdiği ve uyaran nöbetçi öğretmene saygısız ifadeler kullandığı' },
      { id: 'ZARAR_DURUMU', label: 'Zarar Durumu', type: 'text', defaultValue: 'Maddi hasar tespit edilmemiştir' },
      { id: 'OGRETMEN_1', label: '1. Öğretmen Ad Soyad', type: 'text', defaultValue: 'Öğretmen 1' },
      { id: 'OGRETMEN_2', label: '2. Öğretmen Ad Soyad', type: 'text', defaultValue: 'Öğretmen 2' }
    ]
  },

  // ==========================================
  // 3. İŞ SAĞLIĞI VE GÜVENLİĞİ (İSG)
  // ==========================================
  {
    id: 'isg-is-kazasi-bildirimi',
    title: 'İş Kazası Bildirim Formu ve Tutanağı (SGK Bildirimi)',
    category: 'isg',
    decimalCode: '903.07.02',
    legalBasis: '6331 Sayılı İSG Kanunu Madde 14 ve 5510 Sayılı Kanun Madde 13',
    summary: 'Okulda meydana gelen iş kazalarının 3 İŞ GÜNÜ içinde SGK ve MEBBİS İSG modülüne bildirilmesi için tutulan zorunlu tutanak.',
    tags: ['İş Kazası', 'SGK', '3 İş Günü', 'İSG', 'Tutanak'],
    suggestedAddressee: '{OKUL_ADI} İSG KURUL BAŞKANLIĞINA',
    defaultSubject: 'İş Kazası Tespit Tutanağı',
    defaultBody: `Kurumumuz bünyesinde {KAZAZEDE_UNVAN} olarak görev yapan {KAZAZEDE_ADI} ({TC_NO}), {KAZA_TARIHI} tarihinde saat {KAZA_SAATI} sularında {KAZA_YERI} mevkiinde {KAZA_SEKLI} neticesinde yaralanmış ve iş kazası geçirmiştir.

Kazazedeye ilk müdahale {ILK_MUDAHALE} tarafından yapılmış, akabinde {HASTANE_DURUMU}.

6331 sayılı Kanun uyarınca kazanın en geç 3 İŞ GÜNÜ içinde SGK sistemine girişinin yapılması ve MEBBİS İSG modülüne intikali gerekmektedir.

Kazazede Personel: {KAZAZEDE_ADI} (İmza)
Görgü Tanığı: {SAHIT_ADI} (İmza)
İSG Temsilcisi / Nöbetçi İdareci: {IDARECI_ADI} (İmza)`,
    customFields: [
      { id: 'KAZAZEDE_ADI', label: 'Kazazede Adı Soyadı', type: 'text', defaultValue: 'Hasan YURT' },
      { id: 'TC_NO', label: 'T.C. Kimlik No', type: 'text', defaultValue: '45678901234' },
      { id: 'KAZAZEDE_UNVAN', label: 'Görevi / Statüsü', type: 'text', defaultValue: 'Sürekli İşçi / Hizmetli' },
      { id: 'KAZA_TARIHI', label: 'Kaza Tarihi', type: 'date', defaultValue: '2026-10-14' },
      { id: 'KAZA_SAATI', label: 'Kaza Saati', type: 'text', defaultValue: '09:15' },
      { id: 'KAZA_YERI', label: 'Kazanın Olduğu Yer', type: 'text', defaultValue: 'Zemin kat merdivenleri' },
      { id: 'KAZA_SEKLI', label: 'Kazanın Oluş Şekli', type: 'textarea', defaultValue: 'Zemin temizliği esnasında kayarak sol ayak bileğini burkması ve düşmesi' },
      { id: 'ILK_MUDAHALE', label: 'İlk Müdahale', type: 'text', defaultValue: 'Okul İlk Yardım Ekip Lideri' },
      { id: 'HASTANE_DURUMU', label: 'Sağlık Sevk Durumu', type: 'text', defaultValue: '112 marifetiyle İlçe Devlet Hastanesine sevk edilmiştir' },
      { id: 'SAHIT_ADI', label: 'Görgü Tanığı', type: 'text', defaultValue: 'Görgü Tanığı Adı' },
      { id: 'IDARECI_ADI', label: 'Nöbetçi İdareci', type: 'text', defaultValue: 'Müdür Yardımcısı' }
    ],
    tips: ['ÖNEMLİ: Kaza tarihinden itibaren 3 iş günü içinde SGK iş kazası e-bildirimi yapılmazsa yüksek idari para cezası kesilir!']
  },
  {
    id: 'isg-tahliye-tatbikati',
    title: 'Yangın ve Deprem Tahliye Tatbikatı Senaryo ve Tutanağı',
    category: 'isg',
    decimalCode: '880.01.01',
    legalBasis: 'MEB Yangın Önleme ve Söndürme Yönergesi & MEBBİS İSG',
    summary: 'Yılda en az 1 kez yapılması zorunlu olan okul tahliye tatbikatının süre ve sonuç tutanağı.',
    tags: ['Deprem', 'Yangın', 'Tahliye', 'Tatbikat', 'İSG'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Okul Acil Durum Tahliye Tatbikatı Sonuç Tutanağı',
    defaultBody: `Kurumumuzda {TATBIKAT_TARIHI} tarihinde saat {TATBIKAT_SAATI}'de Sivil Savunma ve İSG Yıllık Çalışma Planı doğrultusunda habersiz {TATBIKAT_TURU} tatbikatı gerçekleştirilmiştir.

1. İkaz sireni saat {TATBIKAT_SAATI}'de çalınmış, tahliye kapıları eş zamanlı açılmıştır.
2. Binadaki toplam {MEVCUT_KISI} personel ve öğrenci, izdihama mahal vermeden acil toplanma alanına tahliye edilmiştir.
3. Binanın tamamen boşaltılma süresi: {TAHLIYE_SURESI} dakika olarak kronometre ile tespit edilmiştir.
4. Acil durum ekipleri (Söndürme, Kurtarma, Koruma, İlk Yardım) toplanma alanında hazır bulunarak yoklama almıştır.

Tatbikat planlanan senaryoya uygun ve başarılı bir şekilde tamamlanmıştır.

Tatbikat Koordinatörü: {KOORDINATOR_ADI} (İmza)
İSG Temsilcisi: {ISG_TEMSILCISI} (İmza)
Okul Müdürü: {MUDUR_ADI} (İmza)`,
    customFields: [
      { id: 'TATBIKAT_TARIHI', label: 'Tatbikat Tarihi', type: 'date', defaultValue: '2026-10-14' },
      { id: 'TATBIKAT_SAATI', label: 'Başlama Saati', type: 'text', defaultValue: '11:00' },
      { id: 'TATBIKAT_TURU', label: 'Tatbikat Türü', type: 'text', defaultValue: 'Deprem Tahliye ve Yangın Söndürme' },
      { id: 'MEVCUT_KISI', label: 'Mevcut Kişi Sayısı', type: 'number', defaultValue: '350' },
      { id: 'TAHLIYE_SURESI', label: 'Tahliye Süresi (Dk/Sn)', type: 'text', defaultValue: '2 dakika 45 saniye' },
      { id: 'KOORDINATOR_ADI', label: 'Koordinatör Öğretmen', type: 'text', defaultValue: 'Sivil Savunma Kulüp Danışmanı' },
      { id: 'ISG_TEMSILCISI', label: 'İSG Kurul Temsilcisi', type: 'text', defaultValue: 'İSG Temsilcisi' }
    ]
  },
  {
    id: 'isg-acil-durum-ekipleri',
    title: 'Okul Acil Durum Ekipleri Görev Dağılım Çizelgesi',
    category: 'isg',
    decimalCode: '880.02.01',
    legalBasis: 'Binaların Yangından Korunması Hakkında Yönetmelik Madde 126',
    summary: 'Söndürme, Kurtarma, Koruma ve İlk Yardım ekipleri personel görevlendirme listesi.',
    tags: ['Acil Durum', 'Söndürme', 'İlk Yardım', 'İSG Ekipleri'],
    suggestedAddressee: '{OKUL_ADI} PERSONELİNE',
    defaultSubject: 'Okul Acil Durum Ekipleri Görevlendirmesi',
    defaultBody: `2026-2027 Eğitim Öğretim Yılında kurumumuz bünyesinde olası afet ve acil durumlara müdahale etmek üzere görevlendirilen ekipler aşağıda belirtilmiştir:

1. SÖNDÜRME EKİBİ (Ekip Lideri: {SONDURME_LIDER}):
Üyeler: {SONDURME_UYELER}

2. KURTARMA EKİBİ (Ekip Lideri: {KURTARMA_LIDER}):
Üyeler: {KURTARMA_UYELER}

3. İLK YARDIM EKİBİ (Ekip Lideri: {ILKYARDIM_LIDER}):
Üyeler: {ILKYARDIM_UYELER}

4. KORUMA VE EMNİYET EKİBİ (Ekip Lideri: {KORUMA_LIDER}):
Üyeler: {KORUMA_UYELER}

Tüm ekip üyelerinin görev tanımlarına uygun olarak tatbikat ve kriz durumlarında hazır bulunmaları hususunu tebliğ ederim.`,
    customFields: [
      { id: 'SONDURME_LIDER', label: 'Söndürme Ekip Lideri', type: 'text', defaultValue: 'Ali Veli (Müdür Yrd.)' },
      { id: 'SONDURME_UYELER', label: 'Söndürme Üyeleri', type: 'text', defaultValue: 'Ahmet T., Mehmet K., Hasan S.' },
      { id: 'KURTARMA_LIDER', label: 'Kurtarma Ekip Lideri', type: 'text', defaultValue: 'Beden Eğitimi Öğretmeni' },
      { id: 'KURTARMA_UYELER', label: 'Kurtarma Üyeleri', type: 'text', defaultValue: 'Fizik Öğretmeni, Bilişim Öğretmeni, Hizmetli' },
      { id: 'ILKYARDIM_LIDER', label: 'İlk Yardım Ekip Lideri (Sertifikalı)', type: 'text', defaultValue: 'Biyoloji Öğretmeni' },
      { id: 'ILKYARDIM_UYELER', label: 'İlk Yardım Üyeleri', type: 'text', defaultValue: 'Fen Bilgisi Öğretmeni, Okul Hemşiresi/Memur' },
      { id: 'KORUMA_LIDER', label: 'Koruma Ekip Lideri', type: 'text', defaultValue: 'Güvenlik Görevlisi / Nöbetçi Müdür Yrd.' },
      { id: 'KORUMA_UYELER', label: 'Koruma Üyeleri', type: 'text', defaultValue: 'Danışma Personeli, Nöbetçi Öğretmenler' }
    ]
  },

  // ==========================================
  // 4. KURUL, KOMİSYON VE TOPLANTILAR
  // ==========================================
  {
    id: 'kurul-sene-basi-ogretmenler',
    title: 'Sene Başı Öğretmenler Kurulu Gündem ve Karar Tutanağı',
    category: 'kurullar',
    decimalCode: '821.99.01',
    legalBasis: 'MEB Okul Öncesi ve İlköğretim / Ortaöğretim Yönetmelikleri',
    summary: 'Eylül ayında yapılan sene başı kurulunun MEB mevzuatına uygun tüm gündem maddeleri ve karar şablonu.',
    tags: ['Öğretmenler Kurulu', 'Sene Başı', 'Gündem', 'Tutanak'],
    suggestedAddressee: '{OKUL_ADI} ÖĞRETMENLER KURULUNA',
    defaultSubject: '2026-2027 Sene Başı Öğretmenler Kurulu Toplantı Tutanağı',
    defaultBody: `Toplantı Tarihi: {TOPLANTI_TARIHI}
Toplantı Saati: {TOPLANTI_SAATI}
Toplantı Yeri: {TOPLANTI_YERI}
Toplantı Başkanı: {MUDUR_ADI} (Okul Müdürü)
Yazmanlar: {YAZMAN_1}, {YAZMAN_2}

GÜNDEM MADDELERİ:
1. Açılış, yoklama ve saygı duruşu / İstiklal Marşı.
2. Bir önceki eğitim öğretim yılı kurul kararlarının ve akademik başarının değerlendirilmesi.
3. Yeni eğitim öğretim yılı çalışma takviminin ve hedeflerinin belirlenmesi.
4. Kurul ve komisyonlara gizli/açık oyla öğretmen ve yedek üye seçimi:
   - Muayene ve Kabul Komisyonu
   - Sosyal Etkinlikler Kurulu
   - Okul Servis Araçları Denetleme Komisyonu
   - Taşınır Sayım ve Değer Tespit Komisyonu
   - Rehberlik ve Psikolojik Danışma Hizmetleri Yürütme Komisyonu
   - Bireysel Gelişim ve Değerlendirme Kurulu (BİLSEM)
5. Nöbet esasları, ders dağılımları ve çalışma saatlerinin tebliği.
6. İş Sağlığı ve Güvenliği önlemleri ile risk alanlarının müzakeresi.
7. Zümre toplantı tarihleri ve yıllık planların teslim takvimi.
8. Dilek ve temenniler, kapanış.

ALINAN KARARLAR:
{ALINAN_KARARLAR_OZET}

Yukarıda kayıtlı gündem maddeleri tek tek görüşülerek oy birliği / oy çokluğu ile karara bağlanmış ve imza altına alınmıştır.`,
    customFields: [
      { id: 'TOPLANTI_TARIHI', label: 'Toplantı Tarihi', type: 'date', defaultValue: '2026-09-02' },
      { id: 'TOPLANTI_SAATI', label: 'Toplantı Saati', type: 'text', defaultValue: '09:30' },
      { id: 'TOPLANTI_YERI', label: 'Toplantı Yeri', type: 'text', defaultValue: 'Öğretmenler Odası / Konferans Salonu' },
      { id: 'YAZMAN_1', label: '1. Yazman Öğretmen', type: 'text', defaultValue: 'Türkçe / Edebiyat Öğretmeni' },
      { id: 'YAZMAN_2', label: '2. Yazman Öğretmen', type: 'text', defaultValue: 'Bilişim Teknolojileri Öğretmeni' },
      { id: 'ALINAN_KARARLAR_OZET', label: 'Öne Çıkan Kararlar', type: 'textarea', defaultValue: '1. Komisyon seçimleri eksiksiz tamamlanmıştır.\n2. Yıllık planların en geç Eylül ayının 3. haftası idareye teslim edilmesine karar verilmiştir.\n3. Nöbet görevlerinin 15 dakika önce başlayıp 15 dakika sonra bitirilmesi kararlaştırılmıştır.' }
    ]
  },
  {
    id: 'kurul-muayene-kabul',
    title: 'Muayene ve Kabul Komisyonu Tutanağı (Mal / Hizmet Alımı)',
    category: 'kurullar',
    decimalCode: '841.03.01',
    legalBasis: '4734 Sayılı Kamu İhale Kanunu ve Taşınır Mal Yönetmeliği',
    summary: 'Okula alınan donatım, kırtasiye, bilişim ve atölye malzemelerinin teknik şartnameye uygun teslim alındığına dair yasal tutanak.',
    tags: ['Muayene Kabul', 'Doğrudan Temin', 'Taşınır', 'Tutanak'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Mal / Malzeme Muayene ve Kabul Tutanağı',
    defaultBody: `Müdürlüğümüzün ihtiyacı doğrultusunda {YUKLENICI_FIRMA} firmasından temin edilen aşağıda dökümü yazılı malzemeler {TESLIM_TARIHI} tarihinde kurumumuza intikal etmiştir.

Komisyonumuzca yapılan fiziki muayene, miktar kontrolü ve teknik inceleme neticesinde; malzemelerin sipariş şartnamesine, teklif mektubuna ve faturaya tam olarak uygun olduğu, kırık/hasarlı parça bulunmadığı ve çalışır durumda olduğu tespit edilerek KABULÜNE karar verilmiştir.

Teslim Alınan Malzemeler:
{MALZEME_LISTESI}

Fatura Tarih ve No: {FATURA_BILGISI}

Başkan (Müdür Yrd.): {KOMISYON_BASKANI} (İmza)
Üye (Öğretmen): {KOMISYON_UYE_1} (İmza)
Üye (Taşınır Kayıt Yetkilisi): {KOMISYON_UYE_2} (İmza)`,
    customFields: [
      { id: 'YUKLENICI_FIRMA', label: 'Yüklenici Firma Adı', type: 'text', defaultValue: 'ABC Eğitim Teknolojileri Ltd. Şti.' },
      { id: 'TESLIM_TARIHI', label: 'Teslim Tarihi', type: 'date', defaultValue: '2026-10-14' },
      { id: 'MALZEME_LISTESI', label: 'Malzeme ve Miktarlar', type: 'textarea', defaultValue: '1. 5 Adet 3D Yazıcı Filament Seti\n2. 10 Adet Arduino Başlangıç Kiti\n3. 20 Paket A4 Fotokopi Kâğıdı' },
      { id: 'FATURA_BILGISI', label: 'Fatura Bilgisi', type: 'text', defaultValue: '14.10.2026 Tarih, GIB202600000124 Sayılı E-Fatura' },
      { id: 'KOMISYON_BASKANI', label: 'Komisyon Başkanı', type: 'text', defaultValue: 'Müdür Yardımcısı' },
      { id: 'KOMISYON_UYE_1', label: 'Üye Öğretmen', type: 'text', defaultValue: 'Fen / Bilişim Öğretmeni' },
      { id: 'KOMISYON_UYE_2', label: 'Taşınır Yetkilisi', type: 'text', defaultValue: 'Memur / Yetkili' }
    ]
  },
  {
    id: 'kurul-oab-genel-kurul',
    title: 'Okul Aile Birliği Genel Kurul Divan Tutanağı',
    category: 'kurullar',
    decimalCode: '841.04.01',
    legalBasis: 'MEB Okul Aile Birliği Yönetmeliği',
    summary: 'Yıllık OAB genel kurulunda yönetim ve denetim kurullarının seçimi ve TEFBİS harcama yetkilerinin devri tutanağı.',
    tags: ['Okul Aile Birliği', 'Genel Kurul', 'TEFBİS', 'Divan Tutanağı'],
    suggestedAddressee: '{OKUL_ADI} OKUL AİLE BİRLİĞİ GENEL KURULUNA',
    defaultSubject: 'Okul Aile Birliği Yıllık Genel Kurul Tutanağı',
    defaultBody: `Toplantı Tarihi: {TOPLANTI_TARIHI}
Toplantı Yeri: {TOPLANTI_YERI}
Katılımcı Veli Sayısı: {KATILIMCI_SAYISI}

Gündem gereğince toplantı yeter sayısının bulunduğu tespit edilmiş, Divan Başkanlığına {DIVAN_BASKANI}, Kâtipliğe {DIVAN_KATIP} seçilmiştir.

1. Bir önceki döneme ait Yönetim Kurulu Faaliyet Raporu ve Denetleme Kurulu Raporu okunarak ibra edilmiştir.
2. Yeni dönem Tahmini Bütçesi {TAHMINI_BUTCE} TL olarak kabul edilmiştir.
3. Yapılan açık/kapalı oylama neticesinde;

YÖNETİM KURULU ASIL ÜYELERİ:
{YONETIM_ASIL}

DENETLEME KURULU ASIL ÜYELERİ (1 Veli, 2 Öğretmen):
{DENETIM_ASIL}

Yeni Yönetim Kuruluna okul ihtiyaçlarını karşılama ve TEFBİS sistemi üzerinden harcama yetkisi verilmiştir.

Divan Başkanı: {DIVAN_BASKANI} (İmza)
Kâtip Üye: {DIVAN_KATIP} (İmza)`,
    customFields: [
      { id: 'TOPLANTI_TARIHI', label: 'Toplantı Tarihi', type: 'date', defaultValue: '2026-10-18' },
      { id: 'TOPLANTI_YERI', label: 'Toplantı Yeri', type: 'text', defaultValue: 'Okul Konferans Salonu' },
      { id: 'KATILIMCI_SAYISI', label: 'Katılan Veli Sayısı', type: 'number', defaultValue: '74' },
      { id: 'DIVAN_BASKANI', label: 'Divan Başkanı (Veli)', type: 'text', defaultValue: 'Av. Serkan YILMAZ' },
      { id: 'DIVAN_KATIP', label: 'Kâtip Üye (Veli/Öğretmen)', type: 'text', defaultValue: 'Elif AKIN' },
      { id: 'TAHMINI_BUTCE', label: 'Tahmini Bütçe (TL)', type: 'text', defaultValue: '150.000' },
      { id: 'YONETIM_ASIL', label: 'Yönetim Kurulu Asıl (5 Kişi)', type: 'textarea', defaultValue: '1. Fatma ÖZTÜRK (Başkan)\n2. Murat ŞAHİN (Başkan Yrd.)\n3. Derya KOÇ (Muhasip)\n4. Hakan TEKİN (Sekreter)\n5. Sevim YILDIZ (Üye)' },
      { id: 'DENETIM_ASIL', label: 'Denetleme Kurulu Asıl', type: 'textarea', defaultValue: '1. Ali CAN (Veli Üye)\n2. Zeynep AY (Öğretmen Üye)\n3. Burak GÜN (Öğretmen Üye)' }
    ]
  },

  // ==========================================
  // 5. PROJELER & AR-GE
  // ==========================================
  {
    id: 'proj-tubitak-onay',
    title: 'TÜBİTAK 4006 / 2204 Proje Okul Başvuru ve Kabul Yazısı',
    category: 'projeler',
    decimalCode: '302.01.01',
    legalBasis: 'TÜBİTAK Bilim ve Toplum Programları Yönetmeliği',
    summary: 'TÜBİTAK araştırma ve fuar projelerinin okul müdürlüğü taahhütnamesi ve yürütücü görevlendirmesi.',
    tags: ['TÜBİTAK', '4006', '2204', 'Proje', 'Taahhütname'],
    suggestedAddressee: 'TÜBİTAK BİLİM VE TOPLUM BAŞKANLIĞINA',
    defaultSubject: '{PROJE_TURU} Proje Başvuru Onayı ({PROJE_BASLIGI})',
    defaultBody: `Müdürlüğümüz bünyesinde görev yapan {YURUTUCU_ADI} yürütücülüğünde hazırlanan ve ekte detayları sunulan "{PROJE_BASLIGI}" başlıklı {PROJE_TURU} proje başvurusu kurumumuzca incelenmiş ve uygun bulunmuştur.

Projenin kabul edilmesi halinde kurumumuz laboratuvar, atölye ve fiziki imkânlarının proje çalışmalarına tahsis edileceği taahhüt olunur.

Gereğini bilgilerinize arz ederim.`,
    customFields: [
      { id: 'PROJE_TURU', label: 'Proje Programı', type: 'select', defaultValue: 'TÜBİTAK 2204-B Ortaokul Öğrencileri Araştırma Projesi', options: ['TÜBİTAK 4006 Bilim Fuarı', 'TÜBİTAK 2204-A Lise Araştırma Projeleri', 'TÜBİTAK 2204-B Ortaokul Öğrencileri Araştırma Projesi', 'TÜBİTAK 4004 Doğa Eğitimi'] },
      { id: 'PROJE_BASLIGI', label: 'Proje Başlığı', type: 'text', defaultValue: 'Yapay Zekâ Destekli Akıllı Tarım ve Sulama Sistemi' },
      { id: 'YURUTUCU_ADI', label: 'Proje Danışmanı / Yürütücüsü', type: 'text', defaultValue: 'Bilişim Teknolojileri Öğretmeni' }
    ],
    attachments: ['1. Proje Özeti ve Başvuru Metni (1 Nüsha)', '2. Katılımcı Öğrenci Listesi']
  },
  {
    id: 'proj-teknofest-izin',
    title: 'TEKNOFEST Takım Kurulum ve Veli Muvafakat Belgesi',
    category: 'projeler',
    decimalCode: '302.01.02',
    legalBasis: 'T3 Vakfı Yarışma Şartnamesi ve MEB Sosyal Etkinlikler',
    summary: 'Öğrencilerin TEKNOFEST takımlarında yer alması, atölye çalışmaları ve seyahat izinleri için veli izin belgesi.',
    tags: ['TEKNOFEST', 'Takım', 'Muvafakat', 'Veli İzni'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'TEKNOFEST Takım Katılımı Veli Muvafakatnamesi',
    defaultBody: `Velisi bulunduğum kurumunuz öğrencisi {OGRENCI_ADI}'nin {TAKIM_ADI} bünyesinde "{KATEGORI_ADI}" yarışma kategorisinde görev almasına; okul saatleri dışında ve hafta sonlarında yapılacak atölye/laboratuvar çalışmalarına katılmasına, yarışma finallerine danışman öğretmen {DANIŞMAN_ADI} refakatinde seyahat etmesine muvafakat ediyorum.

Gereğini bilgilerinize arz ederim.

Veli Adı Soyadı: {VELI_ADI}
İmza:
Tarih: {TARIH}`,
    customFields: [
      { id: 'OGRENCI_ADI', label: 'Öğrenci Adı Soyadı', type: 'text', defaultValue: 'Emre KARTAL' },
      { id: 'TAKIM_ADI', label: 'Takım Adı', type: 'text', defaultValue: 'Güngören BİLSEM Roket Takımı' },
      { id: 'KATEGORI_ADI', label: 'Yarışma Kategorisi', type: 'text', defaultValue: 'İnsanlık Yararına Teknoloji / Sağlık' },
      { id: 'DANIŞMAN_ADI', label: 'Danışman Öğretmen', type: 'text', defaultValue: 'Fizik Öğretmeni' },
      { id: 'VELI_ADI', label: 'Veli Adı Soyadı', type: 'text', defaultValue: 'Ahmet KARTAL' }
    ]
  },
  {
    id: 'proj-patent-faydali-model',
    title: 'Patent / Faydalı Model Başvuru Takip Formu (TÜRKPATENT)',
    category: 'projeler',
    decimalCode: '302.02.01',
    legalBasis: 'MEB ve TÜRKPATENT Fikri Mülkiyet İş Birliği Protokolü',
    summary: 'BİLSEM ve okul öğrencileri/öğretmenleri tarafından geliştirilen buluşların tescil başvuru takip formu.',
    tags: ['Patent', 'Faydalı Model', 'TÜRKPATENT', 'Tescil'],
    suggestedAddressee: '{OKUL_ADI} AR-GE VE PATENT BİRİMİNE',
    defaultSubject: 'Fikri ve Sınai Mülkiyet Başvuru Bildirim Formu',
    defaultBody: `Kurumumuz bünyesinde yürütülen Ar-Ge ve atölye çalışmaları kapsamında ortaya çıkan buluşa dair bilgiler aşağıda yer almaktadır:

Buluş Başlığı: {BULUS_BASLIGI}
Başvuru Türü: {BASVURU_TURU}
Buluş Sahipleri (Öğretmen/Öğrenci): {BULUS_SAHIPLERI}
Buluşun Çözdüğü Teknik Problem ve Özeti: {BULUS_OZETI}

TÜRKPATENT başvuru süreçlerinin okul adına tescil edilmesi hususunda gereğini arz ederiz.`,
    customFields: [
      { id: 'BULUS_BASLIGI', label: 'Buluş / Tasarım Başlığı', type: 'text', defaultValue: 'Sensörlü Akıllı Görme Engelli Bastonu' },
      { id: 'BASVURU_TURU', label: 'Başvuru Türü', type: 'select', defaultValue: 'Faydalı Model', options: ['Patent', 'Faydalı Model', 'Tasarım Tescili', 'Marka Tescili'] },
      { id: 'BULUS_SAHIPLERI', label: 'Buluş Sahipleri', type: 'text', defaultValue: 'Öğretmen: Ad Soyad, Öğrenci: Ad Soyad' },
      { id: 'BULUS_OZETI', label: 'Buluş Özeti', type: 'textarea', defaultValue: 'Ultrasonik ve lidar sensörler yardımıyla çevredeki engelleri titreşim ve sesli uyarı ile kullanıcıya ileten taşınabilir baston mekanizması.' }
    ]
  },

  // ==========================================
  // 6. SOSYAL ETKİNLİK & GEZİ
  // ==========================================
  {
    id: 'gezi-onay-ust-yazisi',
    title: 'Okul Gezisi İzin Onay Üst Yazısı (İlçe MEM / Kaymakamlık)',
    category: 'sosyal_etkinlik',
    decimalCode: '821.05.01',
    legalBasis: 'MEB Sosyal Etkinlikler Yönetmeliği Madde 13',
    summary: 'Eğitim, bilim, kültür ve müze gezileri için İlçe MEM / Kaymakamlık Makamına yazılan 9 evraklı onay üst yazısı.',
    tags: ['Gezi', 'Sosyal Etkinlik', 'Kaymakamlık Onayı', 'DYS'],
    suggestedAddressee: 'KAYMAKAMLIK MAKAMINA\n({ILCE_ADI})',
    defaultSubject: 'Eğitim ve Kültür Gezisi Onayı ({GEZI_HEDEFI})',
    defaultBody: `Kurumumuz öğrencilerinin sosyal, kültürel ve bilimsel gelişimlerine katkı sağlamak amacıyla {GEZI_TARIHI} tarihinde {GEZI_HEDEFI} mevkiine günübirlik eğitim gezisi düzenlenmesi planlanmaktadır.

Geziye ait plan, veli muvafakatnameleri, sözleşme ve araç evrakları incelenmiş olup mevzuata uygun bulunmuştur.

Söz konusu gezinin {SORUMLU_OGRETMEN} sorumluluğunda ve ekli listede yer alan öğretmen ve öğrencilerin katılımıyla gerçekleştirilmesi hususunu;

Olurlarınıza arz ederim.`,
    customFields: [
      { id: 'GEZI_HEDEFI', label: 'Gezi Yapılacak Yer', type: 'text', defaultValue: 'Kocaeli Bilim Merkezi ve TÜBİTAK MAM' },
      { id: 'GEZI_TARIHI', label: 'Gezi Tarihi', type: 'date', defaultValue: '2026-10-25' },
      { id: 'SORUMLU_OGRETMEN', label: 'Gezi Sorumlusu Öğretmen', type: 'text', defaultValue: 'Sosyal Bilgiler Öğretmeni' }
    ],
    attachments: [
      '1. Gezi Planı (1 Adet)',
      '2. Öğrenci ve Öğretmen İsim Listesi (1 Adet)',
      '3. Veli İzin (Muvafakat) Belgeleri Dosyası',
      '4. TÜRSAB Seyahat Sözleşmesi ve Yetki Belgesi',
      '5. Araç Ruhsatı ve Periyodik Muayene Belgesi',
      '6. D-2 Yetki Belgesi',
      '7. Sürücü Ehliyeti ve SRC-2 / Psikoteknik Belgeleri',
      '8. Zorunlu Koltuk Ferdi Kaza Sigortası Poliçesi'
    ]
  },
  {
    id: 'gezi-veli-izin-belgesi',
    title: 'Gezi Veli İzin (Muvafakat) Belgesi Şablonu',
    category: 'sosyal_etkinlik',
    decimalCode: '821.05.01',
    legalBasis: 'MEB Sosyal Etkinlikler Yönetmeliği',
    summary: 'Her gezi öncesinde her öğrenci velisinden ıslak imzalı alınması zorunlu olan seyahat izin belgesi.',
    tags: ['Gezi İzni', 'Veli', 'Muvafakatname'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Gezi Veli İzin Belgesi',
    defaultBody: `Velisi bulunduğum kurumunuz {SINIF_SUBE} şubesi {OKUL_NO} nolu öğrencisi {OGRENCI_ADI}'nin kurumunuzca {GEZI_TARIHI} tarihinde düzenlenecek olan {GEZI_HEDEFI} gezisine katılmasına, gezi kurallarına riayet etmek şartıyla izin veriyorum.

Öğrencinin bilinen kronik bir rahatsızlığı / alerjisi: {KRONIK_DURUM}

Veli Adı Soyadı: {VELI_ADI}
İmza:
İletişim Telefonu: {VELI_TEL}
Tarih: {TARIH}`,
    customFields: [
      { id: 'OGRENCI_ADI', label: 'Öğrenci Adı Soyadı', type: 'text', defaultValue: 'Zeynep Su DURMAZ' },
      { id: 'SINIF_SUBE', label: 'Sınıf / Program', type: 'text', defaultValue: 'ÖYG-1 / 7. Sınıf' },
      { id: 'OKUL_NO', label: 'Öğrenci No', type: 'text', defaultValue: '198' },
      { id: 'GEZI_TARIHI', label: 'Gezi Tarihi', type: 'date', defaultValue: '2026-10-25' },
      { id: 'GEZI_HEDEFI', label: 'Gezi Yeri', type: 'text', defaultValue: 'İstanbul Arkeoloji Müzeleri' },
      { id: 'KRONIK_DURUM', label: 'Kronik Rahatsızlık / İlaç', type: 'text', defaultValue: 'Bulunmamaktadır' },
      { id: 'VELI_ADI', label: 'Veli Adı Soyadı', type: 'text', defaultValue: 'Ahmet DURMAZ' },
      { id: 'VELI_TEL', label: 'Veli Telefonu', type: 'text', defaultValue: '0533 111 22 33' }
    ]
  },
  {
    id: 'gezi-arac-sofor-kontrol',
    title: 'Gezi Araç ve Sürücü Evrakları Kontrol Tutanağı',
    category: 'sosyal_etkinlik',
    decimalCode: '821.05.01',
    legalBasis: 'Karayolları Taşıma Yönetmeliği ve MEB Gezi Yönergesi',
    summary: 'Gezi otobüsünün hareketinden önce nöbetçi idareci ve sorumlu öğretmen tarafından yapılan son kontrol tutanağı.',
    tags: ['Gezi Kontrol', 'Araç Evrakları', 'Şoför Kontrol', 'Tutanak'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Gezi Aracı Hareket Öncesi Kontrol Tutanağı',
    defaultBody: `{GEZI_TARIHI} tarihinde saat {HAREKET_SAATI}'de hareket edecek olan {PLAKA_NO} plakalı gezi aracı ve sürücüsü {SURUCU_ADI} üzerinde hareket öncesi fiziki ve evrak kontrolü yapılmıştır:

1. Araç tescil ve trafik belgesi (Ruhsat) geçerlidir.
2. D-2 Yetki Belgesi ve TÜRSAB levhası araçta mevcuttur.
3. Sürücünün SRC-2 ve Psikoteknik belgeleri ibraz edilmiştir.
4. Emniyet kemerleri faal ve araç lastik diş derinlikleri uygundur.
5. İlk yardım çantası ve yangın söndürme tüpleri yerindedir.

Aracın yola çıkmasında herhangi bir sakınca bulunmadığı tespit edilerek işbu tutanak tanzim edilmiştir.

Sorumlu Öğretmen: {OGRETMEN_ADI} (İmza)
Nöbetçi İdareci: {IDARECI_ADI} (İmza)
Araç Sürücüsü: {SURUCU_ADI} (İmza)`,
    customFields: [
      { id: 'GEZI_TARIHI', label: 'Gezi Tarihi', type: 'date', defaultValue: '2026-10-25' },
      { id: 'HAREKET_SAATI', label: 'Hareket Saati', type: 'text', defaultValue: '08:30' },
      { id: 'PLAKA_NO', label: 'Araç Plakası', type: 'text', defaultValue: '34 BLC 789' },
      { id: 'SURUCU_ADI', label: 'Sürücü Adı Soyadı', type: 'text', defaultValue: 'Ramazan K.' },
      { id: 'OGRETMEN_ADI', label: 'Gezi Sorumlusu Öğretmen', type: 'text', defaultValue: 'Öğretmen Adı' },
      { id: 'IDARECI_ADI', label: 'Nöbetçi İdareci', type: 'text', defaultValue: 'Müdür Yardımcısı' }
    ]
  },

  // ==========================================
  // 7. BİLSEM ÖZEL MODÜLÜ
  // ==========================================
  {
    id: 'bilsem-bireysel-gelisim-raporu',
    title: 'BİLSEM Bireysel Gelişim ve Değerlendirme Raporu',
    category: 'bilsem_ozel',
    decimalCode: '821.06.05',
    legalBasis: 'MEB BİLSEM Yönergesi Madde 18',
    summary: 'Özel yetenekli öğrencilerin Destek, BYF, ÖYG ve Proje programlarındaki dönem sonu gelişim karnesi/raporu.',
    tags: ['BİLSEM', 'Gelişim Raporu', 'Özel Yetenek', 'Karne'],
    suggestedAddressee: 'Sayın {VELI_ADI}\n({OGRENCI_ADI} Velisi)',
    defaultSubject: 'BİLSEM {DONEM_BILGISI} Bireysel Gelişim Raporu',
    defaultBody: `ÖĞRENCİ BİLGİLERİ:
Adı Soyadı: {OGRENCI_ADI}
T.C. Kimlik No: {TC_NO}
Devam Ettiği Alan: {YETENEK_ALANI}
Kayıtlı Program: {PROGRAM_ADI} ({ATOLYE_ADI})
Danışman Öğretmen: {DANISMAN_OGRETMEN}

GELİŞİM ALANLARI VE DEĞERLENDİRME:
1. Bilimsel / Sanatsal Merak ve Problem Çözme: {DEGERLENDIRME_1}
2. Yaratıcı Düşünme ve Özgün Üretim Becerisi: {DEGERLENDIRME_2}
3. İletişim, İş Birliği ve Takım Çalışması: {DEGERLENDIRME_3}
4. Proje Geliştirme ve Sorumluluk Bilinci: {DEGERLENDIRME_4}

GENEL DÖNEM DEĞERLENDİRMESİ VE TAVSİYELER:
{GENEL_TAVSIYE}

Öğrencinin bir sonraki dönemde {SONRAKI_PROGRAM} programına devam etmesi / geçişi uygun görülmüştür.`,
    customFields: [
      { id: 'VELI_ADI', label: 'Veli Adı Soyadı', type: 'text', defaultValue: 'Hülya ŞEN' },
      { id: 'OGRENCI_ADI', label: 'Öğrenci Adı Soyadı', type: 'text', defaultValue: 'Burak ŞEN' },
      { id: 'TC_NO', label: 'Öğrenci T.C. No', type: 'text', defaultValue: '56789012345' },
      { id: 'DONEM_BILGISI', label: 'Dönem Bilgisi', type: 'text', defaultValue: '2026-2027 1. Dönem' },
      { id: 'YETENEK_ALANI', label: 'Yetenek Alanı', type: 'select', defaultValue: 'Genel Zihinsel Yetenek', options: ['Genel Zihinsel Yetenek', 'Görsel Sanatlar Yetenek', 'Müzik Yetenek'] },
      { id: 'PROGRAM_ADI', label: 'BİLSEM Programı', type: 'select', defaultValue: 'BYF (Bireysel Yetenekleri Fark Ettirme)', options: ['Uyum', 'Destek Eğitimi', 'BYF (Bireysel Yetenekleri Fark Ettirme)', 'ÖYG (Özel Yetenekleri Geliştirme)', 'Proje Üretimi ve Yönetimi'] },
      { id: 'ATOLYE_ADI', label: 'Atölye / Modül', type: 'text', defaultValue: 'Robotik ve Mekatronik Atölyesi' },
      { id: 'DANISMAN_OGRETMEN', label: 'Danışman Öğretmen', type: 'text', defaultValue: 'Bilişim Teknolojileri Öğretmeni' },
      { id: 'DEGERLENDIRME_1', label: 'Problem Çözme', type: 'text', defaultValue: 'İleri düzeyde meraklı, algoritmik düşünme becerileri çok yüksek.' },
      { id: 'DEGERLENDIRME_2', label: 'Yaratıcılık', type: 'text', defaultValue: 'Farklı çözüm yolları üretmede ve tasarımda oldukça özgün.' },
      { id: 'DEGERLENDIRME_3', label: 'Takım Çalışması', type: 'text', defaultValue: 'Grup içi fikir paylaşımında aktif ve uyumlu.' },
      { id: 'DEGERLENDIRME_4', label: 'Proje ve Sorumluluk', type: 'text', defaultValue: 'Verilen araştırma görevlerini zamanında ve titizlikle tamamlıyor.' },
      { id: 'GENEL_TAVSIYE', label: 'Genel Tavsiyeler', type: 'textarea', defaultValue: 'Öğrencinin TEKNOFEST ve TÜBİTAK 2204-B yarışmalarına yönlendirilmesi ve yapay zekâ modelleme çalışmalarına katılması önerilmektedir.' },
      { id: 'SONRAKI_PROGRAM', label: 'Sonraki Program Durumu', type: 'text', defaultValue: 'BYF-2 Programına' }
    ]
  },
  {
    id: 'bilsem-kayit-dondurma',
    title: 'BİLSEM Öğrenci Kayıt Dondurma Dilekçesi',
    category: 'bilsem_ozel',
    decimalCode: '821.06.04',
    legalBasis: 'MEB BİLSEM Yönergesi Madde 21',
    summary: 'Sağlık, ailevi seyahat veya LGS/YKS sınav hazırlığı mazeretiyle kayıt dondurma talebi.',
    tags: ['BİLSEM', 'Kayıt Dondurma', 'Veli Dilekçesi'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'BİLSEM Kayıt Dondurma Talebi',
    defaultBody: `Velisi bulunduğum merkeziniz {PROGRAM_ADI} programı öğrencisi {OGRENCI_ADI}'nin {DONDURMA_GEREKCESI} gerekçesiyle {EGITIM_YILI} eğitim öğretim yılı boyunca BİLSEM kaydının dondurulmasını arz ederim.

Gereğinin yapılmasını saygılarımla arz ederim.

Veli Adı Soyadı: {VELI_ADI}
İmza:
Tarih: {TARIH}`,
    customFields: [
      { id: 'OGRENCI_ADI', label: 'Öğrenci Adı Soyadı', type: 'text', defaultValue: 'Defne YILDIZ' },
      { id: 'PROGRAM_ADI', label: 'Kayıtlı Olduğu Program', type: 'text', defaultValue: 'ÖYG-2 Programı' },
      { id: 'EGITIM_YILI', label: 'Kayıt Dondurulacak Yıl', type: 'text', defaultValue: '2026-2027 Eğitim Öğretim Yılı' },
      { id: 'DONDURMA_GEREKCESI', label: 'Dondurma Gerekçesi', type: 'text', defaultValue: 'LGS sınavına hazırlık ve örgün okul yoğunluğu' },
      { id: 'VELI_ADI', label: 'Veli Adı Soyadı', type: 'text', defaultValue: 'Sema YILDIZ' }
    ]
  },
  {
    id: 'bilsem-atolye-guvenlik',
    title: 'BİLSEM Atölye ve Laboratuvar Güvenlik Taahhütnamesi',
    category: 'bilsem_ozel',
    decimalCode: '821.06.02',
    legalBasis: 'MEB İSG ve BİLSEM Atölye Yönergeleri',
    summary: 'Robotik, Kimya, Biyoloji, Havacılık ve Fizik atölyelerini kullanan öğrenci ve velilerinin güvenlik taahhüdü.',
    tags: ['BİLSEM', 'Atölye Güvenliği', 'Taahhütname', 'İSG'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Atölye ve Cihaz Güvenlik Kullanım Taahhüdü',
    defaultBody: `Merkezinizde eğitim alan öğrencim {OGRENCI_ADI}'nin {ATOLYE_ADI} bünyesinde bulunan 3D yazıcı, lazer kesim, kimyasal sarf malzemeler, elektronik kitler ve el aletlerini atölye danışman öğretmeni gözetiminde kullanmasına muvafakat ediyorum.

Atölye güvenlik kurallarına riayet edileceği, koruyucu ekipman (önlük, gözlük, eldiven) kullanılacağı hususunu peşinen kabul ve taahhüt ederim.

Öğrenci Adı Soyadı: {OGRENCI_ADI} (İmza)
Veli Adı Soyadı: {VELI_ADI} (İmza)
Tarih: {TARIH}`,
    customFields: [
      { id: 'OGRENCI_ADI', label: 'Öğrenci Adı Soyadı', type: 'text', defaultValue: 'Kaan POLAT' },
      { id: 'ATOLYE_ADI', label: 'Atölye / Laboratuvar', type: 'text', defaultValue: 'Mekatronik, Tasarım ve Robotik Atölyesi' },
      { id: 'VELI_ADI', label: 'Veli Adı Soyadı', type: 'text', defaultValue: 'Cengiz POLAT' }
    ]
  },

  // ==========================================
  // 8. OKUL AİLE BİRLİĞİ & TEFBİS
  // ==========================================
  {
    id: 'oab-genel-kurul-cagrisi',
    title: 'Okul Aile Birliği Olağan Genel Kurul Çağrı ve İlan Metni',
    category: 'oab',
    decimalCode: '841.04.01',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 10',
    summary: 'Ekim ayı sonuna kadar yapılması zorunlu olan genel kurul için velilere gönderilen resmi gündemli davet metni.',
    tags: ['Okul Aile Birliği', 'Genel Kurul', 'Ekim Ayı', 'Davet', 'Duyuru'],
    suggestedAddressee: 'Sayın Velimiz,\n({OKUL_ADI} Okul Aile Birliği Genel Kuruluna)',
    defaultSubject: 'Okul Aile Birliği Olağan Genel Kurul Toplantısı Çağrısı',
    defaultBody: `Millî Eğitim Bakanlığı Okul-Aile Birliği Yönetmeliği hükümleri gereğince, kurumumuz 2026-2027 Eğitim Öğretim Yılı Okul Aile Birliği Olağan Genel Kurul Toplantısı {TOPLANTI_TARIHI} tarihinde saat {TOPLANTI_SAATI}'de kurumumuz {TOPLANTI_YERI} mahallinde gerçekleştirilecektir.

Belirtilen tarihte çoğunluk sağlanamadığı takdirde, ikinci toplantı {ERTELENEN_TARIH} tarihinde aynı yer ve saatte çoğunluk aranmaksızın yapılacaktır.

GÜNDEM MADDELERİ:
1. Açılış, yoklama, toplantı yeter sayısının tespiti.
2. Saygı duruşu ve İstiklal Marşı.
3. Açık oyla bir Divan Başkanı ve iki Kâtip üyenin seçilmesi.
4. Bir önceki döneme ait Yönetim Kurulu Faaliyet Raporunun okunması ve ibrası.
5. Bir önceki döneme ait Denetleme Kurulu Raporunun okunması ve ibrası.
6. Yeni dönem Yönetim Kuruluna veliler arasından 5 asıl, 5 yedek üyenin seçilmesi.
7. Yeni dönem Denetleme Kuruluna veliler arasından 1 asıl, 1 yedek üyenin seçilmesi.
8. Yeni eğitim öğretim yılı tahmini bütçesinin görüşülmesi ve onaylanması.
9. Yeni Yönetim Kuruluna okulun eğitim, donatım, bakım-onarım ihtiyaçlarını karşılama ve TEFBİS harcama yetkisinin verilmesi.
10. Dilek ve temenniler, kapanış.

Okulumuzun ve öğrencilerimizin geleceğine yön verecek bu kritik toplantıya teşriflerinizi önemle rica ederim.`,
    customFields: [
      { id: 'TOPLANTI_TARIHI', label: '1. Toplantı Tarihi', type: 'date', defaultValue: '2026-10-18' },
      { id: 'TOPLANTI_SAATI', label: 'Toplantı Saati', type: 'text', defaultValue: '11:00' },
      { id: 'TOPLANTI_YERI', label: 'Toplantı Salonu', type: 'text', defaultValue: 'Merkez Konferans Salonu' },
      { id: 'ERTELENEN_TARIH', label: 'Çoğunluk Sağlanamazsa 2. Tarih', type: 'date', defaultValue: '2026-10-25' }
    ],
    tips: ['Genel Kurul her yıl Ekim ayı sonuna kadar yapılmak zorundadır.', 'İlk toplantıda salt çoğunluk aranır; sağlanamazsa en geç 30 gün içinde çoğunluk aranmaksızın toplanılır.']
  },
  {
    id: 'oab-genel-kurul-divan',
    title: 'Okul Aile Birliği Genel Kurul Divan ve Seçim Tutanağı',
    category: 'oab',
    decimalCode: '841.04.01',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 11-14',
    summary: 'Yönetim ve Denetim Kurulu asıl/yedek üyelerinin seçimi, tahmini bütçe ibrası ve TEFBİS harcama yetkisi tutanağı.',
    tags: ['Okul Aile Birliği', 'Genel Kurul', 'Divan Tutanağı', 'Seçim', 'TEFBİS'],
    suggestedAddressee: '{OKUL_ADI} OKUL AİLE BİRLİĞİ GENEL KURUL DİVANINA',
    defaultSubject: 'Okul Aile Birliği Genel Kurul Sonuç ve Seçim Tutanağı',
    defaultBody: `Toplantı Tarihi: {TOPLANTI_TARIHI}
Toplantı Yeri: {TOPLANTI_YERI}
Katılımcı Veli Sayısı: {KATILIMCI_SAYISI}

Millî Eğitim Bakanlığı Okul-Aile Birliği Yönetmeliği doğrultusunda toplanan Genel Kurulda, yoklama yapılmış ve toplantı yeter sayısının bulunduğu anlaşılmıştır. Divan Başkanlığına {DIVAN_BASKANI}, Kâtipliğe {DIVAN_KATIP} oy birliğiyle seçilmiştir.

1. Bir önceki döneme ait Yönetim Kurulu Faaliyet Raporu ve Denetleme Kurulu Raporu okunmuş, Genel Kurulca oy birliği ile İBRA EDİLMİŞTİR.
2. 2026-2027 Eğitim Öğretim Yılı Tahmini Bütçesi {TAHMINI_BUTCE} TL olarak kararlaştırılmış ve onaylanmıştır.
3. Yönetim Kuruluna veliler arasından gizli/açık oyla 5 asıl, 5 yedek üye; Denetleme Kuruluna 1 asıl, 1 yedek veli üye seçilmiştir:

YÖNETİM KURULU ASIL ÜYELERİ (5 Kişi):
{YONETIM_ASIL}

YÖNETİM KURULU YEDEK ÜYELERİ (5 Kişi):
{YONETIM_YEDEK}

DENETLEME KURULU (1 Veli Asıl, 1 Veli Yedek + Öğretmenler Kurulunca Seçilen 2 Öğretmen):
Veli Asıl Üye: {DENETIM_VELI_ASIL}
Veli Yedek Üye: {DENETIM_VELI_YEDEK}
Öğretmen Üyeler: {DENETIM_OGRETMENLER}

4. Yeni seçilen Yönetim Kuruluna; okulun eğitim, atölye, bakım-onarım, kırtasiye ve sarf malzeme ihtiyaçlarını karşılama, TEFBİS sistemi üzerinden harcama yapma ve çift imza ile banka hesabı kullanma yetkisi verilmiştir.

İşbu tutanak mahallinde tanzim edilerek Divanca imza altına alınmıştır.

Divan Başkanı: {DIVAN_BASKANI} (İmza)
Kâtip: {DIVAN_KATIP} (İmza)`,
    customFields: [
      { id: 'TOPLANTI_TARIHI', label: 'Toplantı Tarihi', type: 'date', defaultValue: '2026-10-18' },
      { id: 'TOPLANTI_YERI', label: 'Toplantı Yeri', type: 'text', defaultValue: 'Okul Konferans Salonu' },
      { id: 'KATILIMCI_SAYISI', label: 'Katılan Veli Sayısı', type: 'number', defaultValue: '68' },
      { id: 'DIVAN_BASKANI', label: 'Divan Başkanı (Veli)', type: 'text', defaultValue: 'Av. Serkan YILMAZ' },
      { id: 'DIVAN_KATIP', label: 'Kâtip Üye (Veli/Öğretmen)', type: 'text', defaultValue: 'Elif AKIN' },
      { id: 'TAHMINI_BUTCE', label: 'Tahmini Bütçe (TL)', type: 'text', defaultValue: '180.000' },
      { id: 'YONETIM_ASIL', label: 'Yönetim Kurulu Asıl (5 Kişi)', type: 'textarea', defaultValue: '1. Fatma ÖZTÜRK\n2. Murat ŞAHİN\n3. Derya KOÇ\n4. Hakan TEKİN\n5. Sevim YILDIZ' },
      { id: 'YONETIM_YEDEK', label: 'Yönetim Kurulu Yedek (5 Kişi)', type: 'textarea', defaultValue: '1. Canan ER\n2. Tolga GÜL\n3. Merve AY\n4. Serhat KÖSE\n5. Banu ÇELİK' },
      { id: 'DENETIM_VELI_ASIL', label: 'Denetim Veli Asıl', type: 'text', defaultValue: 'Ali CAN' },
      { id: 'DENETIM_VELI_YEDEK', label: 'Denetim Veli Yedek', type: 'text', defaultValue: 'Ahmet BULUT' },
      { id: 'DENETIM_OGRETMENLER', label: 'Öğretmenler Kurulu Temsilcileri', type: 'text', defaultValue: 'Zeynep AY (Öğretmen), Burak GÜN (Öğretmen)' }
    ]
  },
  {
    id: 'oab-yonetim-gorev-dagilimi',
    title: 'OAB Yönetim Kurulu Görev Dağılımı Kararı',
    category: 'oab',
    decimalCode: '841.04.01',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 13',
    summary: 'Genel kurul sonrası seçilen 5 veli üyenin ilk toplantısında Başkan, Bşk. Yrd., Muhasip, Sekreter ve Üye görevlerini belirlediği karar metni.',
    tags: ['Yönetim Kurulu', 'Görev Dağılımı', 'Başkan', 'Muhasip', 'Karar Defteri'],
    suggestedAddressee: '{OKUL_ADI} OKUL AİLE BİRLİĞİ YÖNETİM KURULUNA',
    defaultSubject: 'Yönetim Kurulu Görev Dağılımı Kararı',
    defaultBody: `Karar Tarihi: {KARAR_TARIHI}
Karar No: {KARAR_NO}

{OKUL_ADI} Okul Aile Birliği Yönetim Kurulu üyeleri {KARAR_TARIHI} tarihinde toplanarak MEB Okul-Aile Birliği Yönetmeliği'nin 13. maddesi gereğince kendi aralarında gizli/açık oyla görev dağılımı yapmış ve aşağıdaki şekilde oy birliği ile karara bağlanmıştır:

1. BİRLİK BAŞKANLIĞINA: {BASKAN_ADI}
2. BAŞKAN YARDIMCILIĞINA: {BASKAN_YRD_ADI}
3. MUHASİP ÜYELİĞE: {MUHASIP_ADI}
4. SEKRETERLİĞE: {SEKRETER_ADI}
5. ÜYELİĞE: {UYE_ADI}

Görev dağılımının okul müdürlüğüne bildirilmesine ve resmi işlemlerin başlatılmasına karar verilmiştir.

Başkan: {BASKAN_ADI} (İmza)
Başkan Yrd.: {BASKAN_YRD_ADI} (İmza)
Muhasip: {MUHASIP_ADI} (İmza)
Sekreter: {SEKRETER_ADI} (İmza)
Üye: {UYE_ADI} (İmza)`,
    customFields: [
      { id: 'KARAR_TARIHI', label: 'Karar Tarihi', type: 'date', defaultValue: '2026-10-19' },
      { id: 'KARAR_NO', label: 'Karar No', type: 'text', defaultValue: '2026/01' },
      { id: 'BASKAN_ADI', label: 'Birlik Başkanı Adı', type: 'text', defaultValue: 'Fatma ÖZTÜRK' },
      { id: 'BASKAN_YRD_ADI', label: 'Başkan Yardımcısı', type: 'text', defaultValue: 'Murat ŞAHİN' },
      { id: 'MUHASIP_ADI', label: 'Muhasip Üye', type: 'text', defaultValue: 'Derya KOÇ' },
      { id: 'SEKRETER_ADI', label: 'Sekreter Üye', type: 'text', defaultValue: 'Hakan TEKİN' },
      { id: 'UYE_ADI', label: 'Üye', type: 'text', defaultValue: 'Sevim YILDIZ' }
    ]
  },
  {
    id: 'oab-banka-cift-imza-yetkisi',
    title: 'OAB Banka Hesabı ve Çift İmza Yetkilendirme Kararı',
    category: 'oab',
    decimalCode: '841.04.02',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 16',
    summary: 'Banka hesabından para çekme ve harcamalarda Birlik Başkanı ile Muhasip Üyenin çift imza yetkilendirilmesi kararı.',
    tags: ['Banka', 'Çift İmza', 'TEFBİS', 'Yetki', 'Karar Defteri'],
    suggestedAddressee: '{BANKA_ADI} {BANKA_SUBESI} ŞUBESİ MÜDÜRLÜĞÜNE',
    defaultSubject: 'Banka Hesabı Çift İmza Yetkilendirmesi Kararı',
    defaultBody: `Karar Tarihi: {KARAR_TARIHI}
Karar No: {KARAR_NO}

{OKUL_ADI} Okul Aile Birliği Yönetim Kurulu toplanarak aşağıdaki kararı almıştır:

Birlik adına {BANKA_ADI} {BANKA_SUBESI} Şubesi nezdinde bulunan / açılacak olan {HESAP_NO} numaralı ve {IBAN_NO} IBAN nolu Okul Aile Birliği vadesiz mevduat hesabından para çekmeye, havale/EFT yapmaya ve bankacılık işlemlerini yürütmeye;

MEB Okul-Aile Birliği Yönetmeliği'nin 16. maddesi gereğince, Birlik Başkanı {BASKAN_ADI} ({BASKAN_TC}) ile Birlik Muhasip Üyesi {MUHASIP_ADI} ({MUHASIP_TC})'nin ÇİFT İMZASI İLE müştereken yetkili kılınmalarına, Başkan veya Muhasip üyeden birinin bulunamaması halinde Başkan Yardımcısı {BASKAN_YRD_ADI} ({BASKAN_YRD_TC})'nin münferit değil diğer yetkili ile birlikte çift imzayla yetkili olmasına oy birliğiyle karar verilmiştir.

Başkan: {BASKAN_ADI} (İmza)
Muhasip: {MUHASIP_ADI} (İmza)
Başkan Yrd.: {BASKAN_YRD_ADI} (İmza)
Sekreter: {SEKRETER_ADI} (İmza)
Üye: {UYE_ADI} (İmza)`,
    customFields: [
      { id: 'KARAR_TARIHI', label: 'Karar Tarihi', type: 'date', defaultValue: '2026-10-20' },
      { id: 'KARAR_NO', label: 'Karar No', type: 'text', defaultValue: '2026/02' },
      { id: 'BANKA_ADI', label: 'Banka Adı (Kamu Bankası)', type: 'text', defaultValue: 'T.C. Ziraat Bankası' },
      { id: 'BANKA_SUBESI', label: 'Şube Adı', type: 'text', defaultValue: 'Güngören Şubesi' },
      { id: 'HESAP_NO', label: 'Hesap No', type: 'text', defaultValue: '12345678-5001' },
      { id: 'IBAN_NO', label: 'IBAN', type: 'text', defaultValue: 'TR12 0001 0000 1234 5678 5001' },
      { id: 'BASKAN_ADI', label: 'Başkan Adı', type: 'text', defaultValue: 'Fatma ÖZTÜRK' },
      { id: 'BASKAN_TC', label: 'Başkan T.C.', type: 'text', defaultValue: '11223344556' },
      { id: 'MUHASIP_ADI', label: 'Muhasip Adı', type: 'text', defaultValue: 'Derya KOÇ' },
      { id: 'MUHASIP_TC', label: 'Muhasip T.C.', type: 'text', defaultValue: '22334455667' },
      { id: 'BASKAN_YRD_ADI', label: 'Başkan Yrd. Adı', type: 'text', defaultValue: 'Murat ŞAHİN' },
      { id: 'BASKAN_YRD_TC', label: 'Başkan Yrd. T.C.', type: 'text', defaultValue: '33445566778' },
      { id: 'SEKRETER_ADI', label: 'Sekreter', type: 'text', defaultValue: 'Hakan TEKİN' },
      { id: 'UYE_ADI', label: 'Üye', type: 'text', defaultValue: 'Sevim YILDIZ' }
    ]
  },
  {
    id: 'oab-harcama-satin-alma',
    title: 'OAB Harcama ve Malzeme Alım Karar Defteri Şablonu',
    category: 'oab',
    decimalCode: '841.04.02',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 16 ve TEFBİS İşlemleri',
    summary: 'Okulun kırtasiye, temizlik, bilişim, atölye veya bakım-onarım ihtiyacının OAB bütçesinden karşılanmasına dair karar metni.',
    tags: ['Harcama', 'Satın Alma', 'TEFBİS', 'Fatura', 'Karar Defteri'],
    suggestedAddressee: '{OKUL_ADI} OKUL AİLE BİRLİĞİ YÖNETİM KURULUNA',
    defaultSubject: 'Mal / Hizmet Satın Alımı ve Harcama Kararı',
    defaultBody: `Karar Tarihi: {KARAR_TARIHI}
Karar No: {KARAR_NO}

Yönetim Kurulumuz {KARAR_TARIHI} tarihinde Birlik Başkanı {BASKAN_ADI} başkanlığında toplanarak aşağıdaki kararı almıştır:

Kurumumuz müdürlüğünün {TALEP_YAZISI_BILGISI} ile bildirdiği acil ihtiyaçlar doğrultusunda; {ALINACAK_MALZEME_OZETI} temini maksadıyla piyasa fiyat araştırması yapılmış ve en uygun teklifi veren {FIRMA_ADI} firmasından {FATURA_TUTARI} TL (KDV Dahil) bedelle satın alınmasına;

Bahse konu harcama bedelinin Birlik banka hesabından çift imza ile firma hesabına ödenmesine, faturanın TEFBİS sistemine işlenmesine ve evrakın birlik dosyasında muhafazasına oy birliği ile karar verilmiştir.

Başkan: {BASKAN_ADI} (İmza)
Başkan Yrd.: {BASKAN_YRD_ADI} (İmza)
Muhasip: {MUHASIP_ADI} (İmza)
Sekreter: {SEKRETER_ADI} (İmza)
Üye: {UYE_ADI} (İmza)`,
    customFields: [
      { id: 'KARAR_TARIHI', label: 'Karar Tarihi', type: 'date', defaultValue: '2026-10-22' },
      { id: 'KARAR_NO', label: 'Karar No', type: 'text', defaultValue: '2026/05' },
      { id: 'BASKAN_ADI', label: 'Birlik Başkanı', type: 'text', defaultValue: 'Fatma ÖZTÜRK' },
      { id: 'TALEP_YAZISI_BILGISI', label: 'Okul Talep Yazısı / İhtiyaç', type: 'text', defaultValue: '20.10.2026 tarihli okul temizlik ve kırtasiye malzeme talep yazısı' },
      { id: 'ALINACAK_MALZEME_OZETI', label: 'Alınan Malzeme / Hizmet', type: 'textarea', defaultValue: 'Okul genelinde kullanılmak üzere 40 koli fotokopi kağıdı ve hijyen temizlik sarf malzemeleri' },
      { id: 'FIRMA_ADI', label: 'Yüklenici Firma', type: 'text', defaultValue: 'Güngören Kırtasiye ve Büro Malzemeleri Tic. Ltd. Şti.' },
      { id: 'FATURA_TUTARI', label: 'Fatura Tutarı (TL)', type: 'text', defaultValue: '14.850,00' },
      { id: 'BASKAN_YRD_ADI', label: 'Başkan Yrd.', type: 'text', defaultValue: 'Murat ŞAHİN' },
      { id: 'MUHASIP_ADI', label: 'Muhasip', type: 'text', defaultValue: 'Derya KOÇ' },
      { id: 'SEKRETER_ADI', label: 'Sekreter', type: 'text', defaultValue: 'Hakan TEKİN' },
      { id: 'UYE_ADI', label: 'Üye', type: 'text', defaultValue: 'Sevim YILDIZ' }
    ]
  },
  {
    id: 'oab-denetleme-raporu',
    title: 'OAB Denetleme Kurulu Dönemlik Denetim Raporu',
    category: 'oab',
    decimalCode: '841.04.03',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 14',
    summary: 'Yılda en az 2 defa yapılması yasal zorunluluk olan TEFBİS gelir-gider faturaları, banka ekstreleri ve defter denetimi raporu.',
    tags: ['Denetleme Kurulu', 'Denetim Raporu', 'TEFBİS', 'Banka Ekstresi'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜ VE BİRLİK GENEL KURULUNA',
    defaultSubject: 'Okul Aile Birliği Denetleme Kurulu Denetim Raporu ({DONEM})',
    defaultBody: `Denetim Tarihi: {DENETIM_TARIHI}
Denetlenen Dönem: {DONEM}

Millî Eğitim Bakanlığı Okul-Aile Birliği Yönetmeliği'nin 14. maddesi gereğince, Denetleme Kurulumuz {DENETIM_TARIHI} tarihinde toplanarak Yönetim Kurulunun bahse konu döneme ait iş ve işlemlerini, karar defterini, harcama evraklarını, banka hesap özetlerini ve TEFBİS kayıtlarını incelemiştir.

YAPILAN İNCELEMEDE:
1. Birliğin karar defterinin usulüne uygun tutulduğu, kararların eksiksiz imzalandığı,
2. Dönem içindeki toplam GELİRİN: {TOPLAM_GELIR} TL olduğu ve tamamının TEFBİS sistemine işlendiği,
3. Dönem içindeki toplam GİDERİN: {TOPLAM_GIDER} TL olduğu, tüm harcamaların fatura ve belgeli olduğu,
4. Banka vadesiz hesabında kalan MEVCUT BAKİYENİN: {BANKA_BAKIYESI} TL olduğu ve banka ekstresi ile TEFBİS bakiye kayıtlarının birebir örtüştüğü,
5. Harcamaların okulun zorunlu eğitim, temizlik, güvenlik ve donatım ihtiyaçları doğrultusunda yapıldığı, çift imza kuralına riayet edildiği tespit edilmiştir.

SONUÇ VE KANAAT:
Yönetim Kurulunun faaliyetlerinin ilgili mevzuata, Genel Kurul yetkilerine ve TEFBİS standartlarına uygun yürütüldüğü tespit edilmiştir.

Denetleme Kurulu Başkanı (Veli): {DENETIM_BASKANI} (İmza)
Üye (Öğretmen): {OGRETMEN_UYE_1} (İmza)
Üye (Öğretmen): {OGRETMEN_UYE_2} (İmza)`,
    customFields: [
      { id: 'DENETIM_TARIHI', label: 'Denetim Tarihi', type: 'date', defaultValue: '2027-01-15' },
      { id: 'DONEM', label: 'Denetlenen Dönem', type: 'text', defaultValue: 'Ekim 2026 - Ocak 2027 (1. Dönem)' },
      { id: 'TOPLAM_GELIR', label: 'Toplam Gelir (TL)', type: 'text', defaultValue: '86.450,00' },
      { id: 'TOPLAM_GIDER', label: 'Toplam Gider (TL)', type: 'text', defaultValue: '64.120,00' },
      { id: 'BANKA_BAKIYESI', label: 'Banka Kalan Bakiye (TL)', type: 'text', defaultValue: '22.330,00' },
      { id: 'DENETIM_BASKANI', label: 'Denetleme Kurulu Başkanı (Veli)', type: 'text', defaultValue: 'Ali CAN' },
      { id: 'OGRETMEN_UYE_1', label: 'Öğretmen Üye 1', type: 'text', defaultValue: 'Zeynep AY (Matematik Öğr.)' },
      { id: 'OGRETMEN_UYE_2', label: 'Öğretmen Üye 2', type: 'text', defaultValue: 'Burak GÜN (Bilişim Öğr.)' }
    ]
  },
  {
    id: 'oab-devir-teslim-tutanagi',
    title: 'OAB Yönetim Kurulu Resmi Devir-Teslim Tutanağı',
    category: 'oab',
    decimalCode: '841.04.01',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 24',
    summary: 'Görevi devreden eski yönetim kurulunun yeni yönetime karar defteri, banka bakiyesi, TEFBİS yetkileri ve evrakları devretme tutanağı.',
    tags: ['Devir Teslim', 'Kasa Devri', 'TEFBİS', 'Karar Defteri', 'Tutanak'],
    suggestedAddressee: '{OKUL_ADI} MÜDÜRLÜĞÜNE',
    defaultSubject: 'Okul Aile Birliği Devir Teslim Tutanağı',
    defaultBody: `MEB Okul-Aile Birliği Yönetmeliği'nin 24. maddesi uyarınca, genel kurul seçimi neticesinde görevi sona eren Eski Yönetim Kurulu ile yeni seçilen Yönetim Kurulu arasında {DEVIR_TARIHI} tarihinde kurumumuzda toplanarak devir-teslim işlemi icra edilmiştir.

DEVREDİLEN VE TESLİM ALINAN KIYMETLER:
1. Karar Defteri (Son Karar No: {SON_KARAR_NO})
2. Gelir-Gider Defteri ve TEFBİS Dosyası (Son TEFBİS Evrak No: {TEFBIS_NO})
3. Alındı Belgeleri Koçanları (Kullanılan ve boş koçanlar)
4. Banka Vadesiz Mevduat Hesabındaki Bakiye: {DEVREDILEN_BAKIYE} TL
5. Nakit Kasa Bakiyesi: {KASA_BAKIYESI} TL
6. Gelen-Giden Evrak Kayıt Dosyaları ve Harcama Faturaları Dosyası

Yukarıda dökümü yazılı defter, evrak, banka bakiyesi ve yetkiler eksiksiz olarak teslim edilmiş ve teslim alınmıştır.

DEVREDEN (Eski Başkan): {ESKI_BASKAN} (İmza)
DEVREDEN (Eski Muhasip): {ESKI_MUHASIP} (İmza)
TESLİM ALAN (Yeni Başkan): {YENI_BASKAN} (İmza)
TESLİM ALAN (Yeni Muhasip): {YENI_MUHASIP} (İmza)
GÖZLEMCİ (Okul Müdürü): {MUDUR_ADI} (İmza)`,
    customFields: [
      { id: 'DEVIR_TARIHI', label: 'Devir Tarihi', type: 'date', defaultValue: '2026-10-21' },
      { id: 'SON_KARAR_NO', label: 'Eski Defter Son Karar No', type: 'text', defaultValue: '2026/18' },
      { id: 'TEFBIS_NO', label: 'Son TEFBİS Evrak No', type: 'text', defaultValue: '2026/094' },
      { id: 'DEVREDILEN_BAKIYE', label: 'Bankada Devredilen Bakiye (TL)', type: 'text', defaultValue: '31.450,50' },
      { id: 'KASA_BAKIYESI', label: 'Nakit Kasa Bakiyesi (TL)', type: 'text', defaultValue: '0,00' },
      { id: 'ESKI_BASKAN', label: 'Eski Birlik Başkanı', type: 'text', defaultValue: 'Ahmet YILDIRIM' },
      { id: 'ESKI_MUHASIP', label: 'Eski Muhasip Üye', type: 'text', defaultValue: 'Süheyla KAYA' },
      { id: 'YENI_BASKAN', label: 'Yeni Birlik Başkanı', type: 'text', defaultValue: 'Fatma ÖZTÜRK' },
      { id: 'YENI_MUHASIP', label: 'Yeni Muhasip Üye', type: 'text', defaultValue: 'Derya KOÇ' }
    ]
  },
  {
    id: 'oab-sartli-bagis-kabul',
    title: 'OAB Ayni ve Nakdi Şartlı Bağış Kabul Tutanağı',
    category: 'oab',
    decimalCode: '841.04.02',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 15',
    summary: 'BİLSEM atölyelerine, laboratuvarlara veya okula hayırseverler ve kurumlarca yapılan cihaz, donatım veya nakit bağışların yasal kabul tutanağı.',
    tags: ['Bağış', 'Şartlı Bağış', 'BİLSEM Atölye', 'Taşınır', 'Tutanak'],
    suggestedAddressee: '{OKUL_ADI} OKUL AİLE BİRLİĞİ VE MÜDÜRLÜĞÜNE',
    defaultSubject: 'Ayni / Nakdi Şartlı Bağış Kabul Tutanağı',
    defaultBody: `{BAGISCI_KISI_KURUM} tarafından kurumumuz {KULLANIM_ALANI} ihtiyaçlarında kullanılmak üzere şartlı olarak bağışlanan aşağıda dökümü yazılı ayni/nakdi kıymetler {BAGIS_TARIHI} tarihinde teslim alınmıştır.

BAĞIŞLANAN KIYMETLER:
{BAGIS_DETAYLARI}

Yaklaşık Piyasa / Fatura Değeri: {BAGIS_BEDELI} TL

Bağışlanan malzemelerin Taşınır Mal Yönetmeliği uyarınca kurumun demirbaş kaydına geçirilmesine, ayni bağış alındı belgesinin düzenlenmesine ve bağışçıya teşekkür belgesi takdim edilmesine karar verilmiştir.

Bağışçı / Temsilci: {BAGISCI_KISI_KURUM} (İmza)
Birlik Başkanı: {BASKAN_ADI} (İmza)
Okul Müdürü: {MUDUR_ADI} (İmza)`,
    customFields: [
      { id: 'BAGISCI_KISI_KURUM', label: 'Bağışçı Şahıs veya Kurum Adı', type: 'text', defaultValue: 'Hayırsever İş İnsanı / Şirket Adı' },
      { id: 'KULLANIM_ALANI', label: 'Kullanım Alanı / Atölye', type: 'text', defaultValue: 'BİLSEM Robotik ve Yapay Zekâ Atölyesi' },
      { id: 'BAGIS_TARIHI', label: 'Bağış Tarihi', type: 'date', defaultValue: '2026-10-24' },
      { id: 'BAGIS_DETAYLARI', label: 'Bağışlanan Malzeme / Ekipman', type: 'textarea', defaultValue: '1. 2 Adet Bambu Lab X1-Carbon 3D Yazıcı\n2. 5 Adet Yüksek Performanslı İş İstasyonu Dizüstü Bilgisayar\n3. 20 kg Muhtelif Filament Seti' },
      { id: 'BAGIS_BEDELI', label: 'Tahmini / Fatura Bedeli (TL)', type: 'text', defaultValue: '195.000,00' },
      { id: 'BASKAN_ADI', label: 'Birlik Başkanı', type: 'text', defaultValue: 'Fatma ÖZTÜRK' }
    ]
  },
  {
    id: 'oab-kantin-kira-payi',
    title: 'Okul Alanı / Kantin Kira Takip ve İlçe MEM Payı Bildirim Yazısı',
    category: 'oab',
    decimalCode: '841.04.02',
    legalBasis: 'MEB Okul-Aile Birliği Yönetmeliği Madde 22',
    summary: 'Okul kantini ve açık alan kiralama gelirlerinin %10 İlçe MEM ve %10 İl MEM paylarının ilgili hesaplara aktarıldığına dair resmi üst yazı.',
    tags: ['Kantin', 'Kira', 'Arz Bedeli', 'İlçe MEM Payı', 'Üst Yazı'],
    suggestedAddressee: '{ILCE_MEM} MÜDÜRLÜĞÜNE\n({ILCE_ADI})',
    defaultSubject: 'Kantin Kira Gelir Payı Bildirimi ({AY_BILGISI})',
    defaultBody: `Kurumumuz bünyesinde faaliyet gösteren okul kantininin {AY_BILGISI} ayı kira bedeli olarak işletmeci {ISLETMECI_ADI} tarafından {KIRA_BEDELI} TL birlik hesabımıza yatırılmıştır.

MEB Okul-Aile Birliği Yönetmeliği'nin 22. maddesi gereğince;
- %10 İlçe Millî Eğitim Müdürlüğü Payı ({ILCE_PAYI} TL),
- %10 İl Millî Eğitim Müdürlüğü Payı ({IL_PAYI} TL)

ilgili müdürlüklerin resmi banka hesaplarına aktarılmış olup dekont örnekleri ekte sunulmuştur.

Gereğini arz ederim.`,
    customFields: [
      { id: 'AY_BILGISI', label: 'Kira Ayı', type: 'text', defaultValue: 'Ekim 2026' },
      { id: 'ISLETMECI_ADI', label: 'Kantin İşletmecisi', type: 'text', defaultValue: 'Kantin İşletmecisi Adı' },
      { id: 'KIRA_BEDELI', label: 'Aylık Toplam Kira (TL)', type: 'text', defaultValue: '18.000,00' },
      { id: 'ILCE_PAYI', label: 'İlçe MEM %10 Payı (TL)', type: 'text', defaultValue: '1.800,00' },
      { id: 'IL_PAYI', label: 'İl MEM %10 Payı (TL)', type: 'text', defaultValue: '1.800,00' }
    ],
    attachments: [
      '1. İlçe MEM Payı Banka Dekontu (1 Adet)',
      '2. İl MEM Payı Banka Dekontu (1 Adet)',
      '3. Kantin Kira Tahsilat Makbuzu'
    ]
  }
];
