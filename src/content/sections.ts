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
  book: "https://imagedelivery.net/URnbvRge7GJDOWQUm8qabA/de553040-6f34-4688-bc47-f99dc6532900/public",
  hemp: "https://imagedelivery.net/URnbvRge7GJDOWQUm8qabA/b74b6eb2-864a-4ed8-4a25-d1cd93fa1100/public",
  matthew:
    "https://imagedelivery.net/URnbvRge7GJDOWQUm8qabA/70ddca76-6257-4814-44e5-af123b070700/public",
  farmbridgeLogo:
    "https://imagedelivery.net/URnbvRge7GJDOWQUm8qabA/a06dbc67-cdff-42e8-f128-1097e19d7200/public",
} as const;

/** Video downloaded from reference index.html (hempguide.com) */
export const videos = {
  header:
    "https://pub-7b9b3656486f4ea08414d1a6806c9532.r2.dev/website_header_video_20_sec-1.mp4",
} as const;

/** @deprecated Use images instead */
export const placeholderImage = images;
