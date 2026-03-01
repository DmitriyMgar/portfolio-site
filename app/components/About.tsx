"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Role, Language, translations } from "../data/resume";

export default function About({ role, lang }: { role: Role; lang: Language }) {
  const t = translations[lang];
  const experience = t.experience[role];
  const skillGroups = t.skills[role];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      key={`${role}-${lang}-about`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {t.sections.about}
      </h2>
      <p className="mt-4 text-white/70">{t.personalInfo.about}</p>

      <h3 className="mt-12 text-lg font-semibold text-white">
        {t.sections.experience}
      </h3>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-4 space-y-6"
      >
        {experience.map((job) => (
          <motion.li key={`${job.company}-${job.period}`} variants={item}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 transition-colors hover:bg-white/10 hover:border-white/20">
              <CardHeader className="flex flex-row flex-wrap items-baseline justify-between gap-2">
                <CardTitle className="text-white">{job.company}</CardTitle>
                <span className="text-sm text-white/60">{job.period}</span>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm font-medium text-white/70">{job.role}</p>
                <p className="mt-2 text-white/60">{job.description}</p>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>

      <h3 className="mt-12 text-lg font-semibold text-white">
        {t.sections.skills}
      </h3>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-4 space-y-2"
      >
        {skillGroups.map((group) => (
          <motion.li key={group.title} variants={item}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 transition-colors hover:bg-white/10 hover:border-white/20">
              <CardContent className="py-4">
                <span className="font-medium text-white">{group.title}:</span>{" "}
                <span className="text-white/70">{group.skills}</span>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}