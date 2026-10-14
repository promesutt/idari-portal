import React, { useState } from 'react';
import { X, Building2, Save, Check } from 'lucide-react';
import { InstitutionProfile } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: InstitutionProfile;
  onSaveProfile: (newProfile: InstitutionProfile) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}) => {
  const [formData, setFormData] = useState<InstitutionProfile>(profile);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-5 animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Kurum ve Yönetici Bilgileri</h2>
              <p className="text-xs text-slate-500">Bu bilgiler tüm resmi yazı ve şablonlarda otomatik kullanılır</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-semibold text-slate-700">Okul / Kurum Tam Adı</label>
            <input
              type="text"
              required
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-bold text-slate-800"
              placeholder="Örn: Güngören Bilim ve Sanat Merkezi"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">İl</label>
              <input
                type="text"
                required
                value={formData.province}
                onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold uppercase"
                placeholder="İSTANBUL"
              />
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">İlçe</label>
              <input
                type="text"
                required
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold uppercase"
                placeholder="GÜNGÖREN"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">MEB Kurum Kodu</label>
              <input
                type="text"
                value={formData.institutionCode}
                onChange={(e) => setFormData({ ...formData, institutionCode: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-mono"
                placeholder="768912"
              />
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">DYS Birim / Kod Şablonu</label>
              <input
                type="text"
                value={formData.dysCode}
                onChange={(e) => setFormData({ ...formData, dysCode: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-mono"
                placeholder="E-62846872-903.02.01"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] block mb-3">
              İmza Yetkilileri Bilgileri
            </span>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Müdür Adı Soyadı</label>
                <input
                  type="text"
                  required
                  value={formData.principalName}
                  onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Müdür Unvanı</label>
                <input
                  type="text"
                  value={formData.principalTitle}
                  onChange={(e) => setFormData({ ...formData, principalTitle: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                  placeholder="Merkez Müdürü / Okul Müdürü"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Müdür Yardımcısı Adı Soyadı</label>
                <input
                  type="text"
                  value={formData.vicePrincipalName}
                  onChange={(e) => setFormData({ ...formData, vicePrincipalName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Müdür Yrd. Unvanı</label>
                <input
                  type="text"
                  value={formData.vicePrincipalTitle}
                  onChange={(e) => setFormData({ ...formData, vicePrincipalTitle: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] block mb-3">
              İletişim Bilgileri
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Telefon</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">E-Posta (k12.tr)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              İptal
            </button>
            <button
              type="submit"
              className="px-5 py-2 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm flex items-center space-x-1.5"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Kaydedildi!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Bilgileri Kaydet</span>
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
