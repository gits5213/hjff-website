"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Get in touch with HJFF. We're here to answer your questions and help you get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-[#065F46] mb-6">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 md:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-green-700 font-semibold text-lg mb-2">Thank you!</div>
                  <p className="text-green-600">Your message has been sent. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#166534] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#166534] focus:border-[#166534] transition-all duration-200 bg-white text-[#111827] placeholder:text-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#166534] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#166534] focus:border-[#166534] transition-all duration-200 bg-white text-[#111827] placeholder:text-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#166534] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#166534] focus:border-[#166534] transition-all duration-200 bg-white text-[#111827] placeholder:text-gray-400"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#166534] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#166534] focus:border-[#166534] transition-all duration-200 bg-white text-[#111827] cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="welfare">Welfare & Support</option>
                      <option value="events">Events & Activities</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#166534] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#166534] focus:border-[#166534] transition-all duration-200 bg-white text-[#111827] placeholder:text-gray-400 resize-y"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card variant="elevated">
              <h2 className="font-heading text-lg md:text-xl font-bold text-[#166534] mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#166534] mb-1 text-sm">Address</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        Queens, NY Headquarters<br />
                        (Specific address available upon request)
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#166534] mb-1 text-sm">Email</h3>
                      <a href="mailto:info@hjff.org" className="text-sm text-[#0D9488] hover:text-[#166534] transition-colors">
                        info@hjff.org
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#166534] mb-1 text-sm">Phone</h3>
                      <a href="tel:+1234567890" className="text-sm text-[#0D9488] hover:text-[#166534] transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#166534] mb-1 text-sm">Office Hours</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <Card variant="outlined">
              <h2 className="font-heading text-lg md:text-xl font-bold text-[#166534] mb-4">
                Quick Links
              </h2>
              <ul className="space-y-2.5">
                <li>
                  <a href="/membership" className="flex items-center text-sm text-[#0D9488] hover:text-[#166534] transition-colors group">
                    <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Become a Member
                  </a>
                </li>
                <li>
                  <a href="/programs/welfare" className="flex items-center text-sm text-[#0D9488] hover:text-[#166534] transition-colors group">
                    <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Welfare & Support
                  </a>
                </li>
                <li>
                  <a href="/get-involved" className="flex items-center text-sm text-[#0D9488] hover:text-[#166534] transition-colors group">
                    <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Volunteer Opportunities
                  </a>
                </li>
                <li>
                  <a href="/donate" className="flex items-center text-sm text-[#0D9488] hover:text-[#166534] transition-colors group">
                    <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Make a Donation
                  </a>
                </li>
                <li>
                  <a href="/events/annual-picnic" className="flex items-center text-sm text-[#0D9488] hover:text-[#166534] transition-colors group">
                    <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Annual Picnic Info
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
