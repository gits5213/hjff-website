# Stripe Donation Setup Guide

This guide explains how to set up Stripe for accepting donations on your website.

## Option 1: Stripe Payment Links (Recommended for Static Sites)

Since this website is deployed as a static site on GitHub Pages, we use Stripe Payment Links which work without backend API routes.

### Steps:

1. **Create a Stripe Account**
   - Go to https://stripe.com
   - Sign up for a Stripe account
   - Complete the onboarding process

2. **Create a Payment Link**
   - In your Stripe Dashboard, go to **Products** → **Payment Links**
   - Click **Create Payment Link**
   - Set up the donation product:
     - Name: "Donation to HJFF Inc."
     - Description: "Support our mission to improve lives in New York"
     - Price: Set as "Customer enters custom amount" or create multiple preset amounts
     - Enable "Collect customer information"
   - Copy the Payment Link URL (e.g., `https://buy.stripe.com/xxxxx`)

3. **Update the Website**
   - Open `app/donate/page.tsx`
   - Find the line: `const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || 'https://buy.stripe.com/YOUR_PAYMENT_LINK';`
   - Replace `YOUR_PAYMENT_LINK` with your actual Stripe Payment Link URL
   - Or, better yet, add it as an environment variable:
     - Create a `.env.local` file (for local development)
     - Add: `NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/xxxxx`
     - For production, add this as an environment variable in your deployment platform

### Alternative: Environment Variables

For a more flexible setup, you can use environment variables:

1. Create `.env.local` for local development:
   ```
   NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your-payment-link
   ```

2. For GitHub Pages (static export), you'll need to hardcode it in the file since environment variables don't work with static exports.

3. Simply update the default value in `app/donate/page.tsx`:
   ```typescript
   const stripePaymentLink = 'https://buy.stripe.com/your-actual-payment-link';
   ```

## Option 2: Stripe Checkout with API Routes (For Hosted Solutions)

If you move to a hosted solution like Vercel, Netlify, or your own server, you can use Stripe Checkout with API routes for more control:

1. Install Stripe SDK:
   ```bash
   npm install stripe @stripe/stripe-js
   ```

2. Create API route: `app/api/create-checkout-session/route.ts`
3. Use Stripe Checkout Session API to create sessions dynamically
4. This allows preset amounts and custom amounts with better UX

## Zelle Setup

The donate page also includes a Zelle option:

1. **Set up Zelle Email**
   - Use an email like `donate@hjffinc.org` or your organization's email
   - Ensure this email is registered with Zelle in your bank account
   - Update the email in `app/donate/page.tsx` if needed

2. **Manual Processing**
   - Zelle donations require manual tracking
   - Match donations from bank statements
   - Send receipts manually (template provided in Stripe or create your own)

## Features Included

✅ **Stripe Payment Links** - Works with static sites, supports cards, Apple Pay, Google Pay
✅ **Preset donation amounts** - $25, $50, $100, $250, $500
✅ **Custom donation amounts** - Users can enter any amount
✅ **Zelle alternative** - For users who prefer bank transfers
✅ **Automatic receipts** - Stripe sends receipts automatically
✅ **Tax-deductible** - 501(c)(3) status ensures donations are tax-deductible
✅ **Secure** - All payments processed securely through Stripe

## Testing

1. Use Stripe Test Mode for development:
   - Create a test Payment Link
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date, any CVC

2. Switch to Live Mode for production:
   - Update to your live Payment Link
   - Ensure your Stripe account is activated

## Support

For Stripe-specific questions, visit: https://stripe.com/docs
For website integration issues, check the code comments in `app/donate/page.tsx`
