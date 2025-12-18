"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import objectDetails, { objects, themeDetails } from '@/lib/objectData';

export default function ThemeDetailClient() {
  const [themeId, setThemeId] = useState<string | null>(null);

  useEffect(() => {
    const pathname = window.location.pathname; // e.g. /themes/1
    const parts = pathname.split('/').filter(Boolean);
    const id = parts.length >= 2 ? parts[1] : null;
    setThemeId(id);
  }, []);

  if (!themeId) {
    return <div className="p-6">Theme not specified.</div>;
  }

  const theme = (themeDetails as any)[themeId];
  if (!theme) {
    return <div className="p-6">Theme not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{theme.title}</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Theme</h2>
                <p className="text-gray-700 mb-4">{theme.overview}</p>
                {theme.context && (
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Context & Significance</h3>
                    <p className="text-gray-700">{theme.context}</p>
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Objects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {theme.featuredIds?.map((id: string) => {
                    const object = (objectDetails as any)[id];
                    if (!object) return null;
                    return (
                      <div key={object.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-gray-100 overflow-hidden">
                          {object.images && object.images.length > 0 ? (
                            <img
                              src={object.images[0]}
                              alt={object.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-gray-400">No image available</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            <Link href={`/objects/${object.id}`} className="hover:text-blue-600">
                              {object.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">{object.culture} • {object.date}</p>
                          <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Materials:</span> {object.materials}</p>
                          <p className="text-sm text-gray-700">{object.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/themes"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Back to All Themes
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
