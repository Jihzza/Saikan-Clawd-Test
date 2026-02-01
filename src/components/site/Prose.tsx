import { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-zinc max-w-none prose-headings:tracking-tight prose-a:font-semibold prose-a:text-zinc-950 prose-a:underline prose-a:underline-offset-4">
      {children}
    </div>
  );
}
