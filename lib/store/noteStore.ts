import { create } from 'zustand';
import { NewNote } from '@/lib/api';
import { persist } from 'zustand/middleware';

interface NoteDraftStore {
  draft: NewNote | null;
  setDraft: (note: NewNote) => void;
  clearDraft: () => void;
}

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    set => ({
      draft: null,
      setDraft: note => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: null })),
    }),
    { name: 'note-draft' }
  )
);
