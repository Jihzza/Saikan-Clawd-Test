import Image from "next/image";
import Link from "next/link";

export function MiniCard({
  href,
  title,
  subtitle,
  image,
  variant = "venture",
}: {
  href: string;
  title: string;
  subtitle?: string;
  image?: string;
  variant?: "venture" | "person";
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:border-zinc-600"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              className={
                variant === "person"
                  ? "object-cover grayscale opacity-90 transition group-hover:opacity-100 group-hover:grayscale-0"
                  : "object-contain p-2 opacity-90 transition group-hover:opacity-100"
              }
              sizes="48px"
            />
          ) : null}
        </div>

        <div className="min-w-0">
          <div className="truncate text-sm font-semibold tracking-tight text-zinc-50">
            {title}
          </div>
          {subtitle ? <div className="mt-1 truncate text-xs text-zinc-400">{subtitle}</div> : null}
        </div>
      </div>
    </Link>
  );
}
