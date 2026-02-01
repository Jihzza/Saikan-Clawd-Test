import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { TEAM } from "@/lib/saikan-data";

export default function TeamPage() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Team</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          A small team with strong execution — focused on building products and compounding
          leverage.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <Link
              key={m.slug}
              href={`/team/${m.slug}/`}
              className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-950"
            >
              <h2 className="text-sm font-semibold">{m.name}</h2>
              <p className="mt-2 text-sm text-zinc-600">{m.title}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
