import { Button } from "@/components/site/Button";
import { Container } from "@/components/site/Container";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function ContactSuccessPage() {
  return (
    <div>
      <Header />
      <main className="py-16">
        <Container>
          <p className="text-xs font-semibold tracking-widest text-zinc-500">MESSAGE SENT</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Thanks.
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            We received your message and we’ll get back to you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="primary">
              Back home
            </Button>
            <Button href="/ventures/" variant="secondary">
              Explore ventures
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
