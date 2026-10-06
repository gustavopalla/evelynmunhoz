import type { Copy } from "@/lib/content";
import { ImageSlot } from "./ui";

const BRAND_COUNT = 6;

export function Brands({ t }: { t: Copy }) {
  return (
    <section className="border-y border-line">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-[22px]">
        <span className="eyebrow text-muted">{t.brandsLabel}</span>
        <div className="flex flex-wrap gap-2.5">
          {Array.from({ length: BRAND_COUNT }, (_, i) => (
            <div
              key={i}
              className="relative h-11 w-[116px] rounded-md border border-dashed border-line"
            >
              <ImageSlot fit="contain" placeholder="logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
