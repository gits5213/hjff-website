'use client';

import { useState } from 'react';
import { Heart, CreditCard, Smartphone, Shield, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handleDonate = (donationAmount: string) => {
    // Stripe Payment Link - works with static sites (GitHub Pages)
    // Replace this URL with your actual Stripe Payment Link from your Stripe Dashboard
    // Get it from: Stripe Dashboard → Products → Payment Links → Copy Link
    const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || 'https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE';
    
    // Note: To prefill amounts, you'd need Stripe Checkout Session API (requires backend)
    // For static sites, Payment Links are the recommended approach
    // See STRIPE_SETUP.md for detailed setup instructions
    window.open(stripePaymentLink, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h1 className="heading-1 text-white mb-6">Support Our Mission</h1>
            <p className="text-xl text-primary-100">
              Your generous donation helps us create awareness, support community programs, and improve the quality of life for residents in New York State.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Stripe Donation Section */}
            <div className="bg-white border-2 border-primary-200 rounded-xl p-8 mb-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <CreditCard className="w-8 h-8 text-primary-600" />
                <h2 className="heading-2">Online Donation</h2>
              </div>
              
              <p className="text-body mb-6">
                Make a secure donation using your credit card, debit card, Apple Pay, or Google Pay. All donations are processed securely through Stripe.
              </p>

              {/* Preset Amounts */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Select an amount:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                        handleDonate(preset);
                      }}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                        amount === preset
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-700'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Or enter a custom amount:
                </label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500">$</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount('');
                        }}
                        placeholder="Enter amount"
                        min="1"
                        className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (customAmount && parseFloat(customAmount) > 0) {
                        handleDonate(customAmount);
                      }
                    }}
                    disabled={!customAmount || parseFloat(customAmount) <= 0}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    Donate
                  </button>
                </div>
              </div>

              {/* Quick Donate Button */}
              <button
                onClick={() => handleDonate('')}
                className="w-full btn-primary bg-primary-600 hover:bg-primary-700 text-lg py-4 flex items-center justify-center space-x-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>Donate with Stripe Checkout</span>
              </button>

              <div className="mt-4 flex items-start space-x-2 text-sm text-neutral-600">
                <Shield className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <p>
                  Your payment is secured by Stripe. We never store your credit card information.
                </p>
              </div>
            </div>

            {/* Zelle Option */}
            <div className="bg-accent-50 border-2 border-accent-200 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Smartphone className="w-8 h-8 text-accent-600" />
                <h2 className="heading-2">Donate via Zelle</h2>
              </div>
              
              <p className="text-body mb-4">
                Prefer to use Zelle? You can send your donation directly to our organization.
              </p>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-sm text-neutral-600 mb-2">Send to:</p>
                <p className="text-xl font-semibold text-neutral-900 mb-4">
                  donate@hjffinc.org
                </p>
                <p className="text-sm text-neutral-600">
                  Please include your name and email in the memo so we can send you a receipt.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Info className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-600">
                    <strong>Note:</strong> Zelle donations require manual processing. Receipts will be sent within 5-7 business days. For automatic receipts and tax documentation, please use our online donation option above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-6">Your Impact</h2>
              <p className="text-body text-lg">
                Every donation, no matter the size, makes a meaningful difference in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">Support Programs</h3>
                <p className="text-neutral-600">
                  Fund educational seminars, job training, and community support services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">Tax Deductible</h3>
                <p className="text-neutral-600">
                  All donations are tax-deductible. We're a 501(c)(3) charitable organization.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">Automatic Receipts</h3>
                <p className="text-neutral-600">
                  Receive instant receipts via email for your tax records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Questions About Donating?</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us if you have any questions about making a donation or would like to discuss other ways to support our mission.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
