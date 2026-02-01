import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Section } from "@/components/site/Section";
import { MISSION, TEAM, VALUES, VENTURES } from "@/lib/saikan-data";

export default function HomePage() {
  return (
    <div>
      <Header />

      {/* Hero (new layout: high-contrast dark, layered glow, editorial type) */}
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-white/4 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-end gap-10 py-24 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-4 text-xs font-semibold tracking-widest text-zinc-500">
                SAIKAN HOLDING
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
                Build quietly.
                <span className="block text-zinc-400">Win consistently.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300">
                {MISSION}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact/" variant="primary">
                  Contact
                </Button>
                <Button href="/ventures/" variant="secondary">
                  Explore ventures
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
                <p className="text-xs font-semibold tracking-widest text-zinc-500">OPERATING MODE</p>
                <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                  <li>Small teams, clear ownership</li>
                  <li>Shipping & iteration</li>
                  <li>Systems that compound</li>
                </ul>
                <p className="mt-6 text-xs text-zinc-500">
                  Simple doesn’t mean empty. It means deliberate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About */}
      <Section title="About" eyebrow="SAIKAN">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
            <h3 className="text-sm font-semibold text-zinc-50">What we build</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              Profitable products with real users. We focus on fundamentals: distribution,
              retention, and strong execution.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
            <h3 className="text-sm font-semibold text-zinc-50">How we help</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              We partner with entrepreneurs to turn ideas into shipped software — with tools,
              resources, and manpower.
            </p>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section title="What we do" eyebrow="CAPABILITIES">
        <div className="grid gap-4 md:grid-cols-2">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6"
            >
              <h3 className="text-sm font-semibold text-zinc-50">{v.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ventures */}
      <Section title="Ventures" eyebrow="PORTFOLIO">
        <div className="grid gap-4 md:grid-cols-2">
          {VENTURES.map((v) => (
            <Card
              key={v.slug}
              href={`/ventures/${v.slug}/`}
              title={v.name}
              subtitle={v.tagline}
              image={v.image}
            >
              <span className="text-zinc-400">{v.summary}</span>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/ventures/" variant="secondary" className="px-5 py-2">
            View all ventures
          </Button>
        </div>
      </Section>

      {/* Team */}
      <Section title="Team" eyebrow="PEOPLE">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <Card
              key={m.slug}
              href={`/team/${m.slug}/`}
              title={m.name}
              subtitle={m.title}
              image={m.image}
            />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/team/" variant="secondary" className="px-5 py-2">
            View the full team
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
