import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function Card({
  href,
  title,
  subtitle,
  image,
  variant = "venture",
  external,
  children,
}: {
  href: string;
  title: string;
  subtitle?: string;
  image?: string;
  variant?: "venture" | "person";
  external?: boolean;
  children?: ReactNode;
}) {
  const mediaClass = variant === "person" ? "aspect-square" : "aspect-[16/9]";

  const imageClass =
    variant === "person"
      ? "object-cover grayscale opacity-90 transition group-hover:opacity-100 group-hover:grayscale-0"
      : "object-contain p-10 opacity-90 transition group-hover:opacity-100";

  const className =
    "group overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:border-zinc-600";

  const inner = (
    <>
      {image ? (
        <div
          className={`relative mb-5 ${mediaClass} overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950`}
        >
          <Image
            src={image}
            alt=""
            fill
            className={imageClass}
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      ) : null}

      <h3 className="text-sm font-semibold tracking-tight text-zinc-50">{title}</h3>
      {subtitle ? <p className="mt-2 text-sm text-zinc-400">{subtitle}</p> : null}
      {children ? <div className="mt-4 text-sm leading-7 text-zinc-300">{children}</div> : null}
      <div className="mt-6 text-xs font-semibold tracking-widest text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100">
        VIEW
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

