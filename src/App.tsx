import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { DocumentGeneratorView } from './components/DocumentGeneratorView';
import { TemplatesCatalogView } from './components/TemplatesCatalogView';
import { DecimalSearchView } from './components/DecimalSearchView';
import { CalendarView } from './components/CalendarView';
import { TripWizardView } from './components/TripWizardView';
import { BilsemSpecialView } from './components/BilsemSpecialView';
import { LegislationView } from './components/LegislationView';
import { AIAssistantView } from './components/AIAssistantView';
import { SavedDraftsView } from './components/SavedDraftsView';
import { SettingsModal } from './components/SettingsModal';
import { InstitutionProfile, CategoryType } from './types';
import {
  getStoredProfile,
  saveStoredProfile,
  getCompletedTasks,
  toggleTaskCompleted,
  SavedDocument
} from './utils/storage';

export function App() {
  const [profile, setProfile] = useState<InstitutionProfile>(getStoredProfile());
  const [activeView, setActiveView] = useState<string>('dashboard');
  const [initialTemplateId, setInitialTemplateId] = useState<string | null>(null);
  const [completedTasks, setCompletedTasks] = useState<string[]>(getCompletedTasks());
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Global Keyboard Shortcuts (F2 -> Decimal Search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F2') {
        e.preventDefault();
        setActiveView('decimal_search');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSaveProfile = (newProfile: InstitutionProfile) => {
    saveStoredProfile(newProfile);
    setProfile(newProfile);
  };

  const handleToggleTask = (taskId: string) => {
    const updated = toggleTaskCompleted(taskId);
    setCompletedTasks(updated);
  };

  const handleSelectTemplateForEdit = (templateId: string) => {
    setInitialTemplateId(templateId);
    setActiveView('generator');
  };

  const handleStartDocumentWithCode = (code: string, name: string) => {
    setInitialTemplateId(null);
    setActiveView('generator');
  };

  const handleTransferFromAI = (subject: string, addressee: string, body: string) => {
    setInitialTemplateId(null);
    setActiveView('generator');
  };

  const handleLoadDraft = (draft: SavedDocument) => {
    setInitialTemplateId(draft.templateId || null);
    setActiveView('generator');
  };

  // Resolve template category filter if activeView starts with 'templates_'
  let templateCategoryFilter: CategoryType | null = null;
  if (activeView.startsWith('templates_')) {
    templateCategoryFilter = activeView.replace('templates_', '') as CategoryType;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar
        profile={profile}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenDecimalSearch={() => setActiveView('decimal_search')}
        onNewDocument={() => {
          setInitialTemplateId(null);
          setActiveView('generator');
        }}
        activeView={activeView}
        setActiveView={setActiveView}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Desktop & Mobile Sidebar */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Sidebar
            activeView={activeView}
            setActiveView={(view) => {
              setActiveView(view);
              setMobileMenuOpen(false);
            }}
            closeMobileMenu={() => setMobileMenuOpen(false)}
          />
        </div>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {activeView === 'dashboard' && (
            <DashboardView
              profile={profile}
              setActiveView={setActiveView}
              onSelectTemplate={handleSelectTemplateForEdit}
              completedTasks={completedTasks}
              onToggleTask={handleToggleTask}
            />
          )}

          {(activeView === 'templates' || activeView.startsWith('templates_')) && (
            <TemplatesCatalogView
              profile={profile}
              initialCategory={templateCategoryFilter}
              onSelectTemplateForEdit={handleSelectTemplateForEdit}
            />
          )}

          {activeView === 'generator' && (
            <DocumentGeneratorView
              profile={profile}
              initialTemplateId={initialTemplateId}
              onClearInitialTemplate={() => setInitialTemplateId(null)}
            />
          )}

          {activeView === 'trip_wizard' && (
            <TripWizardView profile={profile} />
          )}

          {activeView === 'decimal_search' && (
            <DecimalSearchView
              onStartDocumentWithCode={handleStartDocumentWithCode}
            />
          )}

          {activeView === 'calendar' && (
            <CalendarView
              completedTasks={completedTasks}
              onToggleTask={handleToggleTask}
            />
          )}

          {activeView === 'bilsem_special' && (
            <BilsemSpecialView
              profile={profile}
              onSelectTemplateForEdit={handleSelectTemplateForEdit}
            />
          )}

          {activeView === 'legislation' && (
            <LegislationView />
          )}

          {activeView === 'ai_assistant' && (
            <AIAssistantView
              profile={profile}
              onTransferToGenerator={handleTransferFromAI}
            />
          )}

          {activeView === 'saved_drafts' && (
            <SavedDraftsView onLoadDraft={handleLoadDraft} />
          )}
        </main>
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />

    </div>
  );
}

export default App;
