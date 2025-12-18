import Link from 'next/link';
import { objects } from '@/lib/objectData';

export default function ObjectsPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Objects
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Explore our collection of Pacific art and cultural objects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {objects.map((object) => (
            <div 
              key={object.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0 h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                {object.images && object.images.length > 0 ? (
                  // Use a regular img tag for simplicity in the demo; replace with `next/image` for optimization
                  <img
                    src={object.images[0]}
                    alt={object.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <span className="text-gray-500">No image available</span>
                )}
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center">
                    <Link 
                      href={`/themes/${object.themeId}`}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-2"
                    >
                      {object.theme}
                    </Link>
                  </div>
                  <Link href={`/objects/${object.id}`} className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                      {object.title}
                    </h3>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    {object.culture} • {object.date}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{object.material}</p>

                  {object.overview && (
                    <p className="mt-3 text-sm text-gray-600">{object.overview}</p>
                  )}

                  <div className="mt-3">
                    {object.themes?.map((t) => (
                      <Link
                        key={t.id}
                        href={`/themes/${t.id}`}
                        className="inline-block mr-2 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/objects/${object.id}`}
                    className="text-base font-medium text-blue-600 hover:text-blue-500"
                  >
                    View details<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
