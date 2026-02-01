import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide">
          <Image src="/logo.svg" alt="Saikan" width={96} height={20} priority />
        </Link>

        <nav className="flex items-center gap-5 text-sm text-zinc-700">
          <Link href="/ventures/" className="hover:text-zinc-950">
            Ventures
          </Link>
          <Link href="/team/" className="hover:text-zinc-950">
            Team
          </Link>
          <Link href="/contact/" className="hover:text-zinc-950">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
