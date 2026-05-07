"use client";

import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-12 bg-white">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-gray-500 mt-1">Last updated: April 29, 2026</p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none text-[15.5px] leading-relaxed">
          <p>
            SubmitAR ("we", "our", "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, store, and protect your information when you use
            our services.
          </p>
          <p className="mt-6">
            If you do not agree to this Policy, you may not use our{" "}
            <span className="text-blue-600">services</span>.
          </p>
        </div>

        <div className="mt-12 space-y-12 text-[15.5px] leading-relaxed">

          {/* 1. About SubmitAR */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. About SubmitAR</h2>
            <p>
              SubmitAR is a document submission, follow-up, representation, and retrieval service
              that helps individuals and organizations process documents with ministries, agencies,
              schools, and other institutions.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

            <p className="font-semibold text-gray-900 mt-5 mb-2">2.1 Personal Information</p>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Identification details (e.g., valid ID)</li>
              <li>Company details (if acting on behalf of an organization)</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">2.2 Document Information</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Files and documents you submit</li>
              <li>Supporting materials required for submission</li>
              <li>Instructions related to your request</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">2.3 Transaction Information</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment details (where applicable)</li>
              <li>Service history (submission, follow-up, retrieval)</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">2.4 Technical Information</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information</li>
              <li>IP address</li>
              <li>Usage data (for tracking and service improvement)</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use your information to:</p>

            <p className="font-semibold text-gray-900 mt-5 mb-2">3.1 Submission (Primary Use)</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and submit your documents to the appropriate institutions</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">3.2 Follow-Up</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Track document progress</li>
              <li>Provide updates and notifications</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">3.3 Representation</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Act on your behalf for administrative interactions (non-legal)</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">3.4 Retrieval</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Collect and deliver processed documents</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">3.5 Service Improvement</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve our platform and service delivery</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">3.6 Communication</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send updates, alerts, and support responses</li>
            </ul>
          </section>

          {/* 4. Information Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="mb-3">
              We do not sell or rent your personal data.
            </p>
            <p className="mb-2">We may share your information only when necessary:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With government agencies, institutions, or organizations to complete your submission
              </li>
              <li>With trusted service providers (e.g., logistics, payment processors)</li>
              <li>When required by law or regulatory authorities</li>
            </ul>
          </section>

          {/* 5. Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="mb-3">
              We implement reasonable security measures to protect your data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure storage of digital files</li>
              <li>Controlled access to information</li>
              <li>Confidential handling of documents</li>
            </ul>
            <p className="mt-4">
              However, no system is completely secure. SubmitAR cannot guarantee absolute security
              but continuously works to protect your data.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="mb-3">
              We retain your information only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Complete your service request</li>
              <li>Maintain service records</li>
              <li>Comply with legal or regulatory obligations</li>
            </ul>
            <p className="mt-4">
              After this period, data may be securely deleted or anonymized.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data (where applicable)</li>
              <li>Withdraw consent (this may affect service delivery)</li>
            </ul>
          </section>

          {/* 8. Cookies & Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Cookies &amp; Tracking
            </h2>
            <p className="mb-3">
              If using our website or app, we may use cookies or similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve user experience</li>
              <li>Track usage patterns</li>
              <li>Enhance platform performance</li>
            </ul>
          </section>

          {/* 9. Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Services</h2>
            <p>
              SubmitAR may use third-party tools (e.g., payment gateways, logistics providers).
              These providers have their own privacy policies, and SubmitAR is not responsible for
              their practices.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p>
              SubmitAR services are not intended for individuals under 18 without supervision. We
              do not knowingly collect data from minors without appropriate consent.
            </p>
          </section>

          {/* 11. Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be communicated
              through our official channels.
            </p>
          </section>

          {/* 12. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="mb-1">For privacy-related inquiries:</p>
            <p className="font-semibold text-gray-900">SubmitAR Support Team</p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:support@submitar.ng" className="text-blue-600 hover:underline">
                support@submitar.ng
              </a>
              <br />
              Phone: +234 8035671112
              <br />
              Location: Abuja, Nigeria
            </p>
          </section>

          {/* 13. Consent */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Consent</h2>
            <p>
              By using SubmitAR, you consent to the collection and use of your information as
              outlined in this Privacy Policy.
            </p>
          </section>

        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Questions about this policy? Contact us at{" "}
            <a href="mailto:support@submitar.ng" className="text-blue-600 hover:underline">
              support@submitar.ng
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}