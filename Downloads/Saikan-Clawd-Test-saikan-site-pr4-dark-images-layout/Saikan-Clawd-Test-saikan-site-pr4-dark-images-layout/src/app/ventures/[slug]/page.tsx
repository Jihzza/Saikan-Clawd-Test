import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/site/Button";
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
        <main className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-semibold text-zinc-50">Venture not found</h1>
          <div className="mt-6">
            <Button href="/ventures/" variant="secondary">
              Back to ventures
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
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-zinc-500">VENTURE</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50">
              {venture.name}
            </h1>
            <p className="mt-4 text-zinc-400">{venture.tagline}</p>

            <Divider />

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
              <h2 className="text-sm font-semibold text-zinc-50">Overview</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{venture.summary}</p>
            </div>

            {venture.highlights?.length ? (
              <div className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
                <h2 className="text-sm font-semibold text-zinc-50">Highlights</h2>
                <ul className="mt-3 list-disc pl-5 text-sm leading-7 text-zinc-300">
                  {venture.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-10">
              <Link href="/ventures/" className="text-sm font-semibold underline underline-offset-4">
                Back to ventures
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/40">
              <div className="relative aspect-[16/10] bg-zinc-950">
                <Image
                  src={venture.image ?? "/placeholders/venture.svg"}
                  alt=""
                  fill
                  className="object-cover opacity-90"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold tracking-widest text-zinc-500">FOCUS</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(venture.focus ?? ["Product", "Execution"]).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-8 grid gap-3">
                  <Button href="/contact/" variant="primary" className="w-full">
                    Talk to us
                  </Button>
                  <Button href="/ventures/" variant="secondary" className="w-full">
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
