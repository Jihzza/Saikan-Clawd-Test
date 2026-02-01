import { Button } from "@/components/site/Button";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">Contact</h1>
        <p className="mt-3 text-zinc-400">Send a message and we’ll get back to you.</p>

        {/* Netlify Forms: works on deploy when hosted on Netlify */}
        <form
          className="mt-10 grid gap-4"
          name="contact"
          method="POST"
          action="/contact/success/"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-zinc-200">Name</span>
            <input
              name="name"
              required
              className="rounded-xl border border-zinc-800/70 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-zinc-200"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-zinc-200">Email</span>
            <input
              type="email"
              name="email"
              required
              className="rounded-xl border border-zinc-800/70 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-zinc-200"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-zinc-200">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              className="rounded-xl border border-zinc-800/70 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-zinc-200"
            />
          </label>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button href="#" variant="primary" className="pointer-events-none opacity-0">
              spacer
            </Button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white"
            >
              Send
            </button>
          </div>

          <p className="text-xs text-zinc-500">No hype. No spam.</p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
