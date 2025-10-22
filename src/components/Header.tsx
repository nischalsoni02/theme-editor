import { Search } from 'lucide-react';
import { HeaderSettings } from '../types/theme';

interface HeaderProps {
  settings: HeaderSettings;
  isPreviewMode: boolean;
  onInlineEdit?: (field: string, value: string) => void;
}

export default function Header({ settings, isPreviewMode }: HeaderProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isPreviewMode) {
      e.preventDefault();
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {settings.display_mode === 'logo' ? (
              <img
                src={settings.logo_url}
                alt={settings.site_name}
                className="h-12 w-auto object-contain"
              />
            ) : (
              <h1 className="text-2xl font-bold text-gray-900">
                {settings.site_name}
              </h1>
            )}
          </div>

          <nav className="hidden md:flex space-x-8">
            {settings.navigation_links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={handleNavClick}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <Search className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
