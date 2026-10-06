import type { Copy } from "@/lib/content";
import { ImageSlot, SectionBar } from "./ui";

export function Niches({ t }: { t: Copy }) {
  return (
    <section id="nichos" className="scroll-mt-[60px] bg-blush">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[clamp(64px,8vw,112px)]">
        <SectionBar left={`(02) ${t.nav[1]}`} right="Evelyn Munhoz" />
        <h2 className="section-title m-0 text-ink">{t.nichesTitle}</h2>
        <div className="flex flex-col">
          {t.niches.map(([name, desc, ph], i) => (
            <div
              key={name}
              className="grid grid-cols-[36px_minmax(0,1fr)_72px] items-center gap-4 sm:grid-cols-[minmax(56px,120px)_minmax(0,1fr)_clamp(88px,14vw,150px)] sm:gap-[clamp(16px,3vw,40px)] border-t border-ink py-5"
            >
              <span className="display text-[clamp(28px,5vw,72px)] leading-none text-rose">{i + 1}.</span>
              <div className="flex flex-col gap-1.5">
                <span className="display text-[clamp(26px,3vw,40px)] leading-none text-ink">{name}</span>
                <span className="max-w-[440px] text-sm leading-[1.55]">{desc}</span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-md bg-[repeating-linear-gradient(135deg,#FAF7F2_0_10px,#F6E9E3_10px_20px)]">
                <ImageSlot placeholder={ph} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
