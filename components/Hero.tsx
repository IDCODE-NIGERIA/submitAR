"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { HiOutlineBadgeCheck, HiOutlineShieldCheck, HiOutlineClock, HiX } from 'react-icons/hi';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white pt-4 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3">
                Submit your documents <br /> 
                <span className="text-gray-800">without being there.</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 max-w-md">
                We handle global documents submissions, meetings, and follow-ups on your behalf with trusted representatives.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a 
                  href="get-started" 
                  className="bg-[#0052cc] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all text-center"
                >
                  Get Started
                </a>
                <a href="#Howitworks" className="border border-blue-600 text-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                  Learn more
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <HiOutlineBadgeCheck className="text-blue-600 text-xl" />
                  <span>Verified Representatives</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineShieldCheck className="text-blue-600 text-xl" />
                  <span>Secure &amp; Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineClock className="text-blue-600 text-xl" />
                  <span>Real-time Updates</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
                <Image src="/image2.png" alt="Representative" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && <ServiceRequestModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

function ServiceRequestModal({ onClose }: { onClose: () => void }) {
  const [isLegallyMandated, setIsLegallyMandated] = useState<boolean | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const hasSubmission = selectedServices.includes("Submission");
  const hasFollowUp = selectedServices.includes("Follow-up");
  const hasRepresentation = selectedServices.includes("Representation");
  const hasRetrieval = selectedServices.includes("Retrieval");

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col">
        
        <div className="px-8 py-6 border-b flex items-center justify-between bg-gray-50 rounded-t-3xl">
          <h2 className="text-2xl font-semibold text-gray-900">Submitar Service Request</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
            <HiX size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-10 text-gray-800">
          
          {/* Eligibility Check */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Service Eligibility Check</h3>
            <p className="mb-5 text-gray-600">Is this request related to a legally mandated, court-compulsory, or government-enforced process?</p>
            
            <div className="space-y-4">
              <label className="flex items-start gap-3 p-5 border rounded-2xl cursor-pointer hover:bg-gray-50">
                <input type="radio" name="legal" className="mt-1 w-5 h-5 accent-blue-600" onChange={() => setIsLegallyMandated(true)} />
                <span>Yes, it is legally mandated / court-compulsory</span>
              </label>

              <label className="flex items-start gap-3 p-5 border rounded-2xl cursor-pointer hover:bg-gray-50">
                <input type="radio" name="legal" className="mt-1 w-5 h-5 accent-blue-600" onChange={() => setIsLegallyMandated(false)} />
                <span>No, it is a general/non-mandated service</span>
              </label>
            </div>
          </div>

          {/* Main Form */}
          {isLegallyMandated === false && (
            <div className="space-y-10">

              {/* Select Services */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Select Service(s)</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Submission", "Follow-up", "Representation", "Retrieval"].map(service => (
                    <label key={service} className="flex items-center gap-4 p-5 border rounded-2xl cursor-pointer hover:bg-gray-50">
                      <input 
                        type="checkbox" 
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="w-5 h-5 accent-blue-600"
                      />
                      <span className="font-medium">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submission Fields */}
              {hasSubmission && (
                <div className="space-y-8">
                  <h3 className="font-semibold text-xl">How Should We Receive Your Document?</h3>
                  {/* Add more fields here as needed */}
                  <div>
                    <label className="block mb-2 font-medium">Upload Document</label>
                    <input type="file" className="w-full p-4 border rounded-2xl" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Submission Location (Office/Agency)</label>
                    <input type="text" className="w-full p-4 border rounded-2xl" placeholder="e.g. CAC Office, FCTA, etc." />
                  </div>
                </div>
              )}

              {/* Follow-up Fields */}
              {hasFollowUp && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-xl">Follow-up Details</h3>
                  <input type="text" placeholder="When was the document submitted?" className="w-full p-4 border rounded-2xl" />
                  <input type="text" placeholder="Where was it submitted?" className="w-full p-4 border rounded-2xl" />
                  <input type="text" placeholder="Reference Number (if any)" className="w-full p-4 border rounded-2xl" />
                </div>
              )}

              {/* Representation Fields */}
              {hasRepresentation && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-xl">Representation Details</h3>
                  <input type="text" placeholder="Organization/Office" className="w-full p-4 border rounded-2xl" />
                  <div>
                    <label className="block mb-2 font-medium">Preferred Representative</label>
                    <div className="flex gap-6">
                      <label><input type="radio" name="rep" className="accent-blue-600" /> Male</label>
                      <label><input type="radio" name="rep" className="accent-blue-600" /> Female</label>
                      <label><input type="radio" name="rep" className="accent-blue-600" /> No preference</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Retrieval Fields */}
              {hasRetrieval && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-xl">Retrieval Details</h3>
                  <input type="text" placeholder="What are we retrieving?" className="w-full p-4 border rounded-2xl" />
                  <input type="text" placeholder="Location" className="w-full p-4 border rounded-2xl" />
                </div>
              )}

              {/* Personal & Authorization Info */}
              <div className="space-y-8">
                <h3 className="font-semibold text-xl">Your Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">Full Name</label>
                    <input type="text" className="w-full p-4 border rounded-2xl" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Phone Number</label>
                    <input type="tel" className="w-full p-4 border rounded-2xl" />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email Address</label>
                  <input type="email" className="w-full p-4 border rounded-2xl" />
                </div>

                <div className="pt-6">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                    <span>I confirm all details are correct and authorize Submitar to act on my behalf</span>
                  </label>
                </div>
              </div>

            </div>
          )}

          {/* Rejection Message */}
          {isLegallyMandated === true && (
            <div className="bg-red-50 border border-red-200 p-10 rounded-2xl text-center">
              <h4 className="text-red-700 text-xl font-semibold mb-4">We cannot process this request</h4>
              <p className="text-red-600 leading-relaxed">
                Submitar does not process legally mandated, court-compulsory or government-enforced matters.<br />
                Please contact a licensed legal practitioner or the appropriate authority.
              </p>
            </div>
          )}

          {isLegallyMandated === false && (
            <button className="w-full bg-[#0052cc] hover:bg-blue-700 text-white py-5 rounded-2xl font-semibold text-lg mt-8">
              Submit Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
}