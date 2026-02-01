import { ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">{title}</h2>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
