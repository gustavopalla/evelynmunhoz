import type { Copy } from "@/lib/content";
import { SHOW_PRICES } from "@/lib/content";
import { SectionBar } from "./ui";

export function Packages({
  t,
  selected,
  onSelect,
}: {
  t: Copy;
  selected: string;
  onSelect: (index: number) => void;
}) {
  return (
    <section id="pacotes" className="scroll-mt-[60px] bg-blush">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[clamp(64px,8vw,112px)]">
        <SectionBar left={`(05) ${t.nav[4]}`} right={t.pkgSub} />
        <h2 className="section-title m-0 text-ink">{t.pkgTitle}</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] items-stretch gap-4">
          {t.packages.map(([label, title, sub, price, items], i) => {
            const sel = selected === String(i);
            const featured = i === 1;
            return (
              <div
                key={label}
                className={`flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 ${
                  featured ? "bg-ink" : "bg-cream"
                } ${
                  sel ? "border-rose-light outline-3 outline-offset-2 outline-rose-light/35" : featured ? "border-ink" : "border-line"
                }`}
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex min-h-[26px] items-center justify-between gap-2">
                    <span className={`eyebrow ${featured ? "text-peach" : "text-rose"}`}>
                      0{i + 1} · {label}
                    </span>
                    {featured && (
                      <span className="rounded-full bg-rose-light px-2.5 py-[5px] text-[11px] font-semibold whitespace-nowrap text-white">
                        {t.pkgFeatured}
                      </span>
                    )}
                  </div>
                  <h3 className={`display mt-2.5 mb-0 text-4xl leading-[0.95] ${featured ? "text-blush" : "text-ink"}`}>
                    {title}
                  </h3>
                  <span className={`font-serif text-[19px] italic ${featured ? "text-dusk" : "text-muted"}`}>
                    {sub}
                  </span>
                  <ul className="mt-5 mb-7 flex list-none flex-col p-0">
                    {items.map((it) => (
                      <li
                        key={it}
                        className={`border-t py-2.5 text-sm leading-[1.45] ${
                          featured ? "border-blush/15 text-dusk-soft" : "border-line text-body"
                        }`}
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className={`text-[11px] tracking-[0.08em] uppercase ${featured ? "text-dusk" : "text-muted"}`}>
                      {SHOW_PRICES ? t.from : ""}
                    </span>
                    <span
                      className={`font-display text-[32px] leading-none font-extrabold tracking-[-0.01em] whitespace-nowrap ${
                        featured ? "text-blush" : "text-ink"
                      }`}
                    >
                      {SHOW_PRICES ? price : t.onRequest}
                    </span>
                  </div>
                  <button
                    onClick={() => onSelect(i)}
                    className={`min-h-11 cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                      featured || sel
                        ? "border-0 bg-rose-light text-white"
                        : "border border-ink bg-transparent text-ink"
                    }`}
                  >
                    {sel ? t.selected : t.select}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
