export interface SectionTitleProps {
  /** Text heading (ignored if titleImageSrc is set) */
  heading?: string | null;
  /** Optional image as the title instead of h2 */
  titleImageSrc?: string | null;
  /** Alt text for title image (required when titleImageSrc is set) */
  titleImageAlt?: string;
}

export function SectionTitle({
  heading,
  titleImageSrc,
  titleImageAlt = "",
}: SectionTitleProps) {
  const useImage = titleImageSrc != null && titleImageSrc !== "";

  if (!useImage && (heading == null || heading === "")) {
    return null;
  }

  return (
    <div className="half-and-half__title-wrap">
      {useImage ? (
        <img
          src={titleImageSrc!}
          alt={titleImageAlt}
          className="half-and-half__title-image"
        />
      ) : (
        <h2 className="half-and-half__heading">{heading}</h2>
      )}
      <div className="title-underline" aria-hidden="true" />
    </div>
  );
}
