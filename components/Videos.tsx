import type { Copy } from "@/lib/content";
import { INSTAGRAM_URL, VIDEO_FILES } from "@/lib/content";
import { ImageSlot, PlayIcon, SectionBar } from "./ui";

export function Videos({ t, onOpen }: { t: Copy; onOpen: (i: number) => void }) {
  return (
    <section id="videos" className="scroll-mt-[60px] overflow-hidden bg-ink">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[clamp(64px,8vw,112px)]">
        <SectionBar dark left={`(03) ${t.nav[2]}`} right="9:16" />
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="section-title m-0 text-blush">{t.videosTitle}</h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="border-b border-rose-light pt-2.5 pb-0.5 text-sm font-medium text-blush transition-colors hover:text-peach"
          >
            {t.videosMore} ↗
          </a>
        </div>

        {/* carousel on mobile, grid from md up */}
        <div className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 pt-1 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-7 md:overflow-visible md:p-0 lg:grid-cols-3">
          {t.videos.map(([title, , niche], i) => (
            <div key={title} className="flex-[0_0_68%] snap-start md:flex-none">
              <div className="flex flex-col gap-3.5">
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[repeating-linear-gradient(135deg,#352B28_0_10px,#3C312E_10px_20px)]">
                  <ImageSlot src={VIDEO_FILES[i].poster} alt={title} sizes="(min-width: 1024px) 400px, 68vw" />
                  <button
                    onClick={() => onOpen(i)}
                    aria-label="Play"
                    className="absolute top-1/2 left-1/2 flex size-[52px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-cream/90 text-ink transition-transform duration-300 hover:scale-110"
                  >
                    <PlayIcon size={18} />
                  </button>
                </div>
                <button
                  onClick={() => onOpen(i)}
                  className="grid cursor-pointer grid-cols-[28px_1fr] items-baseline gap-2 border-t border-blush/20 pt-3 text-left"
                >
                  <span className="text-xs font-semibold text-rose-light">0{i + 1}</span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-serif text-[21px] leading-[1.2] font-medium text-blush">{title}</span>
                    <span className="text-xs text-dusk">{niche}</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
