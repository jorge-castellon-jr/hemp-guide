import type { SocialLink } from "../components/SocialIcons";

export const socialLinks: SocialLink[] = [
  { type: "twitter", href: "https://twitter.com/MEHarmon", label: "X" },
  {
    type: "instagram",
    href: "https://www.instagram.com/meharmon/",
    label: "Instagram",
  },
  {
    type: "linkedin",
    href: "https://www.linkedin.com/in/mattheweharmon/",
    label: "LinkedIn",
  },
  { type: "email", href: "mailto:info@farmbridge.com", label: "Email" },
];

/** Images downloaded from reference index.html (hempguide.com) */
export const images = {
  book: "https://imagedelivery.net/1yljJPusD0juUBvTw4tCwg/989ba760-fe9d-4158-f9a6-6d9e2f8b7300/public",
  hemp: "/images/447-hempseed-photo-credit-matthew-harmon-lomzf-e1614263882850.jpg",
  matthew:
    "https://imagedelivery.net/1yljJPusD0juUBvTw4tCwg/d87549ab-a931-4034-8063-833499e28900/public",
  farmbridgeLogo: "/images/Farmbridge-Logotype-01.png",
} as const;

/** Video downloaded from reference index.html (hempguide.com) */
export const videos = {
  header:
    "https://pub-7b9b3656486f4ea08414d1a6806c9532.r2.dev/website_header_video_20_sec-1.mp4",
} as const;

/** @deprecated Use images instead */
export const placeholderImage = images;
