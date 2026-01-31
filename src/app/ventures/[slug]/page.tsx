import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
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
        <main className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-semibold">Venture not found</h1>
          <p className="mt-4">
            <Link href="/ventures/" className="underline underline-offset-4">
              Back to ventures
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
        <p className="text-xs font-semibold tracking-widest text-zinc-500">VENTURE</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{venture.name}</h1>
        <p className="mt-4 text-zinc-600">{venture.tagline}</p>

        <div className="mt-10 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">Overview</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-700">{venture.summary}</p>
        </div>

        <div className="mt-10">
          <Link href="/ventures/" className="text-sm font-semibold underline underline-offset-4">
            Back to ventures
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
