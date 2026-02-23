import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchase Confirmed — AI Prompt Architect",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
          <span className="text-3xl text-gold">&#10003;</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-text-primary">
          Thank You!
        </h1>
        <p className="mb-2 text-lg text-text-secondary">
          Your purchase is confirmed.
        </p>
        <p className="mb-8 text-text-secondary">
          Check your email for download links. The prompt packs will be
          delivered to the address you used at checkout.
        </p>
        <div className="rounded-xl border border-white/10 bg-surface p-6 text-left mb-8">
          <h2 className="mb-3 font-semibold text-text-primary">
            What&apos;s next?
          </h2>
          <ol className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 font-bold text-gold">1.</span>
              Open the confirmation email from Lemon Squeezy.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 font-bold text-gold">2.</span>
              Download your prompt pack files.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 font-bold text-gold">3.</span>
              Open your AI tool of choice and start using the frameworks.
            </li>
          </ol>
        </div>
        <Link
          href="/"
          className="inline-block rounded-lg border border-gold/30 px-6 py-3 font-semibold text-gold transition-colors hover:border-gold hover:bg-gold/10"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
