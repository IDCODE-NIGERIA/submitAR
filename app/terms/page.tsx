"use client";

import Header from "@/components/Header";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-12 bg-white">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 mt-1">Effective Date: April 29, 2026</p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none text-[15.5px] leading-relaxed">
          <p>
            Welcome to SubmitAR. By using our services, you agree to the following Terms and
            Conditions. Please read them carefully.
          </p>
        </div>

        <div className="mt-12 space-y-12 text-[15.5px] leading-relaxed">

          {/* 1. About Submitar */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. About Submitar</h2>
            <p className="mb-3">
              SubmitAR is a document submission, representation, and retrieval service that assists
              individuals and organizations in handling document processes with ministries, agencies,
              schools, and other institutions.
            </p>
            <p className="mb-2">Our core services include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submission (primary service)</li>
              <li>Follow-up</li>
              <li>Representation</li>
              <li>Retrieval</li>
              <li>Tracking</li>
            </ul>
          </section>

          {/* 2. Service Scope */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Scope</h2>

            <p className="font-semibold text-gray-900 mt-5 mb-2">2.1 Submission (Primary Service)</p>
            <p>
              SubmitAR receives documents (digital or physical), prepares them (printing, binding if
              required), and submits them to the appropriate office or authority.
            </p>

            <p className="font-semibold text-gray-900 mt-5 mb-2">2.2 Follow-Up</p>
            <p>
              After submission, SubmitAR monitors the progress of documents and provides updates
              where possible.
            </p>

            <p className="font-semibold text-gray-900 mt-5 mb-2">2.3 Representation</p>
            <p className="mb-2">
              SubmitAR may act on behalf of clients for non-legal interactions such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inquiries</li>
              <li>Status checks</li>
              <li>Administrative communication</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">2.4 Retrieval</p>
            <p>
              SubmitAR can collect processed documents or responses and deliver them to the client.
            </p>
          </section>

          {/* 3. Restricted Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Restricted Services (Important)
            </h2>
            <p className="mb-3">
              SubmitAR does <span className="font-semibold">NOT</span> handle legally mandated
              document processes, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Court filings</li>
              <li>Affidavits</li>
              <li>Legal proceedings</li>
              <li>Any submission requiring a licensed legal practitioner</li>
            </ul>
            <p className="mt-4">If a request falls under this category, it will be declined.</p>
          </section>

          {/* 4. Client Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Client Responsibilities
            </h2>
            <p className="mb-3">By using SubmitAR, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Submit authentic and valid documents</li>
              <li>
                Ensure you have the right to submit documents on behalf of any individual or
                organization
              </li>
              <li>
                Provide required identification (e.g., valid ID or company ID where applicable)
              </li>
            </ul>
            <p className="mt-4">
              SubmitAR is not responsible for delays or rejection caused by incorrect or incomplete
              information provided by the client.
            </p>
          </section>

          {/* 5. Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Payment terms may vary depending on the service model (including pay-on-delivery
                where applicable).
              </li>
              <li>
                Full payment must be made upon completion of agreed milestones (e.g., after
                submission or retrieval).
              </li>
              <li>
                Failure to pay may result in:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Suspension of service</li>
                  <li>Withholding of retrieved documents</li>
                  <li>Recovery actions where necessary</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 6. Tracking & Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Tracking &amp; Updates</h2>
            <p className="mb-3">
              SubmitAR provides tracking and updates based on available information from the
              receiving organization.
            </p>
            <p className="mb-2">However:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SubmitAR does not control processing timelines</li>
              <li>Updates depend on cooperation from third-party institutions</li>
            </ul>
          </section>

          {/* 7. Turnaround Time */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Turnaround Time</h2>
            <p className="mb-3">All timelines are estimates only and depend on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The receiving organization</li>
              <li>Nature of the document</li>
              <li>External factors beyond SubmitAR's control</li>
            </ul>
            <p className="mt-4">SubmitAR is not liable for delays caused by third parties.</p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="mb-3">SubmitAR shall not be held liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rejection of documents by any institution</li>
              <li>Delays caused by external organizations</li>
              <li>Losses arising from incorrect client information</li>
              <li>Indirect or consequential damages</li>
            </ul>
            <p className="mt-4">
              In all cases, liability (if any) is limited to the amount paid for the service.
            </p>
          </section>

          {/* 9. Document Handling & Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Document Handling &amp; Security
            </h2>
            <p className="mb-3">
              SubmitAR takes reasonable steps to ensure document safety, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure handling of physical and digital files</li>
              <li>Controlled access to client information</li>
            </ul>
            <p className="mt-4 mb-2">However, Submitar is not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Force majeure events (fire, theft, system failure, etc.)</li>
              <li>Issues beyond reasonable operational control</li>
            </ul>
          </section>

          {/* 10. Refund Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payments made are non-refundable once submission has been completed</li>
              <li>
                Partial refunds may be considered if:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Service has not yet commenced</li>
                  <li>SubmitAR is unable to proceed with the request</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 11. Service Refusal */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Service Refusal</h2>
            <p className="mb-3">
              SubmitAR reserves the right to refuse or terminate services if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The request violates these terms</li>
              <li>Documents are suspected to be fraudulent</li>
              <li>The request involves restricted (legal) processes</li>
            </ul>
          </section>

          {/* 12. Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Privacy</h2>
            <p className="mb-3">
              Client information is collected solely for service delivery and will not be shared
              with unauthorized third parties except:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where required to complete submission</li>
              <li>Where required by law</li>
            </ul>
          </section>

          {/* 13. Amendments */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Amendments</h2>
            <p>
              SubmitAR may update these Terms and Conditions at any time. Updated versions will be
              communicated through official channels.
            </p>
          </section>

          {/* 14. Acceptance */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Acceptance</h2>
            <p className="mb-3">By engaging SubmitAR, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have read and understood these Terms and Conditions</li>
              <li>You agree to be bound by them</li>
            </ul>
          </section>

        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Questions about these terms? Contact us at{" "}
            <a href="mailto:support@submitar.ng" className="text-blue-600 hover:underline">
              support@submitar.ng
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}