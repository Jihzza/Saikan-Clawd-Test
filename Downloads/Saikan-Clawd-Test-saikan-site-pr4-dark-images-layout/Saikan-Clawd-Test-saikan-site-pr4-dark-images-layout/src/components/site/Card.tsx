import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function Card({
  href,
  title,
  subtitle,
  image,
  children,
}: {
  href: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:border-zinc-600"
    >
      {image ? (
        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-90 transition group-hover:opacity-100"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      ) : null}

      <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
      {subtitle ? <p className="mt-2 text-sm text-zinc-400">{subtitle}</p> : null}
      {children ? <div className="mt-4 text-sm leading-7 text-zinc-300">{children}</div> : null}
      <div className="mt-6 text-xs font-semibold tracking-widest text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100">
        VIEW
      </div>
    </Link>
  );
}
