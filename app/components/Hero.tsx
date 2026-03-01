"use client";

import { motion } from "framer-motion";
import { Role, Language, translations } from "../data/resume";

export default function Hero({ role, lang }: { role: Role; lang: Language }) {
  const t = translations[lang];

  return (
    <motion.section
      key={`${role}-${lang}`} // forces re-animation on change
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {t.personalInfo.name}
      </h1>
      <p className="mt-3 text-xl font-medium text-white/80">
        {t.personalInfo.titles[role]}
      </p>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
        {t.personalInfo.descriptions[role]}
      </p>
    </motion.section>
  );
}
