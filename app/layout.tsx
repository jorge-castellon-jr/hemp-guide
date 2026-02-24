import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hempguide.com";
const title = "Hemp: The Next Disruptive Industry - Hemp Guide";
const description =
  "The right time to get into an industry is at the beginning of its growth. Industrial hemp is the next disruptive industry.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: { canonical: SITE_URL + "/" },
  openGraph: {
    locale: "en_US",
    type: "website",
    title,
    description,
    url: SITE_URL + "/",
    siteName: "Hemp Guide",
    images: [
      {
        url: SITE_URL + "/favicon.png",
        width: 400,
        height: 400,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/Hemp-Guide-favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": SITE_URL + "/",
      url: SITE_URL + "/",
      name: title,
      isPartOf: { "@id": SITE_URL + "/#website" },
      about: { "@id": SITE_URL + "/#organization" },
      datePublished: "2021-02-23T17:57:01+00:00",
      dateModified: "2023-06-05T15:58:59+00:00",
      description,
      breadcrumb: { "@id": SITE_URL + "/#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: [{ "@type": "ReadAction", target: [SITE_URL + "/"] }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": SITE_URL + "/#breadcrumb",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL + "/",
      name: "Hemp Guide",
      description: "Hemp Industry News",
      publisher: { "@id": SITE_URL + "/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "Farmbridge, Inc.",
      url: SITE_URL + "/",
      logo: {
        "@type": "ImageObject",
        url: SITE_URL + "/favicon.png",
        width: 400,
        height: 400,
        caption: "Farmbridge, Inc.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
