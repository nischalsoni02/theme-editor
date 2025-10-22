import { FooterSettings } from '../types/theme';

interface FooterProps {
  settings: FooterSettings;
  isPreviewMode: boolean;
}

export default function Footer({ settings, isPreviewMode }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isPreviewMode) {
      e.preventDefault();
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            {settings.links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={handleLinkClick}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>
        
        </div>
      </div>
    </footer>
  );
}
