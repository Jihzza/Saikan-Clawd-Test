import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { VENTURES } from "@/lib/saikan-data";

export default function VenturesPage() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Ventures</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          A portfolio of products and experiments — built with a focus on execution and sustainable
          value.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {VENTURES.map((v) => (
            <Link
              key={v.slug}
              href={`/ventures/${v.slug}/`}
              className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-950"
            >
              <h2 className="text-sm font-semibold">{v.name}</h2>
              <p className="mt-2 text-sm text-zinc-600">{v.tagline}</p>
              <p className="mt-4 text-sm leading-7 text-zinc-700">{v.summary}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
