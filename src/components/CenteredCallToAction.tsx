export interface CenteredCallToActionProps {
  heading?: string;
  /** Optional image as the title instead of heading */
  titleImageSrc?: string | null;
  /** Alt text for title image when titleImageSrc is used */
  titleImageAlt?: string;
  children: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
  variant?: "default" | "green";
}

export function CenteredCallToAction({
  heading,
  titleImageSrc,
  titleImageAlt = "",
  children,
  ctaLabel,
  ctaHref,
  variant = "default",
}: CenteredCallToActionProps) {
  const sectionClass =
    variant === "green" ? "centered-cta centered-cta--green" : "centered-cta";
  const useTitleImage = titleImageSrc != null && titleImageSrc !== "";
  const showTitle = useTitleImage || (heading != null && heading !== "");

  return (
    <>
      <div className="section-divider-vertical" />
      <section className={sectionClass}>
        {showTitle && (
          <div className="centered-cta__title-wrap">
            {useTitleImage ? (
              <img
                src={titleImageSrc!}
                alt={titleImageAlt}
                className="half-and-half__title-image"
              />
            ) : (
              <h2 className="centered-cta__heading">{heading}</h2>
            )}
            <div className="title-underline" aria-hidden="true" />
          </div>
        )}
        <div className="centered-cta__body">{children}</div>
        <a href={ctaHref} className="cta-button">
          {ctaLabel}
        </a>
      </section>
    </>
  );
}
