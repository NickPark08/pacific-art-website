import Link from 'next/link';
import Image from 'next/image';

// Mock data for themes
const themes = [
  { id: '1', title: 'Ceremonial Objects', image: '/images/ceremonial.jpg' },
  { id: '2', title: 'Navigation & Seafaring', image: '/images/navigation.jpg' },
  { id: '3', title: 'Textiles & Weaving', image: '/images/textiles.jpg' },
  { id: '4', title: 'Sculpture & Carving', image: '/images/sculpture.jpg' },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Pacific in Six Objects
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Explore the rich cultural heritage of the Pacific through six significant objects that tell the story of this diverse region.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/themes" 
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Explore Themes
            </Link>
            <Link 
              href="/objects" 
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
            >
              View Objects
            </Link>
          </div>
        </div>
      </div>

      {/* Themes Preview Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore by Theme
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Discover Pacific art and culture through different thematic lenses.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {themes.map((theme) => (
              <Link 
                key={theme.id} 
                href={`/themes/${theme.id}`}
                className="group relative block bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <div className="w-full h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={theme.image} 
                      alt={`${theme.title} theme`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {theme.title}
                  </h3>
                  <div className="mt-2 flex items-center text-sm text-blue-600">
                    <span>View theme</span>
                    <svg 
                      className="ml-1 h-4 w-4" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/themes" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Themes
              <svg 
                className="ml-2 -mr-1 h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to explore?</span>
            <span className="block text-blue-600">Start your journey through Pacific art and culture today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0
          ">
            <div className="inline-flex rounded-md shadow">
              <Link 
                href="/objects" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                View All Objects
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link 
                href="/map" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Explore on Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
