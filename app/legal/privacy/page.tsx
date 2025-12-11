import Link from 'next/link';

export default function PrivacyPolicy() {
  const lastUpdated = 'December 2024';

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-primary-100">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-8 text-sm text-neutral-500">
            Last Updated: {lastUpdated}
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="heading-2 mb-4">Introduction</h2>
              <p className="text-body mb-4">
                Hollis Jamaica Friends and Family Inc. ("HJFF," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
              </p>
              <p className="text-body">
                By using our website or services, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="heading-3 text-xl mb-2">Personal Information</h3>
                  <p className="text-body mb-2">We may collect personal information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc list-inside space-y-1 text-body ml-4">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Membership information</li>
                    <li>Payment information (processed through secure third-party payment processors)</li>
                    <li>Information provided when you contact us or request services</li>
                    <li>Demographic information for program participation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="heading-3 text-xl mb-2">Automatically Collected Information</h3>
                  <p className="text-body mb-2">When you visit our website, we may automatically collect certain information, including:</p>
                  <ul className="list-disc list-inside space-y-1 text-body ml-4">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-2 mb-4">How We Use Your Information</h2>
              <p className="text-body mb-2">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-1 text-body ml-4">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing membership applications and payments</li>
                <li>Communicating with you about our programs, events, and services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Sending newsletters, updates, and promotional materials (with your consent)</li>
                <li>Analyzing website usage and trends to improve user experience</li>
                <li>Complying with legal obligations</li>
                <li>Protecting our rights and preventing fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-body mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 text-body ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, privacy, safety, or property, or that of others.</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Data Security</h2>
              <p className="text-body">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Your Rights and Choices</h2>
              <p className="text-body mb-2">You have certain rights regarding your personal information, including:</p>
              <ul className="list-disc list-inside space-y-1 text-body ml-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to restrict processing of your information</li>
              </ul>
              <p className="text-body mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-body">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Note that disabling cookies may affect certain functionalities of our website.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Children's Privacy</h2>
              <p className="text-body">
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-body">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Contact Us</h2>
              <p className="text-body mb-2">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <p className="text-body mb-2">
                  <strong>Hollis Jamaica Friends and Family Inc.</strong>
                </p>
                <p className="text-body mb-2">
                  Email: <a href="mailto:info@hjffinc.org" className="text-primary-600 hover:underline">info@hjffinc.org</a>
                </p>
                <p className="text-body">
                  Phone: <a href="tel:+12125551234" className="text-primary-600 hover:underline">(212) 555-1234</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <Link href="/contact" className="btn-primary">
            Contact Us with Questions
          </Link>
        </div>
      </section>
    </div>
  );
}
