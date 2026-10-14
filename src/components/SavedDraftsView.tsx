import React from 'react';
import { BookmarkCheck, Clock, Trash2, Edit3, FileText, ArrowRight } from 'lucide-react';
import { SavedDocument, getSavedDocuments, deleteSavedDocument } from '../utils/storage';

interface SavedDraftsViewProps {
  onLoadDraft: (draft: SavedDocument) => void;
}

export const SavedDraftsView: React.FC<SavedDraftsViewProps> = ({ onLoadDraft }) => {
  const [drafts, setDrafts] = React.useState<SavedDocument[]>(getSavedDocuments());

  const handleDelete = (id: string) => {
    deleteSavedDocument(id);
    setDrafts(getSavedDocuments());
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs">YEREL HAFIZA</span>
            <h1 className="text-xl font-bold text-slate-900">Kayıtlı Resmi Yazı Taslaklarım</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Tarayıcınızın yerel hafızasında saklanan ve kaldığınız yerden düzenleyebileceğiniz resmi yazılar
          </p>
        </div>
      </div>

      {/* Drafts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {drafts.map((d) => (
          <div
            key={d.id}
            className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-5 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{new Date(d.timestamp).toLocaleDateString('tr-TR')}</span>
                </span>
                <span className="font-mono">{d.date}</span>
              </div>

              <h2 className="text-sm font-bold text-slate-900 line-clamp-1">
                {d.subject || d.title}
              </h2>

              <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                {d.body}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleDelete(d.id)}
                className="text-xs text-red-500 hover:text-red-700 flex items-center space-x-1 p-1 hover:bg-red-50 rounded"
                title="Taslağı Sil"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Sil</span>
              </button>

              <button
                onClick={() => onLoadDraft(d)}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center space-x-1 shadow-2xs"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Düzenlemeye Devam Et</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {drafts.length === 0 && (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 space-y-2">
          <BookmarkCheck className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-slate-500 text-sm font-medium">Henüz kayıtlı bir taslağınız bulunmuyor.</p>
          <p className="text-xs text-slate-400">
            Resmi Yazı Oluşturucu ekranında "Taslağı Kaydet" butonuna basarak çalışmalarınızı buraya kaydedebilirsiniz.
          </p>
        </div>
      )}

    </div>
  );
};
