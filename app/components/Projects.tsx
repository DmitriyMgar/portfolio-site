"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Role, Language, translations } from "../data/resume";
import { Terminal, Cpu } from "lucide-react";

export default function Projects({ role, lang }: { role: Role; lang: Language }) {
  const t = translations[lang];
  const projectData = t.projects[role];

  return (
    <motion.section
      key={`${role}-${lang}-projects`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {t.sections.projects}
      </h2>

      <Card className="mt-8 bg-[#0a0a0a] backdrop-blur-sm border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <CardHeader className="flex flex-row flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            {role === "fullstack" ? (
              <Terminal className="w-5 h-5 text-white/70" />
            ) : (
              <Cpu className="w-5 h-5 text-white/70" />
            )}
            <CardTitle className="text-xl font-bold text-white tracking-tight">
              {t.projects.title}
            </CardTitle>
          </div>
          <CardAction>
            <a
              href={t.projects.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/60 hover:text-white flex items-center gap-1 transition-colors"
            >
              {t.ui.goToSite}
            </a>
          </CardAction>
        </CardHeader>

        <CardContent className="pt-6 relative z-10">
          <p className="text-white/80 leading-relaxed font-medium">
            {projectData.description}
          </p>

          <ul className="mt-6 space-y-4">
            {projectData.points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3 text-white/70"
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                <div>
                  <span className="font-semibold text-white/90 mr-2">
                    {point.label}
                  </span>
                  {point.text}
                </div>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.section>
  );
}