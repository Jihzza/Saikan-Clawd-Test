import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/site/Button";
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
        <main className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-2xl font-semibold text-zinc-50">Team member not found</h1>
          <div className="mt-6">
            <Button href="/team/" variant="secondary">
              Back to team
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/40">
              <div className="relative aspect-square bg-zinc-950">
                <Image
                  src={member.image ?? "/assets/team/daniel-alves.jpg"}
                  alt=""
                  fill
                  className="object-cover grayscale opacity-90"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold tracking-widest text-zinc-500">VALUES</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Execution", "Integrity", "Ownership"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-zinc-500">TEAM</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50">
              {member.name}
            </h1>
            <p className="mt-4 text-zinc-400">{member.title}</p>

            <Divider />

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
              <h2 className="text-sm font-semibold text-zinc-50">Bio</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{member.bio}</p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/" variant="primary">
                Contact
              </Button>
              <Button href="/team/" variant="secondary">
                Back to team
              </Button>
            </div>

            <div className="mt-10">
              <Link
                href="/team/"
                className="text-sm font-semibold underline underline-offset-4 text-zinc-200"
              >
                Back to team
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
