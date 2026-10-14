import { InstitutionProfile } from '../types';
import { DEFAULT_PROFILE } from '../data/initialProfile';

const PROFILE_KEY = 'meb_idari_profile';
const COMPLETED_TASKS_KEY = 'meb_idari_completed_tasks';
const SAVED_DOCS_KEY = 'meb_idari_saved_documents';

export const getStoredProfile = (): InstitutionProfile => {
  try {
    const data = localStorage.getItem(PROFILE_KEY);
    if (data) {
      return { ...DEFAULT_PROFILE, ...JSON.parse(data) };
    }
  } catch (e) {
    console.error('Failed to load profile from storage', e);
  }
  return DEFAULT_PROFILE;
};

export const saveStoredProfile = (profile: InstitutionProfile): void => {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile to storage', e);
  }
};

export const getCompletedTasks = (): string[] => {
  try {
    const data = localStorage.getItem(COMPLETED_TASKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const toggleTaskCompleted = (taskId: string): string[] => {
  const current = getCompletedTasks();
  let updated: string[];
  if (current.includes(taskId)) {
    updated = current.filter(id => id !== taskId);
  } else {
    updated = [...current, taskId];
  }
  try {
    localStorage.setItem(COMPLETED_TASKS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save tasks', e);
  }
  return updated;
};

export interface SavedDocument {
  id: string;
  title: string;
  subject: string;
  date: string;
  body: string;
  templateId?: string;
  timestamp: number;
}

export const getSavedDocuments = (): SavedDocument[] => {
  try {
    const data = localStorage.getItem(SAVED_DOCS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const saveDocumentDraft = (doc: Omit<SavedDocument, 'timestamp'>): void => {
  try {
    const current = getSavedDocuments().filter(d => d.id !== doc.id);
    const updated = [{ ...doc, timestamp: Date.now() }, ...current].slice(0, 30);
    localStorage.setItem(SAVED_DOCS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save document draft', e);
  }
};

export const deleteSavedDocument = (id: string): void => {
  try {
    const current = getSavedDocuments().filter(d => d.id !== id);
    localStorage.setItem(SAVED_DOCS_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to delete saved document', e);
  }
};
