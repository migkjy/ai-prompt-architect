import Link from "next/link";
import { notFound } from "next/navigation";
import { products, bundle } from "@/lib/products";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.title} — AI Prompt Architect`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Product Hero */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/50 via-navy to-navy-dark" />
        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            href="/#products"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold"
          >
            &larr; All Prompt Packs
          </Link>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: Info */}
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gold">
                Based on &quot;{product.book}&quot; by {product.author}
              </p>
              <h1 className="mb-6 text-3xl font-bold text-text-primary sm:text-4xl">
                {product.title}
              </h1>
              <p className="mb-8 text-lg text-text-secondary">
                {product.description}
              </p>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold text-text-primary">
                  ${product.price}
                </span>
                <a
                  href={product.checkoutUrl}
                  className="rounded-lg bg-gold px-8 py-3 font-semibold text-navy-dark transition-colors hover:bg-gold-light"
                >
                  Buy This Pack
                </a>
              </div>
            </div>

            {/* Right: Features */}
            <div className="rounded-xl border border-white/10 bg-surface p-8">
              <h3 className="mb-4 text-lg font-bold text-text-primary">
                What&apos;s Inside
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="mt-0.5 text-gold">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Pack */}
      <section className="bg-navy-dark py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-text-primary sm:text-3xl">
            Why This Pack?
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gold">
                The Problem
              </h3>
              <p className="text-text-secondary">
                You ask AI for a {product.title.replace("AI ", "").toLowerCase()}{" "}
                strategy and get surface-level advice. Generic templates,
                obvious suggestions, nothing you couldn&apos;t find in a quick
                Google search. AI can process information — but without a
                framework, it has no strategic direction.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gold">
                The Cause
              </h3>
              <p className="text-text-secondary">
                AI doesn&apos;t know what &quot;good&quot; looks like unless you
                tell it. When you ask an open-ended question, it draws from
                everything — including mediocre advice, outdated tactics, and
                contradictory strategies. The result is average output from an
                above-average tool.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gold">
                The Solution
              </h3>
              <p className="text-text-secondary">
                This prompt pack installs {product.author}&apos;s{" "}
                &quot;{product.book}&quot; framework directly into your AI
                workflow. Every prompt is designed so AI operates within a proven
                system — giving you specific, actionable, expert-level output
                instead of generic filler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Upsell */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-xl border border-gold/20 bg-surface p-8 shadow-[0_0_40px_rgba(226,183,20,0.05)]">
            <h3 className="mb-2 text-xl font-bold text-text-primary">
              Want all 6 packs?
            </h3>
            <p className="mb-6 text-text-secondary">
              Get the complete AI Prompt Architect Bundle for ${bundle.price}{" "}
              instead of ${bundle.originalPrice}. Save 17%.
            </p>
            <Link
              href="/bundle"
              className="inline-block rounded-lg bg-gold px-8 py-3 font-semibold text-navy-dark transition-colors hover:bg-gold-light"
            >
              See the Bundle
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
