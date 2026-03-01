"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Language, translations } from "../data/resume";
import { Github, Send, Mail } from "lucide-react";

export default function Contact({ lang }: { lang: Language }) {
  const t = translations[lang];
  const links = [
    { label: "GitHub", href: "https://github.com/DmitriyMgar", icon: <Github className="w-4 h-4 mr-2" /> },
    { label: "Telegram", href: "https://t.me/dmitriy_mgar", icon: <Send className="w-4 h-4 mr-2" /> },
    { label: "Email", href: "mailto:mgar@phystech.edu", icon: <Mail className="w-4 h-4 mr-2" /> },
  ];

  return (
    <motion.section
      key={`${lang}-contact`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {t.sections.contact}
      </h2>
      <ul className="mt-6 flex flex-wrap gap-4">
        {links.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              asChild
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={
                  link.label === "Email" ? undefined : "noopener noreferrer"
                }
                className="flex items-center"
              >
                {link.icon}
                {link.label}
              </a>
            </Button>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}