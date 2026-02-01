import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-zinc-600">
          Send a message and we’ll get back to you. (No hype. No spam.)
        </p>

        {/* Netlify Forms: works on deploy when hosted on Netlify */}
        <form
          className="mt-10 grid gap-4"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label className="grid gap-2">
            <span className="text-sm font-semibold">Name</span>
            <input
              name="name"
              required
              className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold">Email</span>
            <input
              type="email"
              name="email"
              required
              className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Send
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
