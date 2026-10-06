"use client";

import { useState } from "react";
import type { Copy } from "@/lib/content";

export function Faq({ t }: { t: Copy }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-[60px] border-t border-line">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-[clamp(32px,5vw,72px)] px-6 py-[clamp(64px,8vw,112px)]">
        <div className="flex flex-col gap-4">
          <span className="eyebrow text-muted">(07) FAQ</span>
          <h2 className="display m-0 text-[clamp(44px,5.4vw,72px)] leading-[0.9] text-ink">{t.faqTitle}</h2>
        </div>
        <div className="flex flex-col border-b border-ink">
          {t.faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-t border-ink">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-4 py-[18px] text-left"
                >
                  <span className="text-base leading-[1.4] font-semibold text-ink">{q}</span>
                  <span
                    className={`flex size-8 flex-none items-center justify-center text-[26px] leading-none font-light transition-all duration-300 ${
                      isOpen ? "rotate-45 text-rose" : "text-ink"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && <p className="m-0 pr-12 pb-[22px] text-[15px] leading-[1.7] text-pretty">{a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
