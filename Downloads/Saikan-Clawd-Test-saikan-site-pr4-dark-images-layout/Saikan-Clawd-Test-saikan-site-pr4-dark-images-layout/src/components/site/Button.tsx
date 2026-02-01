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
      ? "bg-zinc-50 text-zinc-950 hover:bg-white"
      : "border border-zinc-700/60 text-zinc-50 hover:border-zinc-200";

  return (
    <Link href={href} className={[base, styles, className].filter(Boolean).join(" ")}>
      {children}
    </Link>
  );
}
