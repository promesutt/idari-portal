export interface InstitutionProfile {
  schoolName: string;
  institutionCode: string;
  province: string;
  district: string;
  principalName: string;
  principalTitle: string;
  vicePrincipalName: string;
  vicePrincipalTitle: string;
  phone: string;
  email: string;
  address: string;
  dysCode: string;
}

export type CategoryType = 
  | 'personel'
  | 'ogrenci'
  | 'isg'
  | 'kurullar'
  | 'projeler'
  | 'sosyal_etkinlik'
  | 'bilsem_ozel'
  | 'oab';

export interface CategoryInfo {
  id: CategoryType;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgLight: string;
}

export interface TemplateField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'date' | 'select' | 'number';
  placeholder?: string;
  defaultValue?: string;
  options?: string[];
  required?: boolean;
}

export interface DocumentTemplate {
  id: string;
  title: string;
  category: CategoryType;
  decimalCode: string;
  legalBasis: string;
  summary: string;
  tags: string[];
  suggestedAddressee?: string;
  defaultSubject?: string;
  defaultBody: string;
  customFields?: TemplateField[];
  attachments?: string[];
  tips?: string[];
}

export interface OfficialDocumentData {
  province: string;
  district: string;
  schoolName: string;
  number: string; // Sayı (Örn: E-62846872-903.02.01-123456)
  subject: string; // Konu
  date: string; // Tarih
  addressee: string; // Muhatap (Örn: GÜNGÖREN İLÇE MİLLÎ EĞİTİM MÜDÜRLÜĞÜNE)
  interest?: string; // İlgi
  body: string; // Gövde Metni
  conclusionType: 'arz' | 'rica' | 'arz_rica'; // Arz ederim / Rica ederim
  signerName: string; // İmzalayan Adı
  signerTitle: string; // İmzalayan Unvanı
  attachments?: string; // Ekler
  distribution?: string; // Dağıtım
}

export interface DecimalCode {
  code: string;
  name: string;
  category: string;
  isPopular?: boolean;
  description?: string;
}

export interface CalendarEvent {
  id: string;
  monthIndex: number; // 0: Ocak ... 11: Aralık (veya 9: Eylül vb)
  monthName: string;
  title: string;
  deadline?: string;
  category: 'personel' | 'ogrenci' | 'idari' | 'mali' | 'isg' | 'kurullar' | 'bilsem' | 'projeler' | 'sosyal_etkinlik';
  description: string;
  legalBasis?: string;
  isCritical?: boolean;
}

export interface LegislationItem {
  id: string;
  title: string;
  code: string;
  sourceUrl?: string;
  category: string;
  summary: string;
  keyArticles: {
    articleNo: string;
    topic: string;
    content: string;
  }[];
}
