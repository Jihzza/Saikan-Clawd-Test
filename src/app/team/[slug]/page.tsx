import { Button } from "@/components/site/Button";
import { Container } from "@/components/site/Container";
import { Divider } from "@/components/site/Divider";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Tag } from "@/components/site/Tag";
import { TEAM } from "@/lib/saikan-data";

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div>
        <Header />
        <main className="py-16">
          <Container>
            <h1 className="text-2xl font-semibold">Team member not found</h1>
            <div className="mt-6">
              <Button href="/team/" variant="secondary">
                Back to team
              </Button>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="py-16">
        <Container>
          <p className="text-xs font-semibold tracking-widest text-zinc-500">TEAM</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {member.name}
          </h1>
          <p className="mt-4 text-zinc-600">{member.title}</p>

          <Divider />

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h2 className="text-sm font-semibold">Bio</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">{member.bio}</p>
              </div>

              {member.focus?.length ? (
                <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
                  <h2 className="text-sm font-semibold">Focus</h2>
                  <ul className="mt-3 list-disc pl-5 text-sm leading-7 text-zinc-700">
                    {member.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-sm font-semibold">Connect</h2>
              <div className="mt-3 grid gap-2 text-sm">
                {member.links?.length ? (
                  member.links.map((l) => (
                    <a key={l.href} href={l.href} className="underline underline-offset-4">
                      {l.label}
                    </a>
                  ))
                ) : (
                  <p className="text-zinc-600">Contact via Saikan.</p>
                )}
              </div>

              <div className="mt-8">
                <Button href="/contact/" variant="primary" className="w-full">
                  Contact
                </Button>
              </div>

              <div className="mt-3">
                <Button href="/team/" variant="secondary" className="w-full">
                  Back to team
                </Button>
              </div>

              <div className="mt-8">
                <div className="text-xs font-semibold tracking-widest text-zinc-500">VALUES</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Execution", "Integrity", "Ownership"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
