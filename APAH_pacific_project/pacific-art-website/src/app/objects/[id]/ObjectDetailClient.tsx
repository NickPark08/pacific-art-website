'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import objectDetails from '@/lib/objectData';

export default function ObjectDetailClient({ id }: { id: string }) {
  const [objectId, setObjectId] = useState<string | null>(id ?? null);

  useEffect(() => {
    // If server didn't provide an id (params was empty), derive it from the URL on the client.
    if (!objectId) {
      const path = typeof window !== 'undefined' ? window.location.pathname : '';
      const parts = path.split('/').filter(Boolean);
      const last = parts[parts.length - 1];
      setObjectId(last ?? null);
    }
  }, [objectId]);

  if (!objectId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading artwork details...</div>
      </div>
    );
  }

  const object = (objectDetails as any)[objectId];

  if (!object) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Object not found</h2>
          <p className="mb-2">Requested id: <strong>{objectId}</strong></p>
          <p className="text-sm text-gray-600">This object does not exist in the demo dataset.</p>
          <div className="mt-4">
            <Link href="/objects" className="text-blue-600 hover:underline">Back to objects</Link>
          </div>
        </div>
      </div>
    );
  }

  // Render a client-side detail view mirroring the server component's structure
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">{object.title}</h1>
            <div className="text-gray-500">{object.date}</div>
          </div>
          <div className="mt-1 text-lg text-gray-600">{object.culture}</div>
          <nav className="mt-4 flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <div className="flex items-center">
                  <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/objects" className="ml-2 text-gray-500 hover:text-gray-700">Objects</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-700 font-medium" aria-current="page">{object.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              {/* Image */}
              {object.images && object.images.length > 0 && (
                <div className="mb-8">
                  <img
                    src={object.images[0]}
                    alt={object.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Artist */}
              {object.artist && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Artist</h2>
                  <p className="text-gray-700">{object.artist}</p>
                </div>
              )}

              {/* Period/Style */}
              {object.periodStyle && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Period/Style</h2>
                  <p className="text-gray-700">{object.periodStyle}</p>
                </div>
              )}

              {/* Date */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Date</h2>
                <p className="text-gray-700">{object.date}</p>
              </div>

              {/* Patron */}
              {object.patron && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Patron</h2>
                  <p className="text-gray-700">{object.patron}</p>
                </div>
              )}

              {/* Original Location */}
              {object.originalLocation && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Original Location</h2>
                  <p className="text-gray-700">{object.originalLocation}</p>
                </div>
              )}

              {/* Material */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Material</h2>
                <p className="text-gray-700">{object.material}</p>
              </div>

              {/* Technique / Visual Description / Style */}
              {(object.technique || object.visualDescription) && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Technique / Visual Description / Style</h2>
                  {object.technique && <p className="text-gray-700 mb-2">{object.technique}</p>}
                  {object.visualDescription && <p className="text-gray-700">{object.visualDescription}</p>}
                </div>
              )}

              {/* Subject */}
              {object.subject && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Subject</h2>
                  <p className="text-gray-700">{object.subject}</p>
                </div>
              )}

              {/* Historical Context */}
              {object.historicalContext && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Historical Context</h2>
                  <p className="text-gray-700">{object.historicalContext}</p>
                </div>
              )}

              {/* Message / Meaning / Full Analysis */}
              {object.analysis && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Message / Meaning / Full Analysis</h2>
                  <p className="text-gray-700">{object.analysis}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
