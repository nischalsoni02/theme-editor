import { ThemeConfig } from '../types/theme';

export const defaultThemeConfig: ThemeConfig = {
  theme_id: 'simple_store',
  settings: {
    header: {
      display_mode: 'logo',
      logo_url: 'https://images.pexels.com/photos/3963093/pexels-photo-3963093.jpeg?auto=compress&cs=tinysrgb&w=200&h=80&dpr=1',
      site_name: 'My Store',
      navigation_links: [
        { id: 'nav1', text: 'Home', url: 'paste your url' },
        { id: 'nav2', text: 'Shop', url: 'paste your url' },
        { id: 'nav3', text: 'About', url: 'paste your url' }
      ]
    },
    hero: {
      image_url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Welcome to Our Store',
      action_button: {
        text: 'Shop Now',
        url: 'paste your url'
      }
    },
    products: {
      headline: 'Our Products',
      item_count: 4
    },
    footer: {
      links: [
        { id: 'foot1', text: 'About Us', url: 'paste your url' },
        { id: 'foot2', text: 'Contact', url: 'paste your url' },
        { id: 'foot3', text: 'Terms and conditions', url: 'paste your url' }
      ]
    }
  }
};
