export interface NavigationLink {
  id: string;
  text: string;
  url: string;
}

export interface HeaderSettings {
  display_mode: 'logo' | 'text';
  logo_url: string;
  site_name: string;
  navigation_links: NavigationLink[];
}

export interface ActionButton {
  text: string;
  url: string;
}

export interface HeroSettings {
  image_url: string;
  title: string;
  action_button: ActionButton;
}

export interface ProductsSettings {
  headline: string;
  item_count: number;
}

export interface FooterLink {
  id: string;
  text: string;
  url: string;
}

export interface FooterSettings {
  links: FooterLink[];
}

export interface ThemeSettings {
  header: HeaderSettings;
  hero: HeroSettings;
  products: ProductsSettings;
  footer: FooterSettings;
}

export interface ThemeConfig {
  theme_id: string;
  settings: ThemeSettings;
}
