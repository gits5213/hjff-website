import Link from 'next/link';

export default function TermsOfService() {
  const lastUpdated = 'December 2024';

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-primary-100">
            Please read these terms carefully before using our website and services.
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
              <h2 className="heading-2 mb-4">Agreement to Terms</h2>
              <p className="text-body mb-4">
                By accessing or using the website and services of Hollis Jamaica Friends and Family Inc. (&quot;HJFF,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our website or services.
              </p>
              <p className="text-body">
                These Terms apply to all visitors, users, members, and others who access or use our services.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Use of Website</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="heading-3 text-xl mb-2">Permitted Use</h3>
                  <p className="text-body">
                    You may use our website for lawful purposes only. You agree to use the website in accordance with all applicable laws and regulations.
                  </p>
                </div>

                <div>
                  <h3 className="heading-3 text-xl mb-2">Prohibited Activities</h3>
                  <p className="text-body mb-2">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-1 text-body ml-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Transmit any harmful, offensive, or illegal content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the website or servers</li>
                    <li>Use automated systems to access the website without permission</li>
                    <li>Collect or store personal information about other users without consent</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Membership</h2>
              <div className="space-y-4">
                <p className="text-body">
                  Membership in HJFF is subject to approval and compliance with our membership policies. By becoming a member, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-body ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Pay applicable membership fees</li>
                  <li>Comply with our bylaws and policies</li>
                  <li>Conduct yourself in a manner consistent with our mission and values</li>
                </ul>
                <p className="text-body">
                  We reserve the right to refuse or terminate membership at our discretion for violations of these Terms or our policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Intellectual Property</h2>
              <p className="text-body mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of HJFF or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-body">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Donations and Payments</h2>
              <p className="text-body mb-4">
                When you make a donation or payment through our website:
              </p>
              <ul className="list-disc list-inside space-y-1 text-body ml-4">
                <li>You represent that you are authorized to use the payment method provided</li>
                <li>You agree to provide accurate payment information</li>
                <li>All donations are final and non-refundable unless required by law</li>
                <li>Membership fees may be refunded according to our refund policy</li>
                <li>We use secure third-party payment processors, and we do not store credit card information</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Disclaimer of Warranties</h2>
              <p className="text-body">
                Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, secure, or error-free, or that defects will be corrected.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Limitation of Liability</h2>
              <p className="text-body">
                To the maximum extent permitted by law, HJFF shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Indemnification</h2>
              <p className="text-body">
                You agree to indemnify, defend, and hold harmless HJFF, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or related to your use of our website, violation of these Terms, or infringement of any rights of another.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Termination</h2>
              <p className="text-body">
                We reserve the right to terminate or suspend your access to our website and services at any time, with or without cause or notice, for any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Governing Law</h2>
              <p className="text-body">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of New York.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Changes to Terms</h2>
              <p className="text-body">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of our website after such changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Contact Information</h2>
              <p className="text-body mb-2">
                If you have questions about these Terms of Service, please contact us:
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
          <Link href="/contact" className="bg-transparent border-2 border-primary-300 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Contact Us with Questions
          </Link>
        </div>
      </section>
    </div>
  );
}
