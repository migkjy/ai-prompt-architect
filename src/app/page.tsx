import Link from "next/link";
import { products, bundle } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/50 via-navy to-navy-dark" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            Prompt Packs Built on Proven Frameworks
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            Give Your AI a Framework.{" "}
            <span className="gradient-gold">Get Consistent Results.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary">
            Most people ask AI open-ended questions and get generic answers.
            These prompt packs embed proven authors&apos; frameworks as
            AI&apos;s operating system — so it doesn&apos;t guess, it follows a
            system.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="rounded-lg border border-gold/30 px-8 py-3 font-semibold text-gold transition-colors hover:border-gold hover:bg-gold/10"
            >
              See the Prompt Packs
            </a>
            <Link
              href="/checkout?bundle=true"
              className="animate-pulse-subtle rounded-lg bg-gold px-8 py-3 font-semibold text-navy-dark transition-colors hover:bg-gold-light"
            >
              Get All 6 Packs — ${bundle.price}
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-navy-dark py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
            Same Question. <span className="text-gold">Different Results.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-secondary">
            The difference isn&apos;t the AI model. It&apos;s the framework
            behind the prompt.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-xl border border-white/10 bg-surface p-8">
              <div className="mb-4 inline-block rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
                Without Framework
              </div>
              <p className="mb-3 text-lg font-semibold text-text-primary">
                &quot;Build me a sales funnel&quot;
              </p>
              <p className="text-text-secondary">
                Generic 5-step funnel anyone could Google. Vague advice like
                &quot;create a landing page&quot; and &quot;add a call to
                action.&quot; No strategy, no sequencing, no psychology.
              </p>
            </div>
            {/* After */}
            <div className="rounded-xl border border-gold/20 bg-surface p-8 shadow-[0_0_30px_rgba(226,183,20,0.05)]">
              <div className="mb-4 inline-block rounded-full bg-gold/10 px-3 py-1 text-sm font-medium text-gold">
                With Framework
              </div>
              <p className="mb-3 text-lg font-semibold text-text-primary">
                &quot;Build me a sales funnel using DotCom Secrets value
                ladder&quot;
              </p>
              <p className="text-text-secondary">
                Specific funnel with front-end offer, upsells, value ladder
                progression, and trip-wire strategy. AI follows Russell
                Brunson&apos;s proven architecture step-by-step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="bg-navy py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
            The Prompt Packs
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-secondary">
            Each pack installs a proven framework into your AI. Pick the one you
            need, or get them all.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                className="card-glow group flex flex-col rounded-xl border border-white/10 bg-surface p-6"
              >
                <div className="mb-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gold">
                    Based on &quot;{product.book}&quot; by {product.author}
                  </p>
                  <h3 className="text-xl font-bold text-text-primary">
                    {product.title}
                  </h3>
                </div>
                <p className="mb-4 flex-1 text-sm text-text-secondary">
                  {product.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {product.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-0.5 text-gold">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                  {product.features.length > 3 && (
                    <li className="text-sm text-text-secondary/60">
                      +{product.features.length - 3} more
                    </li>
                  )}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <Link
                    href={`/checkout?product=${product.slug}`}
                    className="rounded-lg bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
                  >
                    Buy Pack
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">
            When AI has standards,{" "}
            <span className="text-gold">the output changes.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-text-secondary">
            Stop feeding AI open-ended questions. Give it the frameworks used by
            the best marketers, copywriters, and strategists in the world.
          </p>
          <Link
            href="/checkout?bundle=true"
            className="animate-pulse-subtle inline-block rounded-lg bg-gold px-8 py-4 text-lg font-semibold text-navy-dark transition-colors hover:bg-gold-light"
          >
            Get the Complete Bundle — ${bundle.price}
          </Link>
          <p className="mt-4 text-sm text-text-secondary">
            All 6 packs + AI Skills Guide + Notion Templates. One purchase.
          </p>
        </div>
      </section>
    </>
  );
}
