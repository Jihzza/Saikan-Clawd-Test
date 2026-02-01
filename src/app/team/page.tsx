import { MiniCard } from "@/components/site/MiniCard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { TEAM } from "@/lib/saikan-data";

export default function TeamPage() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">Team</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">
          A small team with strong execution — focused on building products and compounding
          leverage.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <MiniCard
              key={m.slug}
              href={`/team/${m.slug}/`}
              title={m.name}
              subtitle={m.title}
              image={m.image}
              variant="person"
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
