import { useState } from 'react';
import { Settings, Eye, Save } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import SettingsPanel from './components/SettingsPanel';
import { ThemeConfig, ThemeSettings } from './types/theme';
import { defaultThemeConfig } from './data/defaultTheme';

function App() {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(defaultThemeConfig);
  const [isEditMode, setIsEditMode] = useState(true);
  const [showSettings, setShowSettings] = useState(true);

  const handleUpdateSettings = (newSettings: ThemeSettings) => {
    setThemeConfig(prev => ({
      ...prev,
      settings: newSettings
    }));
  };

  const handleInlineEditHero = (field: string, value: string) => {
    setThemeConfig(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        hero: {
          ...prev.settings.hero,
          ...(field === 'title' && { title: value }),
          ...(field === 'button_text' && {
            action_button: { ...prev.settings.hero.action_button, text: value }
          })
        }
      }
    }));
  };

  const handleSave = () => {
    console.log('Saved Theme Configuration:', JSON.stringify(themeConfig, null, 2));
    alert('Theme configuration saved! Check the console for the JSON output.');
  };

  const toggleMode = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode) {
      setShowSettings(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Visual Theme Editor</h1>
          <span className="text-sm text-gray-300">
            {isEditMode ? 'Edit Mode' : 'Preview Mode'}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {isEditMode && (
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <Settings className="h-4 w-4" />
              <span>{showSettings ? 'Hide' : 'Show'} Settings</span>
            </button>
          )}

          <button
            onClick={toggleMode}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Eye className="h-4 w-4" />
            <span>{isEditMode ? 'Preview' : 'Edit'}</span>
          </button>

          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>Save</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <div className="bg-white min-h-full">
            <Header
              settings={themeConfig.settings.header}
              isPreviewMode={!isEditMode}
            />
            <Hero
              settings={themeConfig.settings.hero}
              isPreviewMode={!isEditMode}
              onInlineEdit={handleInlineEditHero}
            />
            <Products settings={themeConfig.settings.products} />
            <Footer
              settings={themeConfig.settings.footer}
              isPreviewMode={!isEditMode}
            />
          </div>
        </div>

        {isEditMode && showSettings && (
          <SettingsPanel
            settings={themeConfig.settings}
            onUpdate={handleUpdateSettings}
            onClose={() => setShowSettings(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
