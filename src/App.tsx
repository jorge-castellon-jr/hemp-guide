import { HalfAndHalf } from "./components/HalfAndHalf";
import { HalfAndHalfVideo } from "./components/HalfAndHalfVideo";
import { SocialIcons } from "./components/SocialIcons";
import { CenteredCallToAction } from "./components/CenteredCallToAction";
import { SignUpForm } from "./components/SignUpForm";
import { socialLinks, images, videos } from "./content/sections";
import "./index.css";

function App() {
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
              ctaLabel="GET NOW >"
              ctaHref="#"
            >
              <h3 className="half-and-half__subheading">Opportunity</h3>
              <p>
                Successful entrepreneurs and investors know that the right time
                to get into an industry is at the beginning of its growth.
                <b> Industrial hemp</b> is a lucrative opportunity that can’t be
                ignored.
              </p>
              <p>
                This book,{" "}
                <i>
                  Marijuana Hater’s Guide to Making a Billion Dollars from Hemp
                </i>
                , is your roadmap to tapping into hemp’s vast potential to
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
              <p>Proven product demand for billions of dollars in growth.</p>
              <p>Historic role as a mainstay of the American economy.</p>
              <p>Sustainable product potential.</p>
              <p>Current use in more than 25,000 products.</p>
              <p>
                Ability to transform the agriculture, energy, medicine, food,
                feed, and plastic industries.
              </p>
              <p>
                Matthew Harmon's Guide to Making a Billion Dollars from Hemp.
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
              ctaLabel="WATCH NOW >"
              ctaHref="#"
            >
              <p>
                The Farm Bill of 2018 opened the door to industrial production
                of hemp. More than 30 states have now adopted programs that will
                provide jobs, new recycling industries, and boost local
                economies using this fast-growing, sustainable, environmentally
                clean crop. The country is on the verge of a new agricultural
                revolution that could add billions of dollars to the economy.
              </p>
              <p>
                We document our journey from Seed to Sale—from 6,000 years ago
                to the most important agricultural commodity and impactful
                financial crop in the world. By the start of World War II in the
                1920s, discover all that America owes to hemp and stay tuned to
                our YouTube channel for updates.
              </p>
            </HalfAndHalfVideo>
          </div>
        </div>

        <div className="section-bg-light">
          <div className="page-container">
            <CenteredCallToAction
              titleImageSrc={images.farmbridgeLogo}
              titleImageAlt="Farmbridge"
              ctaLabel="VISIT FARMBRIDGE >"
              ctaHref="#"
              variant="green"
            >
              <p>
                Farmbridge is dedicated to bridging the gap between Hemp and
                Humanity.
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
              ctaLabel="READ MORE >"
              ctaHref="#"
            >
              <p>
                Matthew Harmon is changing the way of American industry and
                economy through his role as a thought leader, business
                consultant, speaker, and investor in the hemp industry. A
                successful businessman, documentary filmmaker, and author of
                "How to Make a Billion Dollars From Hemp," Matthew Harmon has
                dedicated his life to creating a potential $1 trillion
                industrial hemp economy that will benefit everyone and be
                sustainable.
              </p>
              <p>
                Harmon is a seasoned real estate executive with a sharp eye for
                viable commercial and retail businesses. When California
                cannabis business opportunities increased, he leveraged his
                experience to take advantage of market stakes.
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
                  Sign up for a free preview
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

export default App;
