import Link from 'next/link';

// Mock data for themes
const themes = [
  {
    id: '1',
    title: 'Ceremonial Objects',
    description: 'Explore objects used in rituals, sacred performances, and community exchanges that carry ancestral significance.',
    image: '/images/ceremonial.jpg'
  },
  {
    id: '2',
    title: 'Navigation & Seafaring',
    description: 'Discover the deep ecological knowledge of stars, waves, and currents that enabled Pacific navigation.',
    image: '/images/navigation.jpg'
  },
  {
    id: '3',
    title: 'Textiles & Weaving',
    description: 'Experience how textiles communicate identity, gender roles, diplomacy, and status across Pacific cultures.',
    image: '/images/textiles.jpg'
  },
  {
    id: '4',
    title: 'Sculpting & Carving',
    description: 'Discover the rich tradition of Pacific carving in wood, stone, and other materials that embody ancestors and cultural narratives.',
    image: '/images/sculpture.jpg'
  },
];

export default function ThemesPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Themes
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Explore Pacific art and culture through these thematic lenses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {themes.map((theme) => (
            <div 
              key={theme.id} 
              className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-1 bg-white p-6 flex flex-col">
                <div className="flex-1">
                  <div className="h-48 bg-gray-200 mb-4 overflow-hidden">
                    <img 
                      src={theme.image} 
                      alt={`${theme.title} theme`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {theme.title}
                  </h2>
                  <p className="mt-3 text-base text-gray-500">
                    {theme.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/themes/${theme.id}`}
                    className="text-2xl font-bold text-gray-900 hover:text-blue-600"
                  >
                    Explore theme<span aria-hidden="true"> &rarr;</span>
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
