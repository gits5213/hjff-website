# Membership Form Setup Guide

This guide explains how the membership application form works and how to integrate it with payment processing.

## Form Flow

1. **User clicks "Apply for [Membership Type]"** on the Membership page
2. **Form loads** with the selected membership type pre-filled
3. **User completes the form** with all required fields
4. **Form validates** all inputs
5. **Form data is stored** (currently in localStorage for demo)
6. **User is redirected to Stripe** for payment processing

## Form Fields

The membership form collects:
- **Full Name** (required)
- **Beneficiary Name** (required)
- **Current Address** (required)
- **Member Phone Number** (required)
- **Beneficiary Phone Number** (required)
- **Email Address** (required)
- **Membership Type** (pre-filled, but can be changed)
- **Agreement Checkbox** (required) - Agreement with organization's purpose, mission, and vision

## Stripe Integration

### Current Setup (Payment Links)

The form currently redirects to a Stripe Payment Link. For better integration:

1. **Update Payment Link** in `app/membership/apply/page.tsx`:
   ```typescript
   const stripePaymentLink = 'https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE';
   ```

2. **Recommended: Use Stripe Checkout Session API**
   - Allows custom amounts based on membership type
   - Can include member information in metadata
   - Better payment tracking
   - Requires backend API route (not available with static export)

### For Static Sites (Current Setup)

Since this is a static site, the workflow is:
1. Form data stored in localStorage
2. Redirect to Stripe Payment Link
3. Admin verifies payment in Stripe Dashboard
4. Admin manually adds member to active members list

### For Dynamic Sites (Future Enhancement)

If you move to a hosted solution (Vercel, Netlify Functions, etc.):

1. Create API route: `app/api/create-checkout-session/route.ts`
2. Include member information in Stripe metadata
3. Use Stripe webhooks to automatically process successful payments
4. Automatically add members to the database/list after payment

## Adding Members to Active List

### Manual Process (Current - Static Site)

1. After payment is verified in Stripe Dashboard
2. Admin opens `app/members/page.tsx`
3. Adds member to `sampleMembers` array:
   ```typescript
   {
     id: 1,
     name: 'John Doe',
     membershipType: 'General',
     joinDate: '2024-12',
     role: undefined,
     active: true,
   }
   ```

### Automated Process (Future - With Backend)

1. Stripe webhook receives payment confirmation
2. Backend API processes the webhook
3. Retrieves member data from form submission
4. Adds member to database
5. Active members list automatically updates

## Form Data Storage

Currently, form data is stored in:
- **Browser localStorage** - For reference during development
- Form data should be sent to your backend/form service for processing

### Recommended: Use Form Submission Service

For static sites, use a service like:
- **Formspree** - Free tier available
- **EmailJS** - Send form data via email
- **Google Forms** - Simple form integration
- **Backend API** - If you have hosting with API support

### Example with Formspree

1. Sign up at formspree.io
2. Create a form endpoint
3. Update form submission in `app/membership/apply/page.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

## Payment Amounts

Different membership types may have different fees:
- **General Member**: One-time registration fee + monthly subscription
- **Life Member**: After 3 years of subscription
- **Founding/Honorary**: May be different amounts

Update your Stripe Payment Links to reflect different amounts, or create separate payment links for each membership type.

## Testing

1. Fill out the form with test data
2. Verify validation works correctly
3. Test the redirect to Stripe (use test mode)
4. Complete test payment
5. Verify form data was captured (check localStorage or your form service)

## Security & Privacy

- Form data should be handled securely
- Personal information should be encrypted
- Comply with privacy regulations
- Only collect necessary information
- Get explicit consent for data storage

## Next Steps

1. Set up your Stripe Payment Link
2. Configure form submission service (Formspree, EmailJS, etc.)
3. Test the complete flow
4. Set up process for adding members after payment verification
5. Consider moving to hosted solution for automated processing
