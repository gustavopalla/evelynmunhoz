import type { Copy } from "@/lib/content";
import { ImageSlot, SectionBar } from "./ui";

export function Testimonials({ t }: { t: Copy }) {
  return (
    <section
      id="depoimentos"
      className="mx-auto flex max-w-[1240px] scroll-mt-[60px] flex-col gap-10 px-6 py-[clamp(64px,8vw,112px)]"
    >
      <SectionBar left={`(06) ${t.nav[5]}`} right="Evelyn Munhoz" />
      <h2 className="section-title m-0 text-ink">{t.testiTitle}</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(24px,3vw,48px)]">
        {t.testimonials.map(([text, name, role]) => (
          <figure key={text} className="m-0 flex flex-col justify-between gap-7 border-t border-ink pt-5">
            <blockquote className="m-0 font-serif text-2xl leading-[1.35] text-ink italic text-pretty">
              “{text}”
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="relative size-11 flex-none overflow-hidden rounded-full bg-blush">
                <ImageSlot />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-ink">{name}</span>
                <span className="text-xs text-muted">{role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
