import { Metadata } from 'next';
import css from './CreateNote.module.css';
import NoteForm from '@/components/NoteForm/NoteForm';

export const metadata: Metadata = {
  title: 'Create Note - NoteHub',
  description:
    'Create a new note in NoteHub. Add a title, content and tag to organize your thoughts.',
  openGraph: {
    title: 'Create Note - NoteHub',
    description:
      'Create a new note in NoteHub. Add a title, content and tag to organize your thoughts.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/notes/action/create`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/notehub-og-meta.jpg`,
        width: 1200,
        height: 630,
        alt: 'Create Note - NoteHub',
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
