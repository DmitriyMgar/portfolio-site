import { Button } from "@/components/ui/button";

export default function Contact() {
  const links = [
    { label: "GitHub", href: "https://github.com" },
    { label: "Telegram", href: "https://t.me" },
    { label: "Email", href: "mailto:your@email.com" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Contact
      </h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Button asChild variant="outline">
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={
                  link.label === "Email" ? undefined : "noopener noreferrer"
                }
              >
                {link.label}
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
