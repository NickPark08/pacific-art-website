import { notFound } from 'next/navigation';
import ObjectDetailPage from './ObjectDetailPage';
import ObjectDetailClient from './ObjectDetailClient';
import objectDetails from '@/lib/objectData';

// Render server-side detail when `params.id` is present and valid.
// If `params.id` is missing (it was arriving undefined in some dev envs),
// fall back to the client component which derives the id from the URL.
export default function Page({ params }: { params: { id?: string } }) {
  const id = params?.id;

  if (!id) {
    // Server didn't receive the param for this request — use client fallback.
    return <ObjectDetailClient id={String(id ?? '')} />;
  }

  if (!(id in objectDetails)) {
    notFound();
  }

  return <ObjectDetailPage params={{ id }} />;
}