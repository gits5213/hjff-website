import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function Accessibility() {
  const features = [
    'Semantic HTML structure for screen readers',
    'Alternative text for images',
    'Keyboard navigation support',
    'High contrast color schemes',
    'Readable font sizes and spacing',
    'Clear heading hierarchy',
    'Descriptive link text',
    'Form labels and error messages',
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Accessibility Statement</h1>
          <p className="text-xl text-primary-100">
            We are committed to ensuring our website is accessible to everyone, regardless of ability.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="space-y-8">
            <section>
              <h2 className="heading-2 mb-4">Our Commitment</h2>
              <p className="text-body mb-4">
                Hollis Jamaica Friends and Family Inc. is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve these goals.
              </p>
              <p className="text-body">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which help make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Accessibility Features</h2>
              <p className="text-body mb-4">
                Our website includes the following accessibility features:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Feedback</h2>
              <p className="text-body mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers, please let us know:
              </p>
              <ul className="list-disc list-inside space-y-1 text-body ml-4">
                <li>Describe the issue you encountered</li>
                <li>Specify the web page or element where the issue occurred</li>
                <li>Suggest a solution, if you have one</li>
                <li>Provide your contact information so we can follow up with you</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Ongoing Efforts</h2>
              <p className="text-body">
                We recognize that accessibility is an ongoing effort. We regularly review our website and make improvements based on user feedback, accessibility audits, and updates to accessibility standards. We are committed to maintaining and improving our website&apos;s accessibility.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Assistive Technologies</h2>
              <p className="text-body mb-4">
                Our website is designed to work with various assistive technologies, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-body ml-4">
                <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                <li>Screen magnification software</li>
                <li>Voice recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Alternative input devices</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Third-Party Content</h2>
              <p className="text-body">
                While we strive to ensure all content on our website is accessible, some third-party content or services may not fully meet accessibility standards. We encourage third-party providers to improve their accessibility, and we are committed to working with accessible alternatives when possible.
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Contact Us</h2>
              <p className="text-body mb-4">
                If you have questions, concerns, or feedback about the accessibility of our website, please contact us:
              </p>
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <p className="text-body mb-2">
                  <strong>Hollis Jamaica Friends and Family Inc.</strong>
                </p>
                <p className="text-body mb-2">
                  Email: <a href="mailto:info@hjffinc.org" className="text-primary-600 hover:underline">info@hjffinc.org</a>
                </p>
                <p className="text-body">
                  Phone: <a href="tel:+12125551234" className="text-primary-600 hover:underline">(212) 555-1234</a>
                </p>
                <p className="text-body mt-4">
                  Please include &quot;Accessibility&quot; in the subject line of your email.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Date</h2>
              <p className="text-body">
                This accessibility statement was last updated: December 2024
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <Link href="/contact" className="btn-primary">
            Provide Feedback
          </Link>
        </div>
      </section>
    </div>
  );
}
