import { NextRequest, NextResponse } from "next/server";
import { products, bundle } from "@/lib/products";

const STORE_SLUG = "ai-prompt-architect";

export async function POST(request: NextRequest) {
  const body = await request.json() as { productSlug?: string; bundle?: boolean };

  let variantId: string | undefined;
  let productName: string | undefined;

  if (body.bundle) {
    variantId = bundle.variantId;
    productName = bundle.title;
  } else if (body.productSlug) {
    const product = products.find((p) => p.slug === body.productSlug);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    variantId = product.variantId;
    productName = product.title;
  } else {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!variantId) {
    return NextResponse.json(
      { comingSoon: true, productName },
      { status: 200 }
    );
  }

  const checkoutUrl = `https://${STORE_SLUG}.lemonsqueezy.com/buy/${variantId}`;
  return NextResponse.json({ url: checkoutUrl });
}
