import Link from "next/link";
import { products, bundle } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Prompt Architect Bundle — All 6 Packs",
  description: bundle.description,
};

export default function BundlePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-navy to-navy-dark" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            {bundle.subtitle}
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl">
            The Complete{" "}
            <span className="text-gold">AI Prompt Architect</span> Bundle
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary">
            {bundle.description}
          </p>
          <a
            href={bundle.checkoutUrl}
            className="inline-block rounded-lg bg-gold px-10 py-4 text-lg font-semibold text-navy-dark transition-colors hover:bg-gold-light"
          >
            Get the Complete Bundle — ${bundle.price}
          </a>
          <p className="mt-3 text-sm text-text-secondary">
            <span className="line-through">${bundle.originalPrice}</span>{" "}
            <span className="text-gold">Save 17%</span>
          </p>
        </div>
      </section>

      {/* What Each Pack Installs */}
      <section className="bg-navy-dark py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-text-primary sm:text-4xl">
            What Each Pack <span className="text-gold">Installs</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-secondary">
            Each pack gives your AI a different strategic axis. Together, they
            cover the full spectrum of online business execution.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                className="rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-gold/20"
              >
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gold">
                  {product.book} by {product.author}
                </p>
                <h3 className="mb-3 text-lg font-bold text-text-primary">
                  {product.title}
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-0.5 text-gold">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold text-text-primary sm:text-4xl">
            The <span className="text-gold">Value Stack</span>
          </h2>
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-surface px-6 py-4">
              <span className="text-text-secondary">
                6 best-selling business books (retail)
              </span>
              <span className="text-text-secondary line-through">~$120+</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-surface px-6 py-4">
              <span className="text-text-secondary">
                Framework-to-prompt conversion
              </span>
              <span className="text-text-secondary italic">
                Months of work
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-surface px-6 py-4">
              <span className="text-text-secondary">
                6 individual packs purchased separately
              </span>
              <span className="text-text-secondary line-through">
                ${bundle.originalPrice}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gold/30 bg-gold/10 px-6 py-5">
              <span className="text-lg font-bold text-text-primary">
                Your price today
              </span>
              <span className="text-3xl font-bold text-gold">
                ${bundle.price}
              </span>
            </div>
          </div>
          <a
            href={bundle.checkoutUrl}
            className="inline-block rounded-lg bg-gold px-10 py-4 text-lg font-semibold text-navy-dark transition-colors hover:bg-gold-light"
          >
            Get the Complete Bundle — ${bundle.price}
          </a>
        </div>
      </section>

      {/* Individual purchase note */}
      <section className="bg-navy-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-text-secondary">
            Only need one pack?{" "}
            <Link href="/#products" className="text-gold hover:underline">
              Browse individual packs
            </Link>{" "}
            starting at $9.99 each.
          </p>
        </div>
      </section>
    </>
  );
}
