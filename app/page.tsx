import { HalfAndHalf } from "@/components/HalfAndHalf";
import { HalfAndHalfVideo } from "@/components/HalfAndHalfVideo";
import { SocialIcons } from "@/components/SocialIcons";
import { CenteredCallToAction } from "@/components/CenteredCallToAction";
import { SignUpForm } from "@/components/SignUpForm";
import { socialLinks, images, videos } from "@/content/sections";

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <SocialIcons links={socialLinks} />
      </header>

      <main>
        <div className="section-bg-hero">
          <div className="page-container">
            <div className="page-title-wrap">
              <h1 className="page-title">The Next Disruptive Industry</h1>
              <div className="title-underline" aria-hidden="true" />
            </div>
            <HalfAndHalf
              imagePosition="right"
              imageWidth="500px"
              mobileImageFirst
              imageSrc="/images/Matthew-Harmon-Making-a-Billion-Dollars-from-Hemp-1W.png"
              imageAlt="Book cover: Making a Billion Dollars from HEMP by Matthew Harmon"
              ctaLabel="Buy now"
              ctaHref="https://www.amazon.com/dp/1735674702/"
            >
              <h3 className="half-and-half__subheading">Opportunity</h3>
              <p>
                Successful entrepreneurs and investors know that the right time
                to get into an industry is at the beginning of its growth.
                <b> Industrial hemp</b> is a lucrative opportunity that can't be
                ignored.
              </p>
              <p>
                This book,{" "}
                <i>
                  Marijuana Hater's Guide to Making a Billion Dollars from Hemp
                </i>
                , is your roadmap to tapping into hemp's vast potential to
                create a sustainable permaculture that transforms our economy
                and protects our environment—while making you rich.
              </p>
            </HalfAndHalf>
          </div>
        </div>

        <div className="section-bg-white">
          <div className="page-container">
            <HalfAndHalf
              imagePosition="left"
              heading="Hemp"
              imageSrc={images.hemp}
              imageAlt="Raw hemp plant material, leaves and seeds"
            >
              <p>
                There's a proven product poised for billions of dollars in
                growth—and you can get in on the ground floor.{" "}
                <b>Industrial hemp</b>, now legal, is the crop of the future,
                the savior of the economy, and your ticket to wealth. Tap into
                this emerging industry with{" "}
                <i>
                  Marijuana Hater's Guide to Making a Billion Dollars from Hemp
                </i>{" "}
                and discover hemp's:
              </p>
              <p>
                <strong>
                  historic role as a mainstay of the American economy
                </strong>
              </p>
              <p>
                <strong>
                  sustainable product potential to replace hundreds of
                  non-renewable materials
                </strong>
              </p>
              <p>
                <strong>current use in more than 25,000 products</strong>
              </p>
              <p>
                <strong>
                  ability to transform the agriculture, energy, medicine, fuel,
                  food, and plastic industries
                </strong>
              </p>
            </HalfAndHalf>
          </div>
        </div>

        <div className="section-bg-light">
          <div className="page-container">
            <HalfAndHalfVideo
              videoPosition="right"
              mobileVideoFirst
              heading="Documentary"
              videoSrc={videos.header}
              ctaLabel="YouTube"
              ctaHref="https://www.youtube.com/watch?v=F34n46Imzqo&t=47s"
            >
              <p>
                The Farm Bill of 2018 opened the door to industrial production
                of Hemp. More than 30 states have adopted programs that will
                provide jobs, replace dying industries, and boost local
                economies using this fast growing, sustainable, ancient plant.
                The country, the world, could be on the verge of a new clean
                industrial revolution that could add billions of dollars to the
                economy.
              </p>
              <p>
                We trace hemp's journey from food and fiber in 6,000 years ago
                to the most important national security commodity and largest
                industrial crop in the world at the beginning of the 20th
                century to the root of all evil in the 1930's. Advocates of Hemp
                world wide, have been educating and lobbying to remove the
                stigma and show the potential of this amazing resource.
              </p>
              <p>
                Passage of the Farm Bill Act could be just the start of a whole
                new industry that can deliver everything from food to energy,
                medicine to building materials, and paper to plastics. Look for
                release of this important new film later this year, and stay
                tuned to our YouTube channel for updates.
              </p>
            </HalfAndHalfVideo>
          </div>
        </div>

        <div className="section-bg-light">
          <div className="page-container">
            <CenteredCallToAction
              titleImageSrc={images.farmbridgeLogo}
              titleImageAlt="Farmbridge"
              ctaLabel="Visit Farmbridge"
              ctaHref="https://farmbridge.com/?utm_source=hempguide.com"
              variant="green"
            >
              <p>
                Farmbridge is dedicated to bridging the gap between Hemp and
                Humans.
              </p>
            </CenteredCallToAction>
          </div>
        </div>

        <div className="section-bg-light">
          <div className="page-container">
            <HalfAndHalf
              imagePosition="left"
              heading="Matthew Harmon"
              imageSrc={images.matthew}
              imageAlt="Matthew Harmon, businessman and author"
              // ctaLabel="View press kit"
              // ctaHref="https://matthewharmon.onlinepresskit247.com/"
            >
              <p>
                <b>Matthew Harmon</b> is changing the face of American industry
                and our economy through his role as a thought leader, business
                consultant, lobbyist, and investor guide to the hemp industry. A
                successful businessman, documentary filmmaker, and author of{" "}
                <i>
                  Marijuana Hater's Guide to Making a Billion Dollars from Hemp
                </i>
                , Harmon advocates for America to unshackle a potential $1
                trillion industrial hemp economy—to build a prosperous and
                sustainable future.
              </p>
              <p>
                Harmon is a seasoned real-estate executive with a sharp eye for
                viable commercial and retail business ventures. When California
                decriminalized cannabis, business opportunities increased as
                prospective tenants took advantage of its new status.
              </p>
            </HalfAndHalf>
          </div>
        </div>

        <div className="section-bg-solid">
          <div className="page-container">
            <div className="section-divider-vertical" />
            <section className="half-and-half half-and-half--mobile-image-first half-and-half--signup">
              <div className="half-and-half__title-wrap">
                <h2 className="half-and-half__heading">
                  Sign up for a <strong>free</strong> preview
                </h2>
                <div className="title-underline" aria-hidden="true" />
              </div>
              <div className="half-and-half__content" style={{ order: 0 }}>
                <SignUpForm />
              </div>
              <div
                className="half-and-half__media"
                style={{ order: 1, maxWidth: "300px" }}
              >
                <img
                  src={images.book}
                  alt="Making a Billion Dollars from HEMP book cover"
                  className="half-and-half__image"
                  loading="lazy"
                />
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
