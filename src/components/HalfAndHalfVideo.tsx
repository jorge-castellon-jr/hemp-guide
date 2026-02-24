import type { ReactNode } from "react";
import { SectionTitle } from "./SectionTitle";

export interface HalfAndHalfVideoProps {
  videoPosition: "left" | "right";
  /** When true, on mobile the video is shown on top (useful when videoPosition is "right") */
  mobileVideoFirst?: boolean;
  /** Custom width for the video itself, centered within its half (e.g. 80 for 80%, or "400px") */
  videoWidth?: number | string;
  /** Text heading for the section */
  heading?: string | null;
  /** Optional image as the title instead of h2 */
  titleImageSrc?: string | null;
  /** Alt text for title image when titleImageSrc is used */
  titleImageAlt?: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  /** Video source URL (e.g. /videos/website_header_video_20_sec-1.mp4) */
  videoSrc: string;
  /** Optional poster image before play */
  videoPoster?: string;
  /** Autoplay (default true, like reference) */
  autoplay?: boolean;
  /** Muted (default true, required for autoplay in most browsers) */
  muted?: boolean;
  /** Loop (default true) */
  loop?: boolean;
  /** Plays inline on mobile (default true) */
  playsInline?: boolean;
  /** Show native controls (default false) */
  controls?: boolean;
  /** Preload: "none" | "metadata" | "auto" (default "auto") */
  preload?: "none" | "metadata" | "auto";
}

export function HalfAndHalfVideo({
  videoPosition,
  mobileVideoFirst = false,
  videoWidth,
  heading,
  titleImageSrc,
  titleImageAlt,
  children,
  ctaLabel,
  ctaHref,
  videoSrc,
  videoPoster,
  autoplay = true,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  preload = "auto",
}: HalfAndHalfVideoProps) {
  const mediaOrder = videoPosition === "left" ? 0 : 1;
  const contentOrder = videoPosition === "left" ? 1 : 0;

  const videoWidthValue =
    videoWidth != null
      ? typeof videoWidth === "number"
        ? `${videoWidth}%`
        : videoWidth
      : undefined;

  return (
    <>
      <div className="section-divider-vertical" />
      <section
        className={`half-and-half${mobileVideoFirst ? " half-and-half--mobile-image-first" : ""}`}
      >
        <SectionTitle
          heading={heading}
          titleImageSrc={titleImageSrc}
          titleImageAlt={titleImageAlt}
        />
        <div className="half-and-half__media" style={{ order: mediaOrder }}>
          <video
            className="half-and-half__video"
            src={videoSrc}
            poster={videoPoster}
            autoPlay={autoplay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            controls={controls}
            preload={preload}
            style={
              videoWidthValue != null
                ? { width: videoWidthValue, maxWidth: "100%" }
                : undefined
            }
          >
            Your browser does not support the video tag.
          </video>
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
