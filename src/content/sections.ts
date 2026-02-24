import type { SocialLink } from '../components/SocialIcons';

export const socialLinks: SocialLink[] = [
  { type: 'twitter', href: 'https://twitter.com/MEHarmon', label: 'X' },
  { type: 'instagram', href: 'https://www.instagram.com/meharmon/', label: 'Instagram' },
  { type: 'linkedin', href: 'https://www.linkedin.com/in/mattheweharmon/', label: 'LinkedIn' },
  { type: 'email', href: 'mailto:info@farmbridge.com', label: 'Email' },
];

/** Images downloaded from reference index.html (hempguide.com) */
export const images = {
  book: '/images/Matthew-Harmon-Making-a-Billion-Dollars-from-Hemp-1W.png',
  hemp: '/images/447-hempseed-photo-credit-matthew-harmon-lomzf-e1614263882850.jpg',
  documentary: 'https://placehold.co/800x600/555/eee?text=Documentary',
  matthew: '/images/447-matthew-harmon-headshot.jpeg',
  redLine: '/images/red-lineW-copy.png',
  favicon: '/images/Hemp-Guide-favicon.png',
  farmbridgeLogo: '/images/Farmbridge-Logotype-01.png',
} as const;

/** Video downloaded from reference index.html (hempguide.com) */
export const videos = {
  header: '/videos/website_header_video_20_sec-1.mp4',
} as const;

/** @deprecated Use images instead */
export const placeholderImage = images;
