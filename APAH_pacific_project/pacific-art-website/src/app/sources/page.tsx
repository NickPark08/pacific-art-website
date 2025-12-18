import Link from 'next/link';

export default function SourcesPage() {
  const sources = {
    articles: [
      {
        id: 1,
        title: 'Navigating the Pacific: The Art of Wayfinding',
        author: 'David Lewis',
        journal: 'The Journal of Pacific History',
        year: '1970',
        volume: '5',
        pages: '7-26'
          ,
          usage: 'Used for context on traditional navigation techniques; informed map marker placement and descriptive text for navigation-related objects.'
      },
      {
        id: 2,
        title: 'The Social Context of Tapa Cloth in Polynesia',
        author: 'Adrienne L. Kaeppler',
        journal: 'The Journal of the Polynesian Society',
        year: '1999',
        volume: '108',
        pages: '147-190'
          ,
          usage: 'Informed descriptions and cultural context for tapa/hiapo objects and theme interpretation on the site.'
      }
    ],
    collections: [
      {
        id: 1,
        name: 'Museum of New Zealand Te Papa Tongarewa',
        location: 'Wellington, New Zealand',
        url: 'https://www.tepapa.govt.nz/'
          ,
          usage: 'Referenced for object provenance and image credits for select items; used to cross-check object metadata.'
      },
      {
        id: 2,
        name: 'Bishop Museum',
        location: 'Honolulu, Hawaii',
        url: 'https://www.bishopmuseum.org/'
          ,
          usage: 'Consulted for navigation charts and ethnographic imagery that informed the map popup visuals.'
      },
      {
        id: 3,
        name: 'Australian Museum',
        location: 'Sydney, Australia',
        url: 'https://australian.museum/'
          ,
          usage: 'Used to verify classification and cultural attributions for objects from the region.'
      }
    ],
    images: [
      {
        id: 1,
        title: 'Ceremonial Mask',
        source: 'Museum of New Zealand Te Papa Tongarewa',
        license: 'CC BY-NC-ND 4.0'
      },
      {
        id: 2,
        title: 'Navigation Chart',
        source: 'Bishop Museum Collection',
        license: 'Used with permission'
      }
    ]
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Sources & References
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            A comprehensive list of resources and references used in this project.
          </p>
        </div>

        <div className="space-y-16">
          {/* Books section removed */}

          {/* Academic Articles */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Academic Articles
            </h2>
            <ul className="space-y-6">
              {sources.articles.map((article) => (
                <li key={article.id} className="pl-4 border-l-4 border-green-200">
                  <p className="font-medium text-gray-900">{article.title}</p>
                  <p className="text-gray-600">{article.author}</p>
                  <p className="text-sm text-gray-600">
                    {article.journal}, {article.year}, Vol. {article.volume}, pp. {article.pages}
                  </p>
                  {article.usage && (
                    <p className="text-sm text-gray-700 mt-2">{article.usage}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
            

          {/* Museum Collections */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Museum Collections
            </h2>
            <ul className="space-y-4">
              {sources.collections.map((collection) => (
                <li key={collection.id} className="pl-4 border-l-4 border-purple-200">
                  <a 
                    href={collection.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {collection.name}
                  </a>
                  <p className="text-sm text-gray-600">{collection.location}</p>
                  {collection.usage && (
                    <p className="text-sm text-gray-700 mt-2">{collection.usage}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Usage */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              AI Usage
            </h2>
            <div className="pl-4 border-l-4 border-blue-200">
              <p className="text-gray-700 mb-4">
                This project utilized AI assistance in the following ways:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Content suggestions and editing for object descriptions and metadata</li>
                <li>UI/UX recommendations for improved user experience</li>
                <li>Debugging and optimization of website functionality</li>
                <li>Sources of articles and museums used for research and content</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                While AI tools were used in the development process, all final content has been reviewed and verified for accuracy by the project team.
              </p>
            </div>
          </div>

          {/* Image Credits */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Image Credits
            </h2>
            <div className="pl-4 border-l-4 border-yellow-200">
              <p className="text-gray-700">All images used from <a href="https://smarthistory.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Smarthistory</a></p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Additional Resources</h3>
          <p className="text-gray-600 mb-4">
            For further reading and research, we recommend the following resources:
          </p>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.metmuseum.org/toah/ht/10/oc.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                The Metropolitan Museum of Art - Oceania, 1900 A.D.–present
              </a>
            </li>
            <li>
              <a 
                href="https://www.britishmuseum.org/collection/galleries/living-and-dying" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                The British Museum - Living and Dying Gallery
              </a>
            </li>
            <li>
              <a 
                href="https://www.si.edu/spotlight/oceanic-cultural-heritage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Smithsonian Institution - Oceanic Cultural Heritage
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
