import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
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
        <main className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-semibold">Team member not found</h1>
          <p className="mt-4">
            <Link href="/team/" className="underline underline-offset-4">
              Back to team
            </Link>
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold tracking-widest text-zinc-500">TEAM</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{member.name}</h1>
        <p className="mt-4 text-zinc-600">{member.title}</p>

        <div className="mt-10 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">Bio</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-700">{member.bio}</p>
        </div>

        <div className="mt-10">
          <Link href="/team/" className="text-sm font-semibold underline underline-offset-4">
            Back to team
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
