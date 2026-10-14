import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Scale,
  ShieldCheck,
  FileCheck,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { LEGISLATION_DATA } from '../data/legislationData';
import { LegislationItem } from '../types';

export const LegislationView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string>(LEGISLATION_DATA[0]?.id || '');

  const filteredLegislation = LEGISLATION_DATA.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.keyArticles.some(
        (a) =>
          a.articleNo.toLowerCase().includes(q) ||
          a.topic.toLowerCase().includes(q) ||
          a.content.toLowerCase().includes(q)
      )
    );
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs">HUKUKİ DAYANAK</span>
            <h1 className="text-xl font-bold text-slate-900">MEB İdarecileri İçin Mevzuat & Yönetmelik Rehberi</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Okul yönetiminde en sık başvurulan kanun, yönetmelik ve genelge maddelerinin pratik özetleri
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Mevzuat maddesi, izin, nöbet, İSG ara..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Critical Legal Summary Cards (Quick Reference Table) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[10px] font-bold text-red-600 uppercase">İş Kazası Bildirimi</span>
          <div className="text-lg font-extrabold text-slate-900">En Geç 3 İş Günü</div>
          <p className="text-[11px] text-slate-500">6331 s.K. / SGK ve MEBBİS İSG modülüne zorunlu giriş</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[10px] font-bold text-blue-600 uppercase">Tek Hekim Raporu Sınırı</span>
          <div className="text-lg font-extrabold text-slate-900">Yılda En Fazla 40 Gün</div>
          <p className="text-[11px] text-slate-500">Bir defada 10 gün; 40 günü aşan raporlar heyet olmalıdır</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[10px] font-bold text-purple-600 uppercase">BİLSEM Devamsızlık</span>
          <div className="text-lg font-extrabold text-slate-900">Maksimum %30 Sınırı</div>
          <p className="text-[11px] text-slate-500">Ders saatinin %30'unu mazeretsiz aşanın ilişiği kesilir</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[10px] font-bold text-emerald-600 uppercase">Nöbet Muafiyeti</span>
          <div className="text-lg font-extrabold text-slate-900">24. Hafta & 2 Yıl</div>
          <p className="text-[11px] text-slate-500">Hamilelikte 24. haftadan, doğumdan sonra 2 yıl muaf</p>
        </div>
      </div>

      {/* Accordion List of Legislation Topics */}
      <div className="space-y-4">
        {filteredLegislation.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                className="w-full p-5 text-left flex items-center justify-between hover:bg-slate-50/80 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {item.code}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {item.summary}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-slate-100 text-slate-600 flex-shrink-0 ml-4">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isExpanded && (
                <div className="p-5 pt-0 border-t border-slate-100 bg-slate-50/40 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.summary}
                  </p>

                  <div className="space-y-3">
                    {item.keyArticles.map((article, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-blue-800">
                            {article.articleNo}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-500">
                            {article.topic}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {article.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
