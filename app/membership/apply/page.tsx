'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  fullName: string;
  beneficiaryName: string;
  currentAddress: string;
  memberPhone: string;
  beneficiaryPhone: string;
  email: string;
  membershipType: string;
  agreeToTerms: boolean;
}

const membershipTypes = {
  'General Member': {
    name: 'General Member',
    description: 'One-time registration fee required. Monthly subscription for voting rights.',
  },
  'Life Member': {
    name: 'Life Member',
    description: 'Three years of regular monthly subscription payments.',
  },
  'Advisory Board Member': {
    name: 'Advisory Board Member',
    description: 'Appointed by Executive Board from general members.',
  },
  'Founding Member': {
    name: 'Founding Member',
    description: 'Original founding members of the organization.',
  },
  'Honorary Member': {
    name: 'Honorary Member',
    description: 'Distinguished persons honored by Executive Board.',
  },
};

export default function MembershipApply() {
  const searchParams = useSearchParams();
  const memberTypeParam = searchParams.get('type') || 'General Member';
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    beneficiaryName: '',
    currentAddress: '',
    memberPhone: '',
    beneficiaryPhone: '',
    email: '',
    membershipType: memberTypeParam,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, membershipType: memberTypeParam }));
  }, [memberTypeParam]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.beneficiaryName.trim()) {
      newErrors.beneficiaryName = 'Beneficiary name is required';
    }

    if (!formData.currentAddress.trim()) {
      newErrors.currentAddress = 'Current address is required';
    }

    if (!formData.memberPhone.trim()) {
      newErrors.memberPhone = 'Member phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.memberPhone)) {
      newErrors.memberPhone = 'Please enter a valid phone number';
    }

    if (!formData.beneficiaryPhone.trim()) {
      newErrors.beneficiaryPhone = 'Beneficiary phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.beneficiaryPhone)) {
      newErrors.beneficiaryPhone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Store form data in localStorage for reference
      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'pending_payment',
      };
      localStorage.setItem('membershipApplication', JSON.stringify(submissionData));

      // In production, you would send this to your backend or form service
      // Recommended: Use Formspree, EmailJS, or backend API to capture form data
      // Example with fetch to your form service:
      // await fetch('YOUR_FORM_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData),
      // });
      
      // Stripe Payment Link - replace with your actual payment link
      // For different membership types, create separate payment links or use Stripe Checkout API
      const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || 'https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE';
      
      // Note: For production, integrate with Stripe Checkout Session API
      // to include member information in metadata and proper amount based on membership type
      // After payment success, use Stripe webhooks to automatically add member to active list
      
      // Redirect to Stripe payment
      window.location.href = stripePaymentLink;
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name as keyof FormData]: undefined,
      }));
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="heading-2 mb-4">Application Submitted!</h2>
          <p className="text-body mb-6">
            Your membership application has been submitted successfully. You will be redirected to complete your payment.
          </p>
          <Link href="/membership" className="btn-primary">
            Back to Membership
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <Link href="/membership" className="inline-flex items-center space-x-2 text-primary-100 hover:text-white mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Membership</span>
          </Link>
          <h1 className="heading-1 text-white mb-4">Membership Application</h1>
          <p className="text-xl text-primary-100">
            {membershipTypes[formData.membershipType as keyof typeof membershipTypes]?.description || 'Complete the form below to apply for membership.'}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
            <p className="text-primary-900 font-semibold mb-2">Applying for: {formData.membershipType}</p>
            <p className="text-primary-700 text-sm">
              {membershipTypes[formData.membershipType as keyof typeof membershipTypes]?.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Membership Type */}
            <div>
              <label htmlFor="membershipType" className="block text-sm font-medium text-neutral-700 mb-2">
                Membership Type *
              </label>
              <select
                id="membershipType"
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                {Object.keys(membershipTypes).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${
                  errors.fullName ? 'border-red-500' : 'border-neutral-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Beneficiary Name */}
            <div>
              <label htmlFor="beneficiaryName" className="block text-sm font-medium text-neutral-700 mb-2">
                Beneficiary Name *
              </label>
              <input
                type="text"
                id="beneficiaryName"
                name="beneficiaryName"
                value={formData.beneficiaryName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${
                  errors.beneficiaryName ? 'border-red-500' : 'border-neutral-300'
                }`}
                placeholder="Enter beneficiary full name"
              />
              {errors.beneficiaryName && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.beneficiaryName}</span>
                </p>
              )}
            </div>

            {/* Current Address */}
            <div>
              <label htmlFor="currentAddress" className="block text-sm font-medium text-neutral-700 mb-2">
                Current Address *
              </label>
              <textarea
                id="currentAddress"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none ${
                  errors.currentAddress ? 'border-red-500' : 'border-neutral-300'
                }`}
                placeholder="Enter your current address"
              />
              {errors.currentAddress && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.currentAddress}</span>
                </p>
              )}
            </div>

            {/* Member Phone */}
            <div>
              <label htmlFor="memberPhone" className="block text-sm font-medium text-neutral-700 mb-2">
                Member Phone Number *
              </label>
              <input
                type="tel"
                id="memberPhone"
                name="memberPhone"
                value={formData.memberPhone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${
                  errors.memberPhone ? 'border-red-500' : 'border-neutral-300'
                }`}
                placeholder="(212) 555-1234"
              />
              {errors.memberPhone && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.memberPhone}</span>
                </p>
              )}
            </div>

            {/* Beneficiary Phone */}
            <div>
              <label htmlFor="beneficiaryPhone" className="block text-sm font-medium text-neutral-700 mb-2">
                Beneficiary Phone Number *
              </label>
              <input
                type="tel"
                id="beneficiaryPhone"
                name="beneficiaryPhone"
                value={formData.beneficiaryPhone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${
                  errors.beneficiaryPhone ? 'border-red-500' : 'border-neutral-300'
                }`}
                placeholder="(212) 555-1234"
              />
              {errors.beneficiaryPhone && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.beneficiaryPhone}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${
                  errors.email ? 'border-red-500' : 'border-neutral-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Agreement Checkbox */}
            <div>
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className={`mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 ${
                    errors.agreeToTerms ? 'border-red-500' : ''
                  }`}
                />
                <span className="text-sm text-neutral-700">
                  I agree with Hollis Jamaica Friends and Family Inc.&apos;s purpose, mission, and vision. 
                  I understand and accept the Constitution and By-Laws of the organization. *
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1 ml-8">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.agreeToTerms}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application & Continue to Payment'}
              </button>
              <p className="text-sm text-neutral-600 text-center mt-4">
                By submitting this form, you will be redirected to complete your membership payment via Stripe.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
