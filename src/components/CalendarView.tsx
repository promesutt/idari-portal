import React, { useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  AlertCircle,
  Filter,
  CheckCheck,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { CALENDAR_EVENTS } from '../data/calendarData';
import { CalendarEvent } from '../types';

interface CalendarViewProps {
  completedTasks: string[];
  onToggleTask: (taskId: string) => void;
}

const MONTHS = [
  { index: 8, name: 'Eylül' },
  { index: 9, name: 'Ekim' },
  { index: 10, name: 'Kasım' },
  { index: 11, name: 'Aralık' },
  { index: 0, name: 'Ocak' },
  { index: 1, name: 'Şubat' },
  { index: 2, name: 'Mart' },
  { index: 3, name: 'Nisan' },
  { index: 4, name: 'Mayıs' },
  { index: 5, name: 'Haziran' },
  { index: 6, name: 'Temmuz' },
  { index: 7, name: 'Ağustos' },
];

export const CalendarView: React.FC<CalendarViewProps> = ({
  completedTasks,
  onToggleTask,
}) => {
  const currentMonthIdx = new Date().getMonth();
  const [activeMonthIndex, setActiveMonthIndex] = useState<number>(currentMonthIdx);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const monthEvents = CALENDAR_EVENTS.filter((e) => e.monthIndex === activeMonthIndex);

  const filteredEvents = monthEvents.filter((e) => {
    if (filterCategory === 'all') return true;
    return e.category === filterCategory;
  });

  const activeMonthName = MONTHS.find((m) => m.index === activeMonthIndex)?.name || '';

  const completedCount = monthEvents.filter((e) => completedTasks.includes(e.id)).length;
  const progressPercent = monthEvents.length > 0 ? Math.round((completedCount / monthEvents.length) * 100) : 0;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs">MEB TAKVİM</span>
            <h1 className="text-xl font-bold text-slate-900">MEB İdari Yıllık & Aylık İş Takvimi</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Milli Eğitim mevzuatına göre okul yöneticisinin 12 ay boyunca yapması gereken yasal ve idari işler
          </p>
        </div>

        {/* Progress badge */}
        <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center space-x-3">
          <div className="text-right">
            <div className="text-xs font-bold text-slate-800">
              {activeMonthName} İlerlemesi: %{progressPercent}
            </div>
            <div className="text-[11px] text-slate-500">
              {completedCount} / {monthEvents.length} Görev Tamamlandı
            </div>
          </div>
          <div className="w-12 h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Month Navigation Tabs (Academic Order: September -> August) */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {MONTHS.map((m) => {
          const isSelected = activeMonthIndex === m.index;
          const isCurrent = currentMonthIdx === m.index;
          const monthTasks = CALENDAR_EVENTS.filter((e) => e.monthIndex === m.index);
          const monthCompleted = monthTasks.filter((e) => completedTasks.includes(e.id)).length;
          const allDone = monthTasks.length > 0 && monthCompleted === monthTasks.length;

          return (
            <button
              key={m.index}
              onClick={() => setActiveMonthIndex(m.index)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{m.name}</span>
              {isCurrent && (
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-blue-600'}`}></span>
              )}
              {allDone && (
                <CheckCheck className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-200' : 'text-emerald-600'}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-semibold px-2">Filtre:</span>
        {[
          { id: 'all', label: 'Tüm Görevler' },
          { id: 'personel', label: 'Özlük / Personel' },
          { id: 'ogrenci', label: 'Öğrenci İşleri' },
          { id: 'isg', label: 'İş Sağlığı (İSG)' },
          { id: 'mali', label: 'Mali / Taşınır / OAB' },
          { id: 'kurullar', label: 'Kurullar' },
          { id: 'projeler', label: 'Projeler' },
          { id: 'bilsem', label: 'BİLSEM Özel' },
        ].map((c) => (
          <button
            key={c.id}
            onClick={() => setFilterCategory(c.id)}
            className={`px-3 py-1 rounded-lg font-semibold transition-colors whitespace-nowrap ${
              filterCategory === c.id
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Events List for Selected Month */}
      <div className="space-y-4">
        {filteredEvents.map((event) => {
          const isDone = completedTasks.includes(event.id);
          return (
            <div
              key={event.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isDone
                  ? 'bg-slate-50/70 border-slate-200 opacity-60'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start space-x-4">
                <button
                  type="button"
                  onClick={() => onToggleTask(event.id)}
                  className={`mt-1 flex-shrink-0 transition-colors ${
                    isDone ? 'text-emerald-600' : 'text-slate-300 hover:text-blue-600'
                  }`}
                  title={isDone ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
                >
                  <CheckCircle2 className={`w-6 h-6 ${isDone ? 'fill-emerald-100' : ''}`} />
                </button>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {event.category.toUpperCase()}
                    </span>
                    {event.deadline && (
                      <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                        <Clock className="w-3 h-3 text-red-500" />
                        <span>Son Tarih: {event.deadline}</span>
                      </span>
                    )}
                  </div>

                  <h2 className={`text-base font-bold text-slate-900 ${isDone ? 'line-through text-slate-500' : ''}`}>
                    {event.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
                    {event.description}
                  </p>

                  {event.legalBasis && (
                    <p className="text-[11px] text-slate-400 font-medium pt-1">
                      Mevzuat Dayanağı: {event.legalBasis}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex-shrink-0 self-end md:self-center">
                <button
                  onClick={() => onToggleTask(event.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                    isDone
                      ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                  }`}
                >
                  {isDone ? 'Geri Al' : 'Tamamlandı'}
                </button>
              </div>
            </div>
          );
        })}

        {filteredEvents.length === 0 && (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">Bu filtre için bu ayda kayıtlı bir işlem bulunamadı.</p>
          </div>
        )}
      </div>

    </div>
  );
};
