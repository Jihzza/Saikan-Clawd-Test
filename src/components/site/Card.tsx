import Link from "next/link";
import { ReactNode } from "react";

export function Card({
  href,
  title,
  subtitle,
  children,
}: {
  href: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-950"
    >
      <h3 className="text-sm font-semibold">{title}</h3>
      {subtitle ? <p className="mt-2 text-sm text-zinc-600">{subtitle}</p> : null}
      {children ? (
        <div className="mt-4 text-sm leading-7 text-zinc-700">{children}</div>
      ) : null}
      <div className="mt-6 text-xs font-semibold tracking-widest text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100">
        VIEW
      </div>
    </Link>
  );
}
