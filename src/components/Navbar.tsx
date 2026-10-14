import React from 'react';
import { 
  Building2, 
  Search, 
  Settings, 
  FilePlus, 
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { InstitutionProfile } from '../types';

interface NavbarProps {
  profile: InstitutionProfile;
  onOpenSettings: () => void;
  onOpenDecimalSearch: () => void;
  onNewDocument: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenSettings,
  onOpenDecimalSearch,
  onNewDocument,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & School Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.reload()}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-700 to-red-600 flex items-center justify-center text-white shadow-md shadow-red-200 flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg uppercase">
                  {profile.schoolName}
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                  MEB BİLSEM
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                İdari İşler, Resmi Yazışma & Yönetim Portalı
              </p>
            </div>
          </div>

          {/* Quick Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Decimal Search Button */}
            <button
              onClick={onOpenDecimalSearch}
              className="flex items-center space-x-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              title="DYS Standart Dosya Planı (Desimal Kod) Arama"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Desimal Kod Ara</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] bg-white text-slate-500 rounded border border-slate-300 shadow-2xs">
                F2
              </kbd>
            </button>

            {/* New Document Button */}
            <button
              onClick={onNewDocument}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm shadow-blue-200"
            >
              <FilePlus className="w-3.5 h-3.5" />
              <span>Yeni Resmi Yazı / Tutanak</span>
            </button>

            {/* Institution Settings Button */}
            <button
              onClick={onOpenSettings}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              title="Kurum ve Yönetici Bilgilerini Güncelle"
            >
              <Settings className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden xl:inline">Kurum Ayarları</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenDecimalSearch}
              className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg"
              title="Desimal Kod Ara"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenSettings}
              className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg"
              title="Ayarlar"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
