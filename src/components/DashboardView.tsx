import React from 'react';
import {
  FileText,
  FilePlus,
  Compass,
  Search,
  Calendar,
  Sparkles,
  Users,
  GraduationCap,
  ShieldAlert,
  Briefcase,
  Lightbulb,
  CheckCircle2,
  Clock,
  ArrowRight,
  Bookmark,
  HeartHandshake
} from 'lucide-react';
import { InstitutionProfile } from '../types';
import { CATEGORIES } from '../data/categoriesData';
import { CALENDAR_EVENTS } from '../data/calendarData';
import { TEMPLATES_DATA } from '../data/templatesData';

interface DashboardViewProps {
  profile: InstitutionProfile;
  setActiveView: (view: string) => void;
  onSelectTemplate: (templateId: string) => void;
  completedTasks: string[];
  onToggleTask: (taskId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  profile,
  setActiveView,
  onSelectTemplate,
  completedTasks,
  onToggleTask
}) => {
  // Current month (Ocak = 0, Ekim = 9, etc.)
  const currentMonthIndex = new Date().getMonth();
  const currentMonthEvents = CALENDAR_EVENTS.filter(
    (e) => e.monthIndex === currentMonthIndex
  );

  const getCategoryCount = (catId: string) => {
    return TEMPLATES_DATA.filter((t) => t.category === catId).length;
  };

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'bilsem_ozel': return Sparkles;
      case 'oab': return HeartHandshake;
      case 'personel': return Users;
      case 'ogrenci': return GraduationCap;
      case 'isg': return ShieldAlert;
      case 'kurullar': return Briefcase;
      case 'projeler': return Lightbulb;
      case 'sosyal_etkinlik': return Compass;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold backdrop-blur-xs border border-blue-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>T.C. Millî Eğitim Bakanlığı & BİLSEM Yönetim Portalı</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {profile.schoolName} İdari Portalı
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Resmi yazışmalar, tutanaklar, DYS desimal dosya kodları, mevzuat dayanakları, gezi evrakları ve BİLSEM'e özel formları tek merkezden hazırlayın, düzenleyin ve Word / PDF olarak kaydedin.
          </p>

          {/* Quick Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveView('generator')}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-900/50 hover:shadow-lg"
            >
              <FilePlus className="w-4 h-4" />
              <span>Resmi Yazı & Tutanak Oluşturucu</span>
            </button>
            <button
              onClick={() => setActiveView('trip_wizard')}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-medium backdrop-blur-xs transition-all border border-white/20"
            >
              <Compass className="w-4 h-4" />
              <span>Gezi Dosyası Sihirbazı</span>
            </button>
            <button
              onClick={() => setActiveView('decimal_search')}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-medium backdrop-blur-xs transition-all border border-white/20"
            >
              <Search className="w-4 h-4" />
              <span>DYS Desimal Kod Bul</span>
            </button>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-blue-500/10 to-transparent pointer-events-none hidden md:block"></div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Monthly Administrative Checklist Highlight */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Bu Ayın İdari & Yasal Görevleri ({currentMonthEvents[0]?.monthName || 'Dönem'})
              </h2>
              <p className="text-xs text-slate-500">
                Mevzuat gereği bu ay yapılması gereken kurul, rapor, İSG ve mali işlemler
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveView('calendar')}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Tüm Yıllık Takvimi Gör</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {currentMonthEvents.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentMonthEvents.map((event) => {
              const isDone = completedTasks.includes(event.id);
              return (
                <div
                  key={event.id}
                  onClick={() => onToggleTask(event.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isDone
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-blue-300 hover:shadow-xs'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        event.isCritical ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {event.deadline || 'Aylık İşlem'}
                      </span>
                      <button
                        type="button"
                        className={`text-slate-400 hover:text-emerald-600 ${isDone ? 'text-emerald-600' : ''}`}
                      >
                        <CheckCircle2 className={`w-5 h-5 ${isDone ? 'fill-emerald-100 text-emerald-600' : ''}`} />
                      </button>
                    </div>
                    <h3 className={`text-sm font-bold text-slate-900 ${isDone ? 'line-through text-slate-500' : ''}`}>
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {event.legalBasis && (
                    <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                      Dayanak: {event.legalBasis}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-slate-500 mt-4">Bu ay için kayıtlı özel bir görev bulunamadı.</p>
        )}
      </div>

      {/* 7 Core Administrative Categories Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">İdari Evrak ve Şablon Kategorileri</h2>
            <p className="text-xs text-slate-500">Milli Eğitim okullarının tüm idari süreçlerini kapsayan hazır kütüphane</p>
          </div>
          <button
            onClick={() => setActiveView('templates')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
          >
            <span>Kataloğu Aç</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const count = getCategoryCount(cat.id);
            return (
              <div
                key={cat.id}
                onClick={() => setActiveView(`templates_${cat.id}`)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer hover:shadow-md flex flex-col justify-between bg-white ${cat.bgLight}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white shadow-xs border border-slate-100 ${cat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/80 text-slate-700 border border-slate-200">
                      {count} Şablon
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{cat.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100/80 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Evrakları İncele</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Ready-to-Use Templates Showcase */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">En Çok İhtiyaç Duyulan Resmi Belgeler</h2>
            <p className="text-xs text-slate-500">Doğrudan açıp bilgileri girerek Microsoft Word veya PDF olarak indirebilirsiniz</p>
          </div>
          <button
            onClick={() => setActiveView('templates')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800"
          >
            Tüm 60+ Şablonu Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEMPLATES_DATA.slice(0, 6).map((tpl) => (
            <div
              key={tpl.id}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 bg-white hover:bg-slate-50/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    Kod: {tpl.decimalCode}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">
                    {tpl.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 line-clamp-1">
                  {tpl.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {tpl.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  {tpl.legalBasis}
                </span>
                <button
                  onClick={() => onSelectTemplate(tpl.id)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
                >
                  Düzenle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
