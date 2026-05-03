'use client';
import { useRouter } from 'next/navigation';
import ModalCreate from '@/components/ModalCreate/ModalCreate';
import NoteForm from '@/components/NoteForm/NoteForm';

export default function Page() {
  const router = useRouter();
  return (
    <ModalCreate onClose={() => router.back()}>
      <NoteForm />
    </ModalCreate>
  );
}
