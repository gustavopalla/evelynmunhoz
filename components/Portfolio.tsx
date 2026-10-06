"use client";

import { useCallback, useState } from "react";
import { COPY as t } from "@/lib/content";
import { About } from "./About";
import { Brands } from "./Brands";
import { Contact, type ContactForm } from "./Contact";
import { Faq } from "./Faq";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Niches } from "./Niches";
import { Packages } from "./Packages";
import { Photos } from "./Photos";
import { Testimonials } from "./Testimonials";
import { VideoModal } from "./VideoModal";
import { Videos } from "./Videos";

const EMPTY_FORM: ContactForm = { name: "", brand: "", email: "", pkg: "", msg: "" };

export function Portfolio() {
  const [modal, setModal] = useState<number | null>(null);
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);

  const closeModal = useCallback(() => setModal(null), []);

  const selectPackage = (i: number) => {
    setForm((f) => ({ ...f, pkg: String(i) }));
    setTimeout(() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }), 60);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header t={t} />
      <Hero t={t} />
      <Brands t={t} />
      <About t={t} />
      <Niches t={t} />
      <Videos t={t} onOpen={setModal} />
      <Photos t={t} />
      <Packages t={t} selected={form.pkg} onSelect={selectPackage} />
      <Testimonials t={t} />
      <Faq t={t} />
      <Contact
        t={t}
        form={form}
        onChange={(patch) => setForm((f) => ({ ...f, ...patch }))}
        onReset={() => setForm(EMPTY_FORM)}
      />
      {modal !== null && <VideoModal key={modal} t={t} index={modal} onClose={closeModal} />}
    </div>
  );
}
