/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Stripe from "stripe";
export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.returnUrl) {
      return new Response("Return URL is required", { status: 400 });
    }

    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    await connectMongo();
    const user = await User.findById(session.user.id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const stripe = new Stripe(process.env.STRIPE_API_KEY);

    // Create a Stripe customer if one doesn't exist
    if (!user.customerId) {
      try {
        const customer = await stripe.customers.create({
          email: user.email,
          name: user.name,
          metadata: {
            userId: user._id.toString(),
          },
        });

        user.customerId = customer.id;
        await user.save();
      } catch (customerError) {
        console.log("Error creating customer:", customerError);
        return NextResponse.json(
          {
            error: "Failed to create Stripe customer",
          },
          { status: 500 }
        );
      }
    }

    const StripeCustomerPortal = await stripe.billingPortal.sessions.create({
      customer: user.customerId,
      return_url: body.returnUrl,
    });

    return NextResponse.json({ url: StripeCustomerPortal.url });
  } catch (error) {
    console.log("Checkout session error:", error);

    // Return a more specific error message based on the error
    if (error.type === "StripeInvalidRequestError") {
      return NextResponse.json(
        {
          error: `Stripe request error: ${error.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
