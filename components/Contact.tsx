"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Copy } from "@/lib/content";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/content";
import { ArrowRight, SectionBar, Sparkle } from "./ui";

export interface ContactForm {
  name: string;
  brand: string;
  email: string;
  pkg: string;
  msg: string;
}

type Errors = Partial<Record<keyof ContactForm, string>>;

const input =
  "w-full appearance-none rounded-2xl border bg-white/90 px-4 py-[13px] text-[15px] text-ink outline-none transition-all duration-200 focus:border-rose-light";

const labelText = "eyebrow text-body";

function ContactLink({
  href,
  external,
  icon,
  children,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex min-h-12 items-center gap-3.5 text-[15px] font-medium text-blush transition-colors hover:text-peach"
    >
      <span className="flex size-11 flex-none items-center justify-center rounded-full border border-blush/30 text-rose-light">
        {icon}
      </span>
      {children}
    </a>
  );
}

export function Contact({
  t,
  form,
  onChange,
  onReset,
}: {
  t: Copy;
  form: ContactForm;
  onChange: (patch: Partial<ContactForm>) => void;
  onReset: () => void;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof ContactForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      onChange({ [k]: e.target.value });
      setErrors((er) => ({ ...er, [k]: undefined }));
    };

  const border = (k: keyof ContactForm) => (errors[k] ? "border-error" : "border-line");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (!form.name.trim()) er.name = t.errReq;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = form.email ? t.errEmail : t.errReq;
    if (Object.keys(er).length) return setErrors(er);

    const p = form.pkg !== "" ? t.packages[+form.pkg] : null;
    const pkgName = p ? `${p[0]} — ${p[1]}` : t.pkgNone;
    const body = `${t.fName}: ${form.name}\n${t.fBrand}: ${form.brand}\nE-mail: ${form.email}\n${t.fPkg}: ${pkgName}\n\n${form.msg}`;
    const subject = "UGC — " + (form.brand || form.name);
    window.open(
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_self",
    );
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setErrors({});
    onReset();
  };

  return (
    <section id="contato" className="scroll-mt-[60px] bg-ink">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[clamp(40px,5vw,64px)] px-6 pt-[clamp(64px,8vw,112px)] pb-10">
        <SectionBar dark left={`(08) ${t.contactNav}`} right={t.contactReply} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(32px,5vw,72px)]">
          <div className="flex flex-col gap-6">
            <h2 className="display m-0 text-[clamp(56px,8vw,112px)] leading-[0.86] text-blush">
              {t.contactTitle} <Sparkle size={36} fill="var(--color-rose-light)" className="!static inline-block align-top" />
            </h2>
            <p className="m-0 max-w-[420px] text-[15px] leading-[1.7] text-dusk">{t.contactSub}</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col gap-1.5">
                <ContactLink
                  href={`mailto:${EMAIL}`}
                  icon={
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  }
                >
                  {EMAIL}
                </ContactLink>
                <ContactLink
                  href={INSTAGRAM_URL}
                  external
                  icon={
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                    </svg>
                  }
                >
                  {INSTAGRAM_HANDLE}
                </ContactLink>
                <ContactLink
                  href="#"
                  icon={
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z" strokeLinejoin="round" />
                    </svg>
                  }
                >
                  WhatsApp
                </ContactLink>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-cream p-[clamp(24px,4vw,36px)]">
            {sent ? (
              <div className="flex flex-col items-start gap-3.5 py-8">
                <span className="eyebrow text-sage">✓ {t.sentTitle}</span>
                <h3 className="display m-0 text-[40px] leading-[0.95] text-ink">{t.sentTitle}</h3>
                <p className="m-0 max-w-[320px] text-[15px] leading-[1.6]">{t.sentBody}</p>
                <button
                  onClick={reset}
                  className="mt-2 min-h-11 cursor-pointer rounded-full border border-ink bg-transparent px-[22px] py-2.5 text-sm font-medium text-ink"
                >
                  {t.sentAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="flex flex-col gap-4">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className={labelText}>{t.fName}</span>
                    <input value={form.name} onChange={set("name")} placeholder={t.fNamePh} className={`${input} ${border("name")}`} />
                    {errors.name && <span className="text-xs text-error">{errors.name}</span>}
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className={labelText}>{t.fBrand}</span>
                    <input value={form.brand} onChange={set("brand")} placeholder={t.fBrandPh} className={`${input} ${border("brand")}`} />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5">
                  <span className={labelText}>E-mail</span>
                  <input type="email" value={form.email} onChange={set("email")} placeholder={t.fEmailPh} className={`${input} ${border("email")}`} />
                  {errors.email && <span className="text-xs text-error">{errors.email}</span>}
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelText}>{t.fPkg}</span>
                  <select value={form.pkg} onChange={set("pkg")} className={`${input} ${border("pkg")} cursor-pointer`}>
                    <option value="">{t.pkgNone}</option>
                    {t.packages.map((p, i) => (
                      <option key={p[0]} value={String(i)}>
                        {p[0]}: {p[1]}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelText}>{t.fMsg}</span>
                  <textarea rows={4} value={form.msg} onChange={set("msg")} placeholder={t.fMsgPh} className={`${input} ${border("msg")} resize-y`} />
                </label>
                <button
                  type="submit"
                  className="mt-1 flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-full bg-rose-light px-7 py-[15px] text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-rose active:bg-rose-dark"
                >
                  <span>{t.fSubmit}</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="flex flex-wrap items-end justify-between gap-4 border-t border-blush/20 pt-10">
          <span className="display text-[clamp(40px,7vw,96px)] leading-[0.85] text-rose-light">evelyn munhoz.</span>
          <span className="text-xs text-dusk">© 2026 Evelyn Munhoz · UGC Creator</span>
        </footer>
      </div>
    </section>
  );
}
