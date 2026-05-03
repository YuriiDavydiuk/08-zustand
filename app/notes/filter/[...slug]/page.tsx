import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';

import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';

interface NotesFilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: NotesFilterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0];

  return {
    title: `Notes filtered by: ${tag}`,
    description: `Browse notes tagged with "${tag}"`,
    openGraph: {
      title: `Notes filtered by: ${tag}`,
      description: `Browse notes tagged with "${tag}"`,
      url: `https://08-zustand-ten-green.vercel.app/notes/filter/${tag}`,
      images: [
        {
          url: `https://08-zustand-ten-green.vercel.app/notehub-og-meta.jpg`,
          width: 1200,
          height: 630,
          alt: `Notes tagged with ${tag}`,
        },
      ],
    },
  };
}

export default async function NotesPage({ params }: NotesFilterPageProps) {
  const queryClient = new QueryClient();

  const { slug } = await params;
  const tag = slug[0];

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => getNotes(1, '', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
