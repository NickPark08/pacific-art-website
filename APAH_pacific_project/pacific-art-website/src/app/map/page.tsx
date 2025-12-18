import Link from 'next/link';
import objectDetails, { objects } from '@/lib/objectData';
import InteractiveMap from './InteractiveMap';

export default function MapPage() {
  // Build locations from `objects` that include a `coords` field for the list view
  const listLocations = objects
    .filter((o) => (o as any).coords)
    .map((o) => ({
      id: o.id,
      title: o.title,
      culture: o.culture,
      icon: (o as any).icon || '📍', // Use the object's icon or fallback to a pin
    }));

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Explore the Pacific
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-500">
            Interactive map of object locations. Click a marker to view its object page.
          </p>
        </div>

        <div className="mb-8">
          <InteractiveMap />
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Objects by Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listLocations.map((location) => (
              <Link
                key={location.id}
                href={`/objects/${location.id}`}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow flex items-center"
              >
                <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-xl mr-3">
                  {location.icon}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">{location.title}</h3>
                  <p className="text-sm text-gray-500">{location.culture}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/objects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Objects
          </Link>
        </div>
      </div>
    </div>
  );
}
