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
              className="grid grid-cols-[minmax(0,1fr)_88px] gap-x-4 gap-y-1 border-t border-ink py-5 sm:grid-cols-[minmax(56px,120px)_minmax(0,1fr)_clamp(88px,14vw,150px)] sm:items-center sm:gap-x-[clamp(16px,3vw,40px)]"
            >
              <span className="display text-3xl leading-none text-rose sm:row-span-2 sm:text-[clamp(40px,5vw,72px)]">
                {i + 1}.
              </span>
              <span className="display col-start-1 break-words text-[26px] leading-none text-ink sm:col-start-2 sm:text-[clamp(26px,3vw,40px)]">
                {name}
              </span>
              <span className="col-start-1 max-w-[440px] text-sm leading-[1.55] sm:col-start-2">{desc}</span>
              <div className="relative col-start-2 row-span-3 row-start-1 aspect-square self-center overflow-hidden rounded-md bg-[repeating-linear-gradient(135deg,#FAF7F2_0_10px,#F6E9E3_10px_20px)] sm:col-start-3 sm:row-span-2">
                <ImageSlot placeholder={ph} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
