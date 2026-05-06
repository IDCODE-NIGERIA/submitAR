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

        {/* Main Content - This was the biggest missing piece */}
        <div className="prose prose-gray max-w-none text-[15.5px] leading-relaxed">
          <p>
            At computerservice.ng, we value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, store, and protect your data
            when you use our services.
          </p>
          <p className="mt-6">
            If you do not agree to this Policy, you may not use our{" "}
            <span className="text-blue-600">services</span>.
          </p>
        </div>

        <div className="mt-12 space-y-12 text-[15.5px] leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-3">We may collect the following information:</p>
            
            <p className="font-semibold text-gray-900 mt-5 mb-2">a. Personal Information</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Residential or pickup address</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">b. Service Information</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uploaded documents (CVs, certificates, IDs, etc.)</li>
              <li>Application details and submitted data</li>
              <li>Technical device information (for support services)</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-5 mb-2">c. Service Reference Information</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unique Service ID assigned to each request</li>
              <li>Any reference ID provided by the user for tracking or follow-up</li>
            </ul>
          </section>

          {/* Repeat similar pattern for other sections */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What We Do NOT Collect</h2>
            <p className="mb-3">For your safety and privacy:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not collect or store login credentials (usernames, passwords, OTPs)</li>
              <li>We do not access user accounts directly</li>
            </ul>
            <p className="mt-4">All services are handled using submitted information and Service IDs only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide requested services (printing, application filling, tech support, etc.)</li>
              <li>Process and complete service requests based on the information you provide</li>
              <li>Communicate updates about your request</li>
              <li>Track and manage your request using your Service ID</li>
              <li>Improve our services</li>
            </ul>
          </section>

          {/* ... Continue with other sections using the same pattern ... */}

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p>
              Email:{" "}
              <a href="mailto:support@computerservice.ng" className="text-blue-600 hover:underline">
                support@computerservice.ng
              </a>
              <br />
              Phone: +234 8035671112
            </p>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Questions about this policy? Contact us at{" "}
            <a href="mailto:support@computerservice.ng" className="text-blue-600 hover:underline">
              support@computerservice.ng
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}