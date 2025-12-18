import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About This Project
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
            Exploring the rich cultural heritage of the Pacific through six significant objects.
          </p>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="prose max-w-4xl mx-auto">
            <h2>Our Mission</h2>
            <p>
              "The Pacific in Six Objects" is an educational initiative that seeks to showcase the 
              diverse and vibrant cultures of the Pacific region through the lens of six carefully 
              selected objects. Each object tells a unique story about the people who created it, 
              their way of life, and their connection to the natural and spiritual worlds.
            </p>
            
            <h2>Why These Objects?</h2>
            <p>
              The six objects featured in this collection were chosen for their cultural significance, 
              artistic merit, and ability to represent different aspects of Pacific life. From 
              ceremonial masks to navigational tools, each piece offers a window into the rich 
              traditions and innovations of Pacific Island cultures.
            </p>

            <h2>Educational Goals</h2>
            <ul>
              <li>Promote understanding and appreciation of Pacific cultures</li>
              <li>Highlight the artistic and technical achievements of Pacific Island peoples</li>
              <li>Explore the connections between different Pacific cultures</li>
              <li>Provide educational resources for students and educators</li>
              <li>Encourage further exploration of Pacific art and culture</li>
            </ul>

            <h2>How to Use This Site</h2>
            <p>
              You can explore the collection in several ways:
            </p>
            <ul>
              <li>Browse by <Link href="/themes" className="text-blue-600 hover:underline">thematic categories</Link></li>
              <li>View all <Link href="/objects" className="text-blue-600 hover:underline">objects</Link> in the collection</li>
              <li>Explore objects by location on our <Link href="/map" className="text-blue-600 hover:underline">interactive map</Link></li>
            </ul>

            <h2>Credits</h2>
            <p>
              This project was developed as an educational resource by a team of researchers, 
              educators, and designers committed to promoting understanding of Pacific cultures. 
              We are grateful to the cultural institutions and community members who have 
              contributed their knowledge and expertise to this project.
            </p>

            <h2>Contact Us</h2>
            <p>
              For more information about this project or to provide feedback, please contact us at 
              <a href="mailto:info@pacificobjects.org" className="text-blue-600 hover:underline">info@pacificobjects.org</a>.
            </p>
          </div>
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