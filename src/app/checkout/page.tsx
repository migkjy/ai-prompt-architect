"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { products, bundle } from "@/lib/products";
import Link from "next/link";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product");
  const isBundle = searchParams.get("bundle") === "true";

  const [email, setEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const product = productSlug ? products.find((p) => p.slug === productSlug) : null;
  const isValidRequest = isBundle || !!product;

  const title = isBundle ? bundle.title : product?.title ?? "";
  const price = isBundle ? bundle.price : product?.price ?? 0;

  if (!isValidRequest) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-text-secondary">Product not found.</p>
          <Link href="/" className="text-gold hover:underline">
            Browse all packs
          </Link>
        </div>
      </div>
    );
  }

  async function handleProceed() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isBundle ? { bundle: true } : { productSlug }),
      });
      const data = await res.json() as { url?: string; comingSoon?: boolean };
      if (data.url) {
        window.location.href = data.url;
      } else if (data.comingSoon) {
        setShowComingSoon(true);
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setWaitlistSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-lg px-6 py-32">
      <div className="rounded-xl border border-white/10 bg-surface p-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gold">
          Order Summary
        </p>
        <h1 className="mb-6 text-2xl font-bold text-text-primary">{title}</h1>

        <div className="mb-8 flex items-center justify-between rounded-lg border border-white/10 bg-navy px-4 py-4">
          <span className="text-text-secondary">Total</span>
          <span className="text-2xl font-bold text-text-primary">
            ${price.toFixed(2)}
          </span>
        </div>

        {!showComingSoon && (
          <button
            onClick={handleProceed}
            disabled={loading}
            className="w-full rounded-lg bg-gold py-4 font-semibold text-navy-dark transition-colors hover:bg-gold-light disabled:opacity-60"
          >
            {loading ? "Redirecting..." : "Proceed to Payment"}
          </button>
        )}

        {showComingSoon && !waitlistSubmitted && (
          <div>
            <div className="mb-6 rounded-lg border border-gold/20 bg-gold/10 p-4 text-center">
              <p className="font-semibold text-gold">Coming Soon</p>
              <p className="mt-1 text-sm text-text-secondary">
                Checkout is almost ready. Join the waitlist to be first.
              </p>
            </div>
            <form onSubmit={handleWaitlist} className="flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-text-primary placeholder:text-text-secondary/50 outline-none focus:border-gold/50"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-gold py-3 font-semibold text-navy-dark transition-colors hover:bg-gold-light"
              >
                Notify Me
              </button>
            </form>
          </div>
        )}

        {showComingSoon && waitlistSubmitted && (
          <div className="rounded-lg border border-gold/20 bg-gold/10 p-6 text-center">
            <p className="font-semibold text-gold">You&apos;re on the list!</p>
            <p className="mt-2 text-sm text-text-secondary">
              We&apos;ll notify you the moment checkout goes live.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
