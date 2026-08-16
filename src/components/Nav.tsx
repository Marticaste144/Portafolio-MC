import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "work", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contacto" },
];

export function Nav() {
  const activeId = useActiveSection(LINKS.map((link) => link.id));
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleClick("hero");
          }}
          className="font-display text-lg font-bold tracking-tight text-paper"
        >
          MC<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeId === link.id ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span
            className={`h-px w-5 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-4 pb-6 sm:px-6 md:hidden">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`w-full py-3 text-left text-base font-medium transition-colors ${
                  activeId === link.id ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
