import React from 'react';
import {
  LayoutDashboard,
  FileText,
  FilePlus,
  Compass,
  Search,
  CalendarDays,
  Sparkles,
  BookOpen,
  Bot,
  BookmarkCheck,
  ShieldAlert,
  Users,
  GraduationCap,
  Briefcase,
  Lightbulb,
  HeartHandshake
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  selectedCategoryFilter?: string | null;
  onSelectCategoryFilter?: (catId: string | null) => void;
  closeMobileMenu?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  setActiveView,
  closeMobileMenu,
}) => {
  const mainNavItems = [
    { id: 'dashboard', label: 'Genel Bakış', icon: LayoutDashboard },
    { id: 'templates', label: 'Şablon Kütüphanesi', icon: FileText, badge: '60+' },
    { id: 'generator', label: 'Resmi Yazı & Tutanak', icon: FilePlus, highlight: true },
    { id: 'trip_wizard', label: 'Gezi Dosyası Sihirbazı', icon: Compass, badge: '9 Evrak' },
    { id: 'decimal_search', label: 'Desimal Kod Rehberi', icon: Search },
    { id: 'calendar', label: 'İdari İş Takvimi', icon: CalendarDays },
    { id: 'bilsem_special', label: 'BİLSEM Özel Modülü', icon: Sparkles, color: 'text-purple-600' },
    { id: 'legislation', label: 'Mevzuat & Rehber', icon: BookOpen },
    { id: 'ai_assistant', label: 'DYS Yazı Asistanı', icon: Bot, badge: 'Akıllı' },
    { id: 'saved_drafts', label: 'Kayıtlı Taslaklarım', icon: BookmarkCheck },
  ];

  const handleNav = (id: string) => {
    setActiveView(id);
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return (
    <aside className="w-full lg:w-64 bg-white lg:min-h-[calc(100vh-4rem)] border-r border-slate-200 p-4 flex flex-col justify-between flex-shrink-0 no-print">
      <div className="space-y-6">
        {/* Main Navigation */}
        <div>
          <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            İdari Modüller
          </p>
          <nav className="space-y-1">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                      : item.highlight
                      ? 'text-blue-700 bg-blue-50/70 hover:bg-blue-100/70 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3 truncate">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : item.color || 'text-slate-500'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-blue-800 text-white'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Category Jump */}
        <div>
          <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Hızlı Kategori Erişimi
          </p>
          <div className="space-y-1 text-xs">
            <button
              onClick={() => {
                setActiveView('templates_personel');
                if (closeMobileMenu) closeMobileMenu();
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ${
                activeView === 'templates_personel' ? 'bg-blue-50 text-blue-700 font-semibold' : ''
              }`}
            >
              <Users className="w-3.5 h-3.5 text-blue-500" />
              <span>Özlük & Personel</span>
            </button>
            <button
              onClick={() => {
                setActiveView('templates_ogrenci');
                if (closeMobileMenu) closeMobileMenu();
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ${
                activeView === 'templates_ogrenci' ? 'bg-emerald-50 text-emerald-700 font-semibold' : ''
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
              <span>Öğrenci İşleri</span>
            </button>
            <button
              onClick={() => {
                setActiveView('templates_isg');
                if (closeMobileMenu) closeMobileMenu();
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ${
                activeView === 'templates_isg' ? 'bg-amber-50 text-amber-700 font-semibold' : ''
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
              <span>İş Sağlığı (İSG)</span>
            </button>
            <button
              onClick={() => {
                setActiveView('templates_kurullar');
                if (closeMobileMenu) closeMobileMenu();
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ${
                activeView === 'templates_kurullar' ? 'bg-indigo-50 text-indigo-700 font-semibold' : ''
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
              <span>Kurul & Komisyon</span>
            </button>
            <button
              onClick={() => {
                setActiveView('templates_projeler');
                if (closeMobileMenu) closeMobileMenu();
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ${
                activeView === 'templates_projeler' ? 'bg-rose-50 text-rose-700 font-semibold' : ''
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-rose-500" />
              <span>Projeler & Ar-Ge</span>
            </button>
            <button
              onClick={() => {
                setActiveView('templates_oab');
                if (closeMobileMenu) closeMobileMenu();
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ${
                activeView === 'templates_oab' ? 'bg-cyan-50 text-cyan-800 font-semibold' : ''
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5 text-cyan-600" />
              <span>Okul Aile Birliği</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info Box */}
      <div className="pt-4 border-t border-slate-200 mt-6 text-xs text-slate-500">
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
          <p className="font-semibold text-slate-800">MEB Standart Uyumlu</p>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            DYS resmi yazışma yönergesi, Standart Dosya Planı ve 657 hükümlerine göre hazırlanmıştır.
          </p>
        </div>
      </div>
    </aside>
  );
};
