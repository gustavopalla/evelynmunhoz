import type { Copy } from "@/lib/content";
import { ImageSlot, SectionBar } from "./ui";

export function Photos({ t }: { t: Copy }) {
  return (
    <section id="fotos" className="scroll-mt-[60px] overflow-hidden">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[clamp(64px,8vw,112px)]">
        <SectionBar left={`(04) ${t.nav[3]}`} right="4:5 · 1:1" />
        <h2 className="section-title m-0 max-w-[900px] text-ink">{t.photosTitle}</h2>
        <div className="scrollbar-none -mx-6 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-pl-6 px-6 pt-1 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-2.5 md:overflow-visible md:p-0 lg:grid-cols-3">
          {t.photos.map((ph) => (
            <div key={ph} className="flex-[0_0_78%] snap-start md:flex-none">
              <div
                className={`stripes-blush relative overflow-hidden rounded-md ${
                  ph.includes("1:1") ? "aspect-square" : "aspect-[4/5]"
                }`}
              >
                <ImageSlot placeholder={ph} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
