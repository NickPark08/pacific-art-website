import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              The Pacific in Six Objects
            </h3>
            <p className="mt-4 text-base text-gray-500">
              Exploring Pacific art and culture through six significant objects.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/themes" className="text-base text-gray-500 hover:text-gray-900">Themes</Link></li>
              <li><Link href="/objects" className="text-base text-gray-500 hover:text-gray-900">Objects</Link></li>
              <li><Link href="/map" className="text-base text-gray-500 hover:text-gray-900">Map</Link></li>
              <li><Link href="/sources" className="text-base text-gray-500 hover:text-gray-900">Sources</Link></li>
              <li><Link href="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms of Use</Link></li>
              <li><Link href="/accessibility" className="text-base text-gray-500 hover:text-gray-900">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} The Pacific in Six Objects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
