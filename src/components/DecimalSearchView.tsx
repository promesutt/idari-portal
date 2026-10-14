import React, { useState } from 'react';
import { Search, Copy, Check, Star, ArrowRight, Tag, BookOpen, Layers } from 'lucide-react';
import { DECIMAL_CODES } from '../data/decimalCodesData';
import { DecimalCode } from '../types';

interface DecimalSearchViewProps {
  onStartDocumentWithCode: (code: string, name: string) => void;
}

export const DecimalSearchView: React.FC<DecimalSearchViewProps> = ({
  onStartDocumentWithCode,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = Array.from(new Set(DECIMAL_CODES.map((c) => c.category)));

  const filteredCodes = DECIMAL_CODES.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      item.code.toLowerCase().includes(query) ||
      item.name.toLowerCase().includes(query) ||
      (item.description && item.description.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-red-100 text-red-700 font-bold text-xs">MEB DYS</span>
            <h1 className="text-xl font-bold text-slate-900">MEB Standart Dosya Planı (Desimal Kod Rehberi)</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Resmi yazışmalarda ve DYS'de kullanılan güncel desimal dosya kodları ve arama motoru
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Kod veya konu ara (örn: 903, mazeret, kaza, gezi, BİLSEM)..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Categories Filter Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Tüm Kodlar ({DECIMAL_CODES.length})
        </button>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCodes.map((item) => (
          <div
            key={item.code}
            className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-5 transition-all shadow-xs hover:shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    {item.code}
                  </span>
                  {item.isPopular && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                      <span>Sık Kullanılan</span>
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-medium text-slate-400">
                  {item.category}
                </span>
              </div>

              <h2 className="text-sm font-bold text-slate-900 leading-snug">
                {item.name}
              </h2>

              {item.description && (
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleCopy(item.code)}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
                title="Desimal Kodu Panoya Kopyala"
              >
                {copiedCode === item.code ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Kopyalandı</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Kodu Kopyala</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onStartDocumentWithCode(item.code, item.name)}
                className="inline-flex items-center space-x-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>Bu Kodla Yazı Başlat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCodes.length === 0 && (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
          <p className="text-slate-500 text-sm">Aramanızla eşleşen desimal kod bulunamadı.</p>
        </div>
      )}

    </div>
  );
};
