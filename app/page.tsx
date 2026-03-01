"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Role, Language, translations } from "./data/resume";

export default function Home() {
  const [role, setRole] = useState<Role>("fullstack");
  const [lang, setLang] = useState<Language>("en");

  const t = translations[lang];

  return (
    <div className="min-h-screen text-white">
      {/* Switcher Component */}
      <div className="fixed top-4 right-4 z-50 flex gap-4 items-center">
        {/* Role Switcher */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-full flex gap-1">
          <button
            onClick={() => setRole("head_of_ai")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              role === "head_of_ai"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t.switcher.head_of_ai}
          </button>
          <button
            onClick={() => setRole("fullstack")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              role === "fullstack"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t.switcher.fullstack}
          </button>
        </div>

        {/* Language Switcher */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-full flex gap-1">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
              lang === "en"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ru")}
            className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
              lang === "ru"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            RU
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8">
        <Hero role={role} lang={lang} />
        <hr className="my-16 border-white/20" />
        <About role={role} lang={lang} />
        <hr className="my-16 border-white/20" />
        <Projects role={role} lang={lang} />
        <hr className="my-16 border-white/20" />
        <Contact lang={lang} />
      </main>
    </div>
  );
}
