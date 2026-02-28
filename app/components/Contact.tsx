export default function Contact() {
  const links = [
    { label: "GitHub", href: "https://github.com" },
    { label: "Telegram", href: "https://t.me" },
    { label: "Email", href: "mailto:your@email.com" },
  ];

  return (
    <section className="py-16 md:py-24">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Contact</h2>
      <ul className="mt-6 flex flex-wrap gap-6">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="font-medium text-zinc-600 underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
