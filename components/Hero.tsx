import type { Copy } from "@/lib/content";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_HREFS } from "@/lib/content";
import { ArrowRight, ImageSlot, PlayIcon, Sparkle } from "./ui";

export function Hero({ t, onOpenVideo }: { t: Copy; onOpenVideo: () => void }) {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1240px] flex-col gap-4 px-4 pt-4 pb-[clamp(56px,7vw,96px)] sm:gap-5 sm:px-6 sm:pt-6"
    >
      <div className="relative grid grid-cols-1 overflow-hidden sm:grid-cols-[40px_minmax(0,1fr)] border border-ink bg-[radial-gradient(55%_65%_at_80%_45%,#FCEEE9_0%,rgba(252,238,233,0)_72%),#FAF7F2]">
        <div className="hidden items-center justify-center border-r border-ink py-4 sm:flex">
          <span className="eyebrow rotate-180 whitespace-nowrap text-ink [writing-mode:vertical-rl]">
            {t.heroYear}
          </span>
        </div>
        <div className="eyebrow border-b border-ink px-4 py-2.5 text-ink sm:hidden">{t.heroYear}</div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]">
          <div className="relative flex flex-col justify-between gap-8 p-5 sm:p-[clamp(24px,4vw,52px)]">
            <div className="relative">
              <Sparkle size={28} className="-top-2.5 -left-1.5" />
              <Sparkle size={44} className="top-[30%] right-[8%]" />
              <Sparkle size={16} fill="var(--color-rose-light)" className="right-[22%] bottom-[6%]" />
              <h1 className="display m-0 pt-[18px] pl-[18px] text-[clamp(84px,9.6vw,140px)] leading-[0.84] text-ink">
                Eve
                <br />
                lyn
                <br />
                Mun
                <br />
                hoz<span className="text-rose-light">.</span>
              </h1>
            </div>
            <div className="flex max-w-[460px] flex-col gap-[18px] border-t border-ink pt-5">
              <p className="m-0 font-serif text-[clamp(20px,2vw,24px)] leading-[1.3] text-ink italic text-balance">
                {t.heroTitleA} {t.heroTitleEm} {t.heroTitleB}
              </p>
              <p className="m-0 text-sm leading-[1.7] text-pretty">{t.heroSub}</p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="#contato"
                  className="flex items-center gap-2 rounded-full bg-ink px-[26px] py-[15px] text-sm font-semibold text-blush transition-colors duration-300 hover:bg-rose hover:text-white"
                >
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight />
                </a>
                <a
                  href="#videos"
                  className="flex items-center rounded-full border border-ink px-[26px] py-[15px] text-sm font-medium text-ink transition-all duration-300 hover:bg-ink hover:text-blush"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[400px] items-center justify-center px-6 py-[clamp(40px,6vw,72px)] max-sm:order-first max-sm:border-b max-sm:border-ink md:min-h-[440px]">
            <div className="pointer-events-none absolute aspect-[1/1.35] w-[min(78%,440px)] -rotate-[24deg] rounded-full border border-ink" />
            <Sparkle size={40} className="top-[14%] left-[12%]" />
            <Sparkle size={22} className="right-[12%] bottom-[16%]" />
            <Sparkle size={14} fill="var(--color-rose-light)" className="top-[12%] right-[20%]" />
            <div className="stripes-blush relative aspect-[9/15] w-[min(300px,64%)] overflow-hidden rounded-full border border-ink">
              <ImageSlot placeholder="foto Evelyn · retrato" />
            </div>
            <button
              onClick={onOpenVideo}
              className="absolute bottom-[clamp(20px,4vw,44px)] left-1/2 flex min-h-11 -translate-x-1/2 cursor-pointer items-center gap-2.5 rounded-full border border-ink bg-cream py-2 pr-[18px] pl-2 text-[13px] font-semibold whitespace-nowrap text-ink transition-colors duration-300 hover:bg-blush"
            >
              <span className="flex size-[30px] items-center justify-center rounded-full bg-rose-light text-white">
                <PlayIcon size={12} />
              </span>
              {t.heroReel}
            </button>
          </div>
        </div>

        <div className="eyebrow col-span-full flex flex-wrap justify-between max-sm:flex-col max-sm:items-start gap-x-6 gap-y-2 border-t border-ink px-5 py-3 text-ink">
          <span>{t.heroAvail}</span>
          <span className="font-script text-[22px] leading-none font-normal tracking-normal whitespace-nowrap normal-case">
            Evelyn Munhoz
          </span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-ink transition-colors hover:text-rose"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <nav
        aria-label="Índice"
        className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border border-r-0 border-ink"
      >
        {t.nav.map((label, i) => (
          <a
            key={label}
            href={NAV_HREFS[i]}
            className="flex items-baseline gap-2.5 border-r border-ink px-[18px] py-4 text-ink transition-colors duration-300 hover:bg-blush"
          >
            <span className="text-[11px] font-semibold text-rose">0{i + 1}</span>
            <span className="text-sm font-semibold">{label}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
