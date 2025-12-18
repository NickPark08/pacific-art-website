import Link from 'next/link';
import { notFound } from 'next/navigation';
import objectDetails, { objects, themeDetails } from '@/lib/objectData';
import ThemeDetailClient from './ThemeDetailClient';

type ThemeId = '1' | '2' | '3' | '4';

// Theme metadata is now centralized in `src/lib/objectData.ts` and imported as `themeDetails`.

// This is the main component for the theme detail page
export default function ThemeDetailPage({ params }: { params?: { id?: string } }) {
  // If server params are missing (dev router quirk), render a client fallback
  if (!params || !params.id) {
    return <ThemeDetailClient />;
  }

  // Check if the ID is a valid theme ID
  if (!(params.id in themeDetails)) {
    notFound();
  }
  const theme = themeDetails[params.id as ThemeId];

  if (!theme) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{theme.title}</h1>
          
              {/* Breadcrumb */}
          <nav className="mt-4 flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <div className="flex items-center">
                  <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/themes" className="ml-2 text-gray-500 hover:text-gray-700">
                    Themes
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700 font-medium">{theme.title}</span>
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
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Theme</h2>
                <p className="text-gray-700 mb-4">{(theme as any).overview}</p>
                {(theme as any).context && (
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Context & Significance</h3>
                    <p className="text-gray-700">{(theme as any).context}</p>
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Objects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(theme as any).featuredIds ? (
                    (theme as any).featuredIds.map((id: string) => {
                      const object = (objectDetails as any)[id];
                      if (!object) return null;
                      return (
                        <div key={object.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 h-48 flex items-center justify-center">
                            <span className="text-gray-400">Image Placeholder</span>
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
                    })
                  ) : (
                    objects
                      .filter((o) => o.themes?.some((t) => t.id === theme.id))
                      .map((object) => (
                        <div key={object.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 h-48 flex items-center justify-center">
                            <span className="text-gray-400">Image Placeholder</span>
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
                      ))
                  )}
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
