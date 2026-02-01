import { Button } from "@/components/site/Button";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MiniCard } from "@/components/site/MiniCard";
import { VENTURES } from "@/lib/saikan-data";

export default function VenturesPage() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">Ventures</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">
          A portfolio of products and experiments — built with a focus on execution and sustainable
          value.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VENTURES.map((v) => (
            <MiniCard
              key={v.slug}
              href={`/ventures/${v.slug}/`}
              title={v.name}
              subtitle={v.tagline}
              image={v.image}
              variant="venture"
            />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/contact/" variant="secondary">
            Propose a venture
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
