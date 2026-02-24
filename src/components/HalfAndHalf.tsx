import type { ReactNode } from "react";
import { SectionTitle } from "./SectionTitle";

export interface HalfAndHalfProps {
  imagePosition: "left" | "right";
  /** When true, on mobile the image is shown on top (useful when imagePosition is "right") */
  mobileImageFirst?: boolean;
  /** Custom width for the image itself, centered within its half (e.g. 80 for 80%, or "400px") */
  imageWidth?: number | string;
  /** Text heading for the section */
  heading?: string | null;
  /** Optional image as the title instead of h2 (takes precedence over heading) */
  titleImageSrc?: string | null;
  /** Alt text for title image when titleImageSrc is used */
  titleImageAlt?: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
}

export function HalfAndHalf({
  imagePosition,
  mobileImageFirst = false,
  imageWidth,
  heading,
  titleImageSrc,
  titleImageAlt,
  children,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: HalfAndHalfProps) {
  const mediaOrder = imagePosition === "left" ? 0 : 1;
  const contentOrder = imagePosition === "left" ? 1 : 0;

  const imageWidthValue =
    imageWidth != null
      ? typeof imageWidth === "number"
        ? `${imageWidth}%`
        : imageWidth
      : undefined;

  return (
    <>
      <div className="section-divider-vertical" />
      <section
        className={`half-and-half${mobileImageFirst ? " half-and-half--mobile-image-first" : ""}`}
      >
        <SectionTitle
          heading={heading}
          titleImageSrc={titleImageSrc}
          titleImageAlt={titleImageAlt}
        />
        <div className="half-and-half__media" style={{ order: mediaOrder }}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="half-and-half__image"
            style={
              imageWidthValue != null
                ? { width: imageWidthValue, maxWidth: "100%" }
                : undefined
            }
            loading="lazy"
          />
        </div>
        <div className="half-and-half__content" style={{ order: contentOrder }}>
          <div className="half-and-half__body">{children}</div>
          {ctaLabel && ctaHref && (
            <a href={ctaHref} className="cta-button">
              {ctaLabel}
            </a>
          )}
        </div>
      </section>
    </>
  );
}
