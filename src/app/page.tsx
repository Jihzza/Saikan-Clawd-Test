import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Section } from "@/components/site/Section";
import { MISSION, TEAM, VALUES, VENTURES } from "@/lib/saikan-data";

export default function HomePage() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <div className="py-20">
          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500">
            HOLDING COMPANY
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Build profitable companies. Turn ideas into real products.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            {MISSION}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Contact
            </Link>
            <Link
              href="/ventures/"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-950 hover:border-zinc-950"
            >
              Explore ventures
            </Link>
          </div>
        </div>
      </main>

      {/* About */}
      <Section title="About" eyebrow="SAIKAN">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-zinc-700 leading-7">
            Saikan is designed to be a quiet force behind strong products — bringing tools,
            resources, and manpower to founders who want to ship.
          </p>
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-sm font-semibold">Mission</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700">{MISSION}</p>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section title="What we do" eyebrow="CAPABILITIES">
        <div className="grid gap-4 md:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="text-sm font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ventures */}
      <Section title="Ventures" eyebrow="PORTFOLIO">
        <div className="grid gap-4 md:grid-cols-2">
          {VENTURES.map((v) => (
            <Link
              key={v.slug}
              href={`/ventures/${v.slug}/`}
              className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-950"
            >
              <h3 className="text-sm font-semibold">{v.name}</h3>
              <p className="mt-2 text-sm text-zinc-600">{v.tagline}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/ventures/"
            className="text-sm font-semibold underline underline-offset-4"
          >
            View all ventures
          </Link>
        </div>
      </Section>

      {/* Team */}
      <Section title="Team" eyebrow="PEOPLE">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <Link
              key={m.slug}
              href={`/team/${m.slug}/`}
              className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-950"
            >
              <h3 className="text-sm font-semibold">{m.name}</h3>
              <p className="mt-2 text-sm text-zinc-600">{m.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/team/"
            className="text-sm font-semibold underline underline-offset-4"
          >
            View the full team
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
