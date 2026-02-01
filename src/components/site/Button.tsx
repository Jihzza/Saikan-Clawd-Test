import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-zinc-950 text-white hover:bg-zinc-800"
      : "border border-zinc-300 text-zinc-950 hover:border-zinc-950";

  return (
    <Link href={href} className={[base, styles, className].filter(Boolean).join(" ")}>
      {children}
    </Link>
  );
}
