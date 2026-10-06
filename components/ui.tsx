import Image from "next/image";

export function Sparkle({
  size,
  className = "",
  fill = "var(--color-ink)",
}: {
  size: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      aria-hidden="true"
      className={`absolute ${className}`}
    >
      <path d="M12 0C12.6 7 17 11.4 24 12C17 12.6 12.6 17 12 24C11.4 17 7 12.6 0 12C7 11.4 11.4 7 12 0Z" />
    </svg>
  );
}

export function ArrowRight({ size = 15, stroke = 2 }: { size?: number; stroke?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export function PlayIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/**
 * Image placeholder. Pass `src` to fill it; without one it renders an empty
 * slot labelled with `placeholder` so the layout stays intact.
 */
export function ImageSlot({
  src,
  alt = "",
  placeholder,
  fit = "cover",
  sizes = "(min-width: 1024px) 400px, 80vw",
}: {
  src?: string;
  alt?: string;
  placeholder?: string;
  fit?: "cover" | "contain";
  sizes?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    );
  }
  if (!placeholder?.trim()) return null;
  return (
    <span className="absolute inset-0 flex items-center justify-center p-2 text-center font-mono text-[11px] text-muted">
      {placeholder}
    </span>
  );
}

export function SectionBar({
  left,
  right,
  dark = false,
}: {
  left: string;
  right: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`eyebrow flex justify-between gap-4 border-b pb-3.5 ${
        dark ? "border-blush/20 text-dusk" : "border-line text-muted"
      }`}
    >
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
