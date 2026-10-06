import type { Copy } from "@/lib/content";
import { ImageSlot, Sparkle } from "./ui";

export function About({ t }: { t: Copy }) {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1240px] scroll-mt-[60px] px-6 py-[clamp(64px,8vw,112px)]"
    >
      <div className="border border-ink bg-[linear-gradient(180deg,#FCEEE9_0%,#FCEEE9_38%,#FAF7F2_38%)]">
        <div className="relative flex justify-center px-4 pt-[clamp(24px,4vw,40px)]">
          <Sparkle size={30} className="top-[38%] left-[10%]" />
          <Sparkle size={16} className="top-[22%] left-[16%]" />
          <Sparkle size={38} className="top-[30%] right-[10%]" />
          <svg viewBox="0 0 640 210" className="h-auto w-[min(100%,640px)] overflow-visible" aria-label={t.aboutTitle}>
            <path id="about-arc" d="M40 200 A280 170 0 0 1 600 200" fill="none" />
            <text className="display fill-ink text-[64px]">
              <textPath href="#about-arc" startOffset="50%" textAnchor="middle">
                Sobre mim
              </textPath>
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] items-center gap-[clamp(24px,4vw,48px)] px-[clamp(20px,4vw,48px)] pb-[clamp(32px,4vw,48px)]">
          <p className="m-0 font-serif text-[21px] leading-[1.45] text-ink text-pretty">{t.aboutP1}</p>
          <div className="stripes-blush relative aspect-[3/4] w-[min(100%,220px)] sm:w-[min(100%,300px)] justify-self-center overflow-hidden rounded-full border border-ink">
            <ImageSlot src="/assets/sobre-festa.jpg" alt="Evelyn Munhoz" sizes="(min-width: 640px) 300px, 220px" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="m-0 text-sm leading-[1.7]">{t.aboutP2}</p>
            <div className="flex flex-col">
              {t.steps.map(([title, desc], i) => (
                <div
                  key={title}
                  className="grid grid-cols-[28px_92px_1fr] gap-2.5 border-t border-line py-[11px] text-[13px] leading-[1.45]"
                >
                  <span className="font-semibold text-rose">0{i + 1}</span>
                  <span className="font-semibold text-ink">{title}</span>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] border-t border-ink">
          <span className="px-6 py-3.5 font-script text-[28px] leading-none text-ink">Evelyn Munhoz</span>
          <span className="eyebrow flex items-center gap-4 border-l border-ink px-6 py-3.5 text-ink">
            (01) {t.nav[0]}
            <span className="h-px flex-1 bg-ink" />2026
          </span>
        </div>
      </div>
    </section>
  );
}
