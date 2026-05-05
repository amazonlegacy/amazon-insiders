import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Amazon Insiders — La Formation",
              description:
                "8 modules · 40+ leçons · Accès à vie · Communauté privée · Mises à jour incluses",
              images: [`${baseUrl}/next.svg`],
            },
            unit_amount: 49700, // 497€ en centimes
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/formation/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/formation/annulation`,
      locale: "fr",
      billing_address_collection: "auto",
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement." },
      { status: 500 }
    );
  }
}
