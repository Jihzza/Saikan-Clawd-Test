import { Button } from "@/components/site/Button";
import { Container } from "@/components/site/Container";
import { Divider } from "@/components/site/Divider";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Tag } from "@/components/site/Tag";
import { VENTURES } from "@/lib/saikan-data";

export function generateStaticParams() {
  return VENTURES.map((v) => ({ slug: v.slug }));
}

export default async function VenturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venture = VENTURES.find((v) => v.slug === slug);

  if (!venture) {
    return (
      <div>
        <Header />
        <main className="py-16">
          <Container>
            <h1 className="text-2xl font-semibold">Venture not found</h1>
            <div className="mt-6">
              <Button href="/ventures/" variant="secondary">
                Back to ventures
              </Button>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  const status = venture.status ? venture.status.toUpperCase() : "VENTURE";

  return (
    <div>
      <Header />
      <main className="py-16">
        <Container>
          <p className="text-xs font-semibold tracking-widest text-zinc-500">{status}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {venture.name}
          </h1>
          <p className="mt-4 text-zinc-600">{venture.tagline}</p>

          <Divider />

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h2 className="text-sm font-semibold">Overview</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">{venture.summary}</p>
              </div>

              {venture.highlights?.length ? (
                <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
                  <h2 className="text-sm font-semibold">Highlights</h2>
                  <ul className="mt-3 list-disc pl-5 text-sm leading-7 text-zinc-700">
                    {venture.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-sm font-semibold">Focus</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {(venture.focus ?? ["Product", "Execution"]).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/contact/" variant="primary" className="w-full">
                  Talk to us
                </Button>
              </div>

              <div className="mt-3">
                <Button href="/ventures/" variant="secondary" className="w-full">
                  Back to ventures
                </Button>
              </div>

              {venture.link ? (
                <p className="mt-6 text-xs text-zinc-500">
                  External link: {" "}
                  <a className="underline underline-offset-4" href={venture.link.href}>
                    {venture.link.label}
                  </a>
                </p>
              ) : null}
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
