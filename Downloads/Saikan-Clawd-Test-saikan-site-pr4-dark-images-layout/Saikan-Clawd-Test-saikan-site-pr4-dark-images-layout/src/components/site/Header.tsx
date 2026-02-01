import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-900/70 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide">
          <Image
            src="/logo.svg"
            alt="Saikan"
            width={96}
            height={20}
            priority
            className="invert"
          />
        </Link>

        <nav className="flex items-center gap-5 text-sm text-zinc-300">
          <Link href="/ventures/" className="hover:text-white">
            Ventures
          </Link>
          <Link href="/team/" className="hover:text-white">
            Team
          </Link>
          <Link href="/contact/" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
