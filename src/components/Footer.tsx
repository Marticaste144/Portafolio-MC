import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <span>
          {profile.name} · {new Date().getFullYear()}
        </span>
        <span>Hecho con React, TypeScript y Tailwind CSS.</span>
      </div>
    </footer>
  );
}
