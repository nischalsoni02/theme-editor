import { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { ThemeSettings, NavigationLink, FooterLink } from '../types/theme';

interface SettingsPanelProps {
  settings: ThemeSettings;
  onUpdate: (settings: ThemeSettings) => void;
  onClose: () => void;
}

export default function SettingsPanel({ settings, onUpdate, onClose }: SettingsPanelProps) {
  const [activeSection, setActiveSection] = useState<string>('header');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: string, value: string): boolean => {
    if (!value || value.trim() === '') {
      setErrors(prev => ({ ...prev, [field]: 'This field cannot be empty' }));
      return false;
    }
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
    return true;
  };

  const updateHeader = (field: string, value: any) => {
    const newSettings = {
      ...settings,
      header: { ...settings.header, [field]: value }
    };
    onUpdate(newSettings);
  };

  const updateHero = (field: string, value: any) => {
    if (field === 'title' && !validateField('hero_title', value)) {
      return;
    }
    const newSettings = {
      ...settings,
      hero: { ...settings.hero, [field]: value }
    };
    onUpdate(newSettings);
  };

  const updateHeroButton = (field: string, value: string) => {
    const newSettings = {
      ...settings,
      hero: {
        ...settings.hero,
        action_button: { ...settings.hero.action_button, [field]: value }
      }
    };
    onUpdate(newSettings);
  };

  const updateProducts = (field: string, value: any) => {
    if (field === 'headline' && !validateField('products_headline', value)) {
      return;
    }
    const newSettings = {
      ...settings,
      products: { ...settings.products, [field]: value }
    };
    onUpdate(newSettings);
  };

  const addNavLink = () => {
    const newLink: NavigationLink = {
      id: `nav${Date.now()}`,
      text: 'New Link',
      url: '#'
    };
    updateHeader('navigation_links', [...settings.header.navigation_links, newLink]);
  };

  const updateNavLink = (id: string, field: string, value: string) => {
    const updatedLinks = settings.header.navigation_links.map(link =>
      link.id === id ? { ...link, [field]: value } : link
    );
    updateHeader('navigation_links', updatedLinks);
  };

  const removeNavLink = (id: string) => {
    const updatedLinks = settings.header.navigation_links.filter(link => link.id !== id);
    updateHeader('navigation_links', updatedLinks);
  };

  const addFooterLink = () => {
    const newLink: FooterLink = {
      id: `foot${Date.now()}`,
      text: 'New Link',
      url: '#'
    };
    const updatedLinks = [...settings.footer.links, newLink];
    onUpdate({ ...settings, footer: { ...settings.footer, links: updatedLinks } });
  };

  const updateFooterLink = (id: string, field: string, value: string) => {
    const updatedLinks = settings.footer.links.map(link =>
      link.id === id ? { ...link, [field]: value } : link
    );
    onUpdate({ ...settings, footer: { ...settings.footer, links: updatedLinks } });
  };

  const removeFooterLink = (id: string) => {
    const updatedLinks = settings.footer.links.filter(link => link.id !== id);
    onUpdate({ ...settings, footer: { ...settings.footer, links: updatedLinks } });
  };

  return (
    <div className="w-96 bg-white border-l border-gray-200 h-full overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Theme Settings</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="flex border-b border-gray-200">
        {['header', 'hero', 'products', 'footer'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`flex-1 py-3 px-4 text-sm font-medium capitalize ${
              activeSection === section
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {activeSection === 'header' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Mode
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={settings.header.display_mode === 'logo'}
                    onChange={() => updateHeader('display_mode', 'logo')}
                    className="mr-2"
                  />
                  <span className="text-sm">Logo</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={settings.header.display_mode === 'text'}
                    onChange={() => updateHeader('display_mode', 'text')}
                    className="mr-2"
                  />
                  <span className="text-sm">Site Name</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo URL
              </label>
              <input
                type="text"
                value={settings.header.logo_url}
                onChange={(e) => updateHeader('logo_url', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/logo.png"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site Name
              </label>
              <input
                type="text"
                value={settings.header.site_name}
                onChange={(e) => updateHeader('site_name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Navigation Links
                </label>
                <button
                  onClick={addNavLink}
                  className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-3">
                {settings.header.navigation_links.map((link) => (
                  <div key={link.id} className="p-3 border border-gray-200 rounded-md space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Link</span>
                      <button
                        onClick={() => removeNavLink(link.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={link.text}
                      onChange={(e) => updateNavLink(link.id, 'text', e.target.value)}
                      placeholder="Link Text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => updateNavLink(link.id, 'url', e.target.value)}
                      placeholder="URL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'hero' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Image URL
              </label>
              <input
                type="text"
                value={settings.hero.image_url}
                onChange={(e) => updateHero('image_url', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/hero.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={settings.hero.title}
                onChange={(e) => updateHero('title', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.hero_title ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.hero_title && (
                <p className="mt-1 text-sm text-red-600">{errors.hero_title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Text
              </label>
              <input
                type="text"
                value={settings.hero.action_button.text}
                onChange={(e) => updateHeroButton('text', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button URL
              </label>
              <input
                type="text"
                value={settings.hero.action_button.url}
                onChange={(e) => updateHeroButton('url', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {activeSection === 'products' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Headline
              </label>
              <input
                type="text"
                value={settings.products.headline}
                onChange={(e) => updateProducts('headline', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.products_headline ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.products_headline && (
                <p className="mt-1 text-sm text-red-600">{errors.products_headline}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Products: {settings.products.item_count}
              </label>
              <input
                type="range"
                min="1"
                max="6"
                value={settings.products.item_count}
                onChange={(e) => updateProducts('item_count', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>6</span>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'footer' && (
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Footer Links
                </label>
                <button
                  onClick={addFooterLink}
                  className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-3">
                {settings.footer.links.map((link) => (
                  <div key={link.id} className="p-3 border border-gray-200 rounded-md space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Link</span>
                      <button
                        onClick={() => removeFooterLink(link.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={link.text}
                      onChange={(e) => updateFooterLink(link.id, 'text', e.target.value)}
                      placeholder="Link Text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => updateFooterLink(link.id, 'url', e.target.value)}
                      placeholder="URL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
