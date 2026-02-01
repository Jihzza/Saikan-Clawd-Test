import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { Container } from "@/components/site/Container";
import { Divider } from "@/components/site/Divider";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Noise } from "@/components/site/Noise";
import { Section } from "@/components/site/Section";
import { Stat } from "@/components/site/Stat";
import { MISSION, TEAM, VALUES, VENTURES } from "@/lib/saikan-data";

export default function HomePage() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
        <Noise />

        <Container>
          <div className="py-24">
            <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500">
              HOLDING COMPANY
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
              Build profitable companies.
              <span className="block text-zinc-400">Turn ideas into real products.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300">{MISSION}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/" variant="primary">
                Contact
              </Button>
              <Button href="/ventures/" variant="secondary">
                Explore ventures
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <Stat label="Ventures" value={`${VENTURES.length}+`} />
              <Stat label="Team" value={`${TEAM.length}+`} />
              <Stat label="Mode" value="Quiet execution" />
            </div>
          </div>
        </Container>
      </main>

      <Divider />

      {/* About */}
      <Section title="About" eyebrow="SAIKAN">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="leading-7 text-zinc-300">
            Saikan is designed to be a quiet force behind strong products — bringing tools,
            resources, and manpower to founders who want to ship.
          </p>
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
            <h3 className="text-sm font-semibold text-zinc-50">How we work</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Small teams. Clear ownership. Tight feedback loops. We prefer calm velocity over
              loud ambition.
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
              href={v.website ?? "#"}
              external
              title={v.name}
              subtitle={v.tagline}
              image={v.image}
              variant="venture"
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
              variant="person"
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
