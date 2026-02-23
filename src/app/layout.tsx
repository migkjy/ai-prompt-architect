import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ai-prompt-architect-nine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Prompt Architect — Framework-Powered Prompt Packs",
    template: "%s | AI Prompt Architect",
  },
  description:
    "Give your AI a framework. Get consistent results. Prompt packs built on proven business books by Jeff Walker, Russell Brunson, Jim Edwards, and Joe Pulizzi.",
  openGraph: {
    title: "AI Prompt Architect — Framework-Powered Prompt Packs",
    description:
      "Give your AI a framework. Get consistent results. Prompt packs built on proven business books.",
    url: siteUrl,
    siteName: "AI Prompt Architect",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Prompt Architect — Framework-Powered Prompt Packs",
    description:
      "Give your AI a framework. Get consistent results. Prompt packs built on proven business books.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "AI Prompt Architect",
                url: siteUrl,
                description:
                  "Framework-powered prompt packs built on proven business books.",
              }),
            }}
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-navy-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-bold text-text-primary">
          AI Prompt Architect
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="/#products"
            className="text-sm text-text-secondary transition-colors hover:text-gold"
          >
            Products
          </a>
          <a
            href="/bundle"
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-light"
          >
            Bundle
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-text-secondary">
        <p>&copy; {new Date().getFullYear()} AI Prompt Architect. All rights reserved.</p>
      </div>
    </footer>
  );
}
