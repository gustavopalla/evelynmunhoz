import Image from "next/image";
import type { Copy } from "@/lib/content";
import { NAV_HREFS } from "@/lib/content";

export function Header({ t }: { t: Copy }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-2 px-4 py-2.5 sm:gap-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2 text-ink sm:gap-2.5">
          <Image
            src="/assets/evelyn-mirror.png"
            alt="Evelyn Munhoz"
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
          <span className="display truncate text-[16px] leading-none sm:text-[17px]">evelyn munhoz</span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {t.nav.map((label, i) => (
            <a
              key={label}
              href={NAV_HREFS[i]}
              className="eyebrow px-3 py-3.5 text-body transition-colors duration-300 hover:text-rose"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-1.5 sm:gap-2">
          <a
            href="#contato"
            className="hidden rounded-full bg-ink px-[22px] py-[13px] text-[13px] font-semibold text-blush transition-colors duration-300 hover:bg-rose hover:text-white lg:block"
          >
            {t.navCta}
          </a>
          <a
            href="#contato"
            aria-label={t.contactNav}
            className="flex size-10 items-center justify-center rounded-full bg-ink sm:size-11 text-blush transition-colors duration-300 hover:bg-rose hover:text-white lg:hidden"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
