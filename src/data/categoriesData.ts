import { CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'bilsem_ozel',
    title: 'BİLSEM Özel Modülü',
    description: 'BİLSEM Yönergesi, Tanılama, Bireysel Gelişim Raporları, BYF/ÖYG/Proje ve Atölye Evrakları',
    icon: 'Sparkles',
    color: 'text-purple-600',
    bgLight: 'bg-purple-50 border-purple-200 hover:border-purple-300'
  },
  {
    id: 'personel',
    title: 'Özlük & Personel İşleri',
    description: 'İzin, Rapor, Nöbet, Ek Ders, Egzersiz Onayı, Görev Dağılımı ve Sendika Yazışmaları',
    icon: 'Users',
    color: 'text-blue-600',
    bgLight: 'bg-blue-50 border-blue-200 hover:border-blue-300'
  },
  {
    id: 'ogrenci',
    title: 'Öğrenci İşleri',
    description: 'Kayıt, Nakil, Devamsızlık Mektupları, Veli Muvafakatnameleri, Disiplin ve İzin Dilekçeleri',
    icon: 'GraduationCap',
    color: 'text-emerald-600',
    bgLight: 'bg-emerald-50 border-emerald-200 hover:border-emerald-300'
  },
  {
    id: 'isg',
    title: 'İş Sağlığı ve Güvenliği (İSG)',
    description: 'Risk Değerlendirme, Acil Durum Ekipleri, Tahliye Tatbikatları ve İş Kazası Bildirimleri',
    icon: 'ShieldAlert',
    color: 'text-amber-600',
    bgLight: 'bg-amber-50 border-amber-200 hover:border-amber-300'
  },
  {
    id: 'kurullar',
    title: 'Kurul, Komisyon ve Toplantılar',
    description: 'Öğretmenler Kurulu, Zümreler, ŞÖK, Muayene-Kabul, Taşınır ve Okul Aile Birliği Tutanakları',
    icon: 'Briefcase',
    color: 'text-indigo-600',
    bgLight: 'bg-indigo-50 border-indigo-200 hover:border-indigo-300'
  },
  {
    id: 'projeler',
    title: 'Projeler & Ar-Ge',
    description: 'TÜBİTAK (4006/2204), TEKNOFEST, Erasmus+, Patent/Faydalı Model ve Kalkınma Ajansı Evrakları',
    icon: 'Lightbulb',
    color: 'text-rose-600',
    bgLight: 'bg-rose-50 border-rose-200 hover:border-rose-300'
  },
  {
    id: 'sosyal_etkinlik',
    title: 'Sosyal Etkinlik & Gezi',
    description: 'MEB Gezi Onay Dosyası (9 Evrak Sihirbazı), Sosyal Kulüpler, Sergi ve Yarışma İzinleri',
    icon: 'Compass',
    color: 'text-teal-600',
    bgLight: 'bg-teal-50 border-teal-200 hover:border-teal-300'
  }
];
