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

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <div className="py-20">
          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500">
            HOLDING COMPANY
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Quietly serious. Built to turn ideas into real products.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            {MISSION}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact/" variant="primary">
              Contact
            </Button>
            <Button href="/ventures/" variant="secondary">
              Explore ventures
            </Button>
          </div>
        </div>
      </main>

      {/* About */}
      <Section title="About" eyebrow="SAIKAN">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="leading-7 text-zinc-700">
            Saikan is a holding company designed to produce profitable companies and support
            entrepreneurs with tools, resources, and manpower — turning ideas into products.
          </p>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-sm font-semibold">Mission</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700">{MISSION}</p>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section title="What we do" eyebrow="CAPABILITIES">
        <div className="grid gap-4 md:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
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
            <Card key={v.slug} href={`/ventures/${v.slug}/`} title={v.name} subtitle={v.tagline} />
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
            <Card key={m.slug} href={`/team/${m.slug}/`} title={m.name} subtitle={m.title} />
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
