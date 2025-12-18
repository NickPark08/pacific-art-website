import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import objectDetails from '@/lib/objectData';

type ObjectId = keyof typeof objectDetails;

export default function ObjectDetailPage({ params }: { params: { id: string } }) {
  // Look up the object by id and return 404 if not found
  const object = objectDetails[params.id as ObjectId];
  if (!object) {
    notFound();
  }

  // Get related objects from the first theme if it exists
  const relatedObjects = object.themes.length > 0 
    ? Object.values(objectDetails).filter(
        obj => obj.id !== object.id && 
        obj.themes.some(theme => object.themes.some(t => t.id === theme.id))
      ).slice(0, 3) // Limit to 3 related objects
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">{object.title}</h1>
            <div className="text-gray-500">{object.date}</div>
          </div>
          <div className="mt-1 text-lg text-gray-600">{object.culture}</div>
          {object.images && object.images.length > 0 && (
            <div className="mt-6">
              <div className="w-full rounded overflow-hidden shadow-sm">
                <Image
                  src={object.images[0]}
                  alt={object.title}
                  width={1200}
                  height={600}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          )}
          
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
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/objects" className="ml-2 text-gray-500 hover:text-gray-700">
                    Objects
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-700 font-medium" aria-current="page">
                    {object.title}
                  </span>
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

              {relatedObjects.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Objects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedObjects.map((relatedObject) => (
                      <div key={relatedObject.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        {relatedObject.images && relatedObject.images.length > 0 ? (
                          <Image
                            src={relatedObject.images[0]}
                            alt={relatedObject.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                          />
                        ) : (
                          <div className="bg-gray-100 h-48 flex items-center justify-center">
                            <span className="text-gray-400">No image available</span>
                          </div>
                        )}
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            <Link href={`/objects/${relatedObject.id}`} className="hover:text-blue-600">
                              {relatedObject.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-600">{relatedObject.culture} • {relatedObject.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
