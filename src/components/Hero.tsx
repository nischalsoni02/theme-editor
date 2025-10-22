import { HeroSettings } from '../types/theme';
import InlineEdit from './InlineEdit';

interface HeroProps {
  settings: HeroSettings;
  isPreviewMode: boolean;
  onInlineEdit?: (field: string, value: string) => void;
}

export default function Hero({ settings, isPreviewMode, onInlineEdit }: HeroProps) {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isPreviewMode) {
      e.preventDefault();
    }
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src={settings.image_url}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-black px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <InlineEdit
              value={settings.title}
              onSave={(value) => onInlineEdit?.('title', value)}
              className="text-4xl md:text-6xl font-bold"
              isEnabled={!isPreviewMode}
            />
          </h1>
          <a
            href={settings.action_button.url}
            onClick={handleButtonClick}
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <InlineEdit
              value={settings.action_button.text}
              onSave={(value) => onInlineEdit?.('button_text', value)}
              className="font-semibold text-gray-900"
              isEnabled={!isPreviewMode}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
