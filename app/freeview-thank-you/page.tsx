import { SocialIcons } from "@/components/SocialIcons";
import { socialLinks, images } from "@/content/sections";

/** PDF path: put Free-Chapter-Preview.pdf in public/documents/ */
const PREVIEW_PDF = "/documents/Free-Chapter-Preview.pdf";

export const metadata = {
  title: "FREEVIEW Thank You - Hemp Guide",
  description:
    "Thank you for requesting a free preview of Marijuana Hater's Guide to Making a Billion Dollars from Hemp.",
  robots: "noindex, follow",
};

export default function FreeviewThankYouPage() {
  return (
    <>
      <header className="site-header">
        <SocialIcons links={socialLinks} />
      </header>

      <main>
        <div className="section-bg-hero">
          <div className="page-container">
            <div className="page-title-wrap">
              <h1 className="page-title">
                Thank you for requesting a free PREVIEW
              </h1>
              <div className="title-underline" aria-hidden="true" />
            </div>

            <section
              className="half-and-half"
              style={{ paddingTop: "1rem", paddingBottom: "3rem" }}
            >
              <div className="half-and-half__media">
                <a
                  href={PREVIEW_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download free chapter preview PDF"
                >
                  <img
                    src={images.book}
                    alt="Making a Billion Dollars from HEMP book cover"
                    className="half-and-half__image"
                    loading="eager"
                  />
                </a>
              </div>
              <div className="half-and-half__content">
                <h2
                  className="half-and-half__subheading"
                  style={{ marginBottom: "1rem" }}
                >
                  The Next Disruptive Industry
                </h2>
                <p>
                  There's a proven product poised for billions of dollars in
                  growth—and you can get in on the ground floor. Industrial
                  hemp, now legal, is the crop of the future, the savior of the
                  economy, and your ticket to wealth. Tap into this emerging
                  industry with{" "}
                  <i>
                    Marijuana Hater's Guide to Making a Billion Dollars from
                    Hemp
                  </i>
                  .
                </p>
                <p>
                  This book is your roadmap to tapping into hemp's vast
                  potential to create a sustainable permaculture that transforms
                  our economy and protects our environment—while making you
                  rich.
                </p>
                <a
                  href={PREVIEW_PDF}
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download your preview now
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="page-container">
          <SocialIcons links={socialLinks} />
          <p>Farmbridge © 2026 | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
