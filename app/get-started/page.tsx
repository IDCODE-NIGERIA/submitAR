'use client';

import React, { useState, useMemo } from 'react';
import { 
  MdWarning, 
  MdUpload, 
  MdLocalShipping, 
  MdTextFields,
  MdLightbulb,
  MdCreditCard,
} from 'react-icons/md';
import { 
  FaCheckCircle, 
  FaUser, 
  FaBuilding 
} from 'react-icons/fa';

// ─── Pricing constants ────────────────────────────────────────────────────────
const PRICES = {
  submission: 35_000,
  followup_standalone: 35_000,
  submission_followup_bundle: 120_000,
  representation_attendance: 50_000,
  representation_speaking: 100_000,
  retrieval: 35_000,
} as const;

function fmt(n: number) {
  return '₦' + n.toLocaleString('en-NG');
}

// ─── Types ────────────────────────────────────────────────────────────────────
type LineItem = { label: string; amount: number; note?: string };

export default function SubmitarForm() {
  const [eligibility, setEligibility] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [receiveMethod, setReceiveMethod] = useState<'upload' | 'text' | 'hardcopy'>('upload');
  const [isCompanyDocument, setIsCompanyDocument] = useState<string>('');
  const [repPurpose, setRepPurpose] = useState<string>(''); // 'attendance' | 'speaking'

  const services = [
    { id: 'submission', label: 'Submission', icon: MdUpload },
    { id: 'followup',   label: 'Follow-up',  icon: FaCheckCircle },
    { id: 'representation', label: 'Representation', icon: FaUser },
    { id: 'retrieval',  label: 'Retrieval',  icon: MdLocalShipping },
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  // ─── Order summary computation ─────────────────────────────────────────────
  const { lineItems, total } = useMemo<{ lineItems: LineItem[]; total: number }>(() => {
    const items: LineItem[] = [];
    const has = (id: string) => selectedServices.includes(id);

    // Submission + Follow-up bundle
    if (has('submission') && has('followup')) {
      items.push({
        label: 'Submission + 4-Week Follow-Up',
        amount: PRICES.submission_followup_bundle,
        note: 'Bundled rate — saves ₦50,000',
      });
    } else {
      if (has('submission')) {
        items.push({ label: 'Submission Only', amount: PRICES.submission });
      }
      if (has('followup')) {
        items.push({ label: 'Follow-Up (Standalone)', amount: PRICES.followup_standalone });
      }
    }

    // Representation
    if (has('representation')) {
      const isSpeaking = repPurpose === 'speaking';
      items.push({
        label: isSpeaking ? 'Representation + Speaking' : 'Basic Representation',
        amount: isSpeaking ? PRICES.representation_speaking : PRICES.representation_attendance,
        note: isSpeaking ? undefined : 'Per 2-hour session',
      });
    }

    // Retrieval
    if (has('retrieval')) {
      items.push({ label: 'Document Retrieval', amount: PRICES.retrieval });
    }

    const total = items.reduce((sum, i) => sum + i.amount, 0);
    return { lineItems: items, total };
  }, [selectedServices, repPurpose]);

  const hasSelection = selectedServices.length > 0;

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-2xl mx-auto py-10 px-6 text-gray-800">
        
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:underline font-medium">← Back</a>
        </div>

        <header className="mb-10 border-b pb-6">
          <h1 className="text-3xl font-extrabold text-blue-700">
            Submitar Service Request Form
          </h1>
        </header>

        <form className="space-y-10">
          
          {/* 0. Eligibility */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg uppercase tracking-wide underline">
              0. Service Eligibility Check (MANDATORY)
            </h2>
            <p className="text-sm font-medium">
              Is this request related to a legally mandated, court-compulsory, or government-enforced process?
            </p>
            
            <div className="grid grid-cols-1 gap-3">
              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${eligibility === 'yes' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <input type="radio" checked={eligibility === 'yes'} onChange={() => setEligibility('yes')} />
                <span>Yes, it is legally mandated / court-compulsory</span>
              </label>

              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${eligibility === 'no' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <input type="radio" checked={eligibility === 'no'} onChange={() => setEligibility('no')} />
                <span>No, it is a general/non-mandated service</span>
              </label>
            </div>

            {eligibility === 'yes' && (
              <div className="mt-6 p-6 bg-red-50 border border-red-200 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdWarning className="text-red-600 text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-700 mb-2">Service Not Available</h3>
                    <p className="text-gray-700">
                      We are sorry. Submitar does not provide legal representative services for legally mandated, 
                      court-compulsory, or government-enforced processes.
                    </p>
                    <p className="mt-3 text-gray-600">
                      Please contact a licensed legal practitioner or the appropriate authority.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {eligibility === 'no' && (
            <>
              {/* 1. Select Services */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-bold text-lg">1. Select Service(s)</h3>

                {/* Pricing hint cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-1">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">Submission</p>
                    <p className="font-bold text-blue-700 text-sm">₦35,000</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">Follow-Up</p>
                    <p className="font-bold text-blue-700 text-sm">₦35,000</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">Representation</p>
                    <p className="font-bold text-blue-700 text-sm">₦50–100k</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">Retrieval</p>
                    <p className="font-bold text-blue-700 text-sm">₦35,000</p>
                  </div>
                </div>

                {/* Bundle callout */}
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800">
                  <MdLightbulb className="text-amber-500 text-base shrink-0" />
                  <span><strong>Bundle deal:</strong> Select both Submission + Follow-up and pay just ₦120,000 (saves ₦50,000)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <label key={service.id} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${selectedServices.includes(service.id) ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <input type="checkbox" checked={selectedServices.includes(service.id)} onChange={() => toggleService(service.id)} />
                        <div className="flex items-center gap-2">
                          <Icon className="text-xl text-blue-600" />
                          <span className="font-medium">{service.label}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 2. Receive Document - Tabbed */}
              {selectedServices.includes('submission') && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold text-lg">2. How Should We Receive Your Document?</h3>
                  <div className="flex border-b border-gray-200">
                    <button type="button" onClick={() => setReceiveMethod('upload')} className={`flex-1 py-3 text-sm font-medium border-b-2 flex items-center justify-center gap-2 ${receiveMethod === 'upload' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                      <MdUpload className="text-lg" /> Upload Document
                    </button>
                    <button type="button" onClick={() => setReceiveMethod('text')} className={`flex-1 py-3 text-sm font-medium border-b-2 flex items-center justify-center gap-2 ${receiveMethod === 'text' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                      <MdTextFields className="text-lg" /> Send Text for Typesetting
                    </button>
                    <button type="button" onClick={() => setReceiveMethod('hardcopy')} className={`flex-1 py-3 text-sm font-medium border-b-2 flex items-center justify-center gap-2 ${receiveMethod === 'hardcopy' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                      <MdLocalShipping className="text-lg" /> Hardcopy Pickup
                    </button>
                  </div>

                  <div className="pt-4">
                    {receiveMethod === 'upload' && (
                      <div className="space-y-3">
                        <label className="text-xs font-bold block">Upload File(s)</label>
                        <input type="file" className="w-full border p-2" />
                        <input type="text" placeholder="Description" className="w-full border p-2 text-sm" />
                      </div>
                    )}
                    {receiveMethod === 'text' && (
                      <div className="space-y-4">
                        <input type="text" placeholder="Type of Document (Letter, CV, etc.)" className="w-full border p-2 text-sm" />
                        <textarea placeholder="Paste Text Here" className="w-full border p-2 text-sm" rows={5}></textarea>
                        <p className="text-xs font-bold">Formatting Style:</p>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2"><input type="radio" name="style" /> Formal</label>
                          <label className="flex items-center gap-2"><input type="radio" name="style" /> Simple</label>
                          <label className="flex items-center gap-2"><input type="radio" name="style" /> Professional</label>
                        </div>
                      </div>
                    )}
                    {receiveMethod === 'hardcopy' && (
                      <div className="space-y-3 flex flex-col">
                        <input type="text" placeholder="Pickup Address" className="w-full border p-2 text-sm" />
                        <input type="date" className="w-full border p-2 text-sm" />
                        <input type="time" className="w-full border p-2 text-sm" />
                        <input type="text" placeholder="Contact Person Name" className="w-full border p-2 text-sm" />
                        <input type="tel" placeholder="Phone Number" className="w-full border p-2 text-sm" />
                        <input type="number" placeholder="Number of Documents" className="w-full border p-2 text-sm" />
                        <textarea placeholder="Instructions" className="w-full border p-2 text-sm" rows={3}></textarea>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 3. Submission Details */}
              {selectedServices.includes('submission') && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold text-lg">3. Submission Details</h3>
                  <input type="text" placeholder="Submission Location (Office/Agency)" className="w-full border p-3 text-sm" />
                  <input type="date" className="w-full border p-3 text-sm" />
                  <textarea placeholder="Special Instructions" className="w-full border p-3 text-sm"></textarea>
                </div>
              )}

              {/* 4. Follow-up */}
              {selectedServices.includes('followup') && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold text-lg">4. Follow-up Details</h3>
                  <input type="date" placeholder="When was the document submitted?" className="w-full border p-3 text-sm" />
                  <input type="text" placeholder="Where was it submitted?" className="w-full border p-3 text-sm" />
                  <input type="text" placeholder="What is the last update/status?" className="w-full border p-3 text-sm" />
                  <input type="text" placeholder="Reference Number (if any)" className="w-full border p-3 text-sm" />
                </div>
              )}

              {/* 5. Representation */}
              {selectedServices.includes('representation') && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold text-lg">5. Representation Details</h3>
                  <input type="text" placeholder="Organization/Office" className="w-full border p-3 text-sm" />
                  <p className="text-sm font-bold">Preferred Representative:</p>
                  <div className="flex gap-6">
                    <label><input type="radio" name="rep" /> Male</label>
                    <label><input type="radio" name="rep" /> Female</label>
                    <label><input type="radio" name="rep" /> No preference</label>
                  </div>
                  <p className="text-sm font-bold">Purpose:</p>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input 
                        type="radio" 
                        name="purpose" 
                        checked={repPurpose === 'attendance'}
                        onChange={() => setRepPurpose('attendance')}
                      /> 
                      Attendance only
                      <span className="text-xs text-blue-600 font-semibold ml-1">(₦50,000)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input 
                        type="radio" 
                        name="purpose" 
                        checked={repPurpose === 'speaking'}
                        onChange={() => setRepPurpose('speaking')}
                      /> 
                      Representation + Speaking
                      <span className="text-xs text-blue-600 font-semibold ml-1">(₦100,000)</span>
                    </label>
                  </div>
                  {repPurpose === 'speaking' && (
                    <>
                      <input type="text" placeholder="If Speaking: Topic/Subject" className="w-full border p-3 text-sm" />
                      <textarea placeholder="Breakdown of what to say" className="w-full border p-3 text-sm" rows={3}></textarea>
                      <input type="file" className="w-full border p-2" />
                    </>
                  )}
                </div>
              )}

              {/* 6. Retrieval */}
              {selectedServices.includes('retrieval') && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold text-lg">6. Retrieval Details</h3>
                  <input type="text" placeholder="What are we retrieving?" className="w-full border p-3 text-sm" />
                  <input type="text" placeholder="Location" className="w-full border p-3 text-sm" />
                  <input type="date" placeholder="When was it submitted?" className="w-full border p-3 text-sm" />
                  <input type="text" placeholder="Last update/status" className="w-full border p-3 text-sm" />
                  <p className="text-sm font-bold">Delivery Method:</p>
                  <div className="flex gap-6">
                    <label><input type="radio" name="retrieval" /> Home Delivery</label>
                    <label><input type="radio" name="retrieval" /> Office Delivery</label>
                    <label><input type="radio" name="retrieval" /> Pickup</label>
                  </div>
                </div>
              )}

              {/* 7. Company or Personal Document */}
              {hasSelection && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold text-lg">7. Document Category</h3>
                  <p className="text-sm">Is this a Company Document or Personal Document?</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${isCompanyDocument === 'company' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                      <input type="radio" name="docCategory" checked={isCompanyDocument === 'company'} onChange={() => setIsCompanyDocument('company')} />
                      <span>Company Document</span>
                    </label>
                    <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${isCompanyDocument === 'personal' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                      <input type="radio" name="docCategory" checked={isCompanyDocument === 'personal'} onChange={() => setIsCompanyDocument('personal')} />
                      <span>Personal / Individual Document</span>
                    </label>
                  </div>
                </div>
              )}

              {/* 7a. Company Verification */}
              {isCompanyDocument === 'company' && (
                <div className="space-y-4 pt-4 border-t bg-gray-50 p-4 rounded">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <FaBuilding /> Company Verification
                  </h3>
                  <input type="text" placeholder="Company Name" className="w-full border p-3 text-sm bg-white" />
                  <input type="text" placeholder="Company Registration Number (CAC)" className="w-full border p-3 text-sm bg-white" />
                  
                  <p className="text-sm font-bold">Your Position in the Company:</p>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2"><input type="radio" name="pos" /> Director</label>
                    <label className="flex items-center gap-2"><input type="radio" name="pos" /> Manager</label>
                    <label className="flex items-center gap-2"><input type="radio" name="pos" /> Staff</label>
                    <label className="flex items-center gap-2"><input type="radio" name="pos" /> Other</label>
                  </div>
                  
                  <label className="text-xs font-bold block">Upload Office ID Card</label>
                  <input type="file" className="w-full border p-2 bg-white" />

                  <p className="font-bold text-sm underline pt-4">Company Authorization Method</p>
                  <label className="flex items-center gap-2"><input type="radio" name="c-auth" /> Verify via Company OTP (Fast Track)</label>
                  <div className="pl-6 space-y-2">
                    <input type="tel" placeholder="Company Phone Number" className="w-full border p-2 text-sm bg-white" />
                    <button type="button" className="bg-blue-600 text-white px-4 py-2 text-xs rounded">Send OTP</button>
                    <input type="text" placeholder="Enter OTP" className="w-full border p-2 text-sm bg-white" />
                  </div>
                  <label className="flex items-center gap-2 mt-4"><input type="radio" name="c-auth" /> Upload Signed/Stamped Authorization</label>
                  <div className="pl-6">
                    <input type="file" className="w-full border p-2 bg-white" />
                  </div>
                </div>
              )}

              {/* Authorization & Identity */}
              {(isCompanyDocument === 'company' || isCompanyDocument === 'personal') && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold text-lg">
                    {isCompanyDocument === 'company' ? '8' : '7'}. Authorization & Identity Verification (REQUIRED)
                  </h3>
                  <p className="text-sm font-bold">Letter of Authorization:</p>
                  <input type="file" className="w-full border p-2" />
                  
                  <p className="text-sm font-bold">Identity Verification:</p>
                  <select className="w-full border p-3 text-sm">
                    <option>Select ID Type...</option>
                    <option>NIN</option>
                    <option>International Passport</option>
                  </select>
                  <input type="text" placeholder="ID Number" className="w-full border p-3 text-sm" />
                  <label className="text-xs font-bold block">Upload ID Image</label>
                  <input type="file" className="w-full border p-2" />
                  <label className="text-xs font-bold block">Upload Your Photo (Selfie)</label>
                  <input type="file" className="w-full border p-2" />
                </div>
              )}

              {/* Personal Information */}
              {(isCompanyDocument === 'company' || isCompanyDocument === 'personal') && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold text-lg">
                    {isCompanyDocument === 'company' ? '9' : '8'}. Your Information
                  </h3>
                  <input type="text" placeholder="Full Name" className="w-full border p-3 text-sm" />
                  <input type="tel" placeholder="Phone Number" className="w-full border p-3 text-sm" />
                  <input type="email" placeholder="Email" className="w-full border p-3 text-sm" />
                  <input type="text" placeholder="Address" className="w-full border p-3 text-sm" />
                </div>
              )}

              {/* ── ORDER SUMMARY ──────────────────────────────────────────────────────── */}
              {lineItems.length > 0 && (
                <div className="pt-6 border-t">
                  <div className="rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
                    {/* Header */}
                    <div className="bg-[#0052cc] px-6 py-4 flex items-center justify-between">
                      <h3 className="font-extrabold text-white text-lg tracking-tight">
                        10. Order Summary
                      </h3>
                      <span className="text-blue-200 text-xs uppercase tracking-widest font-semibold">Estimate</span>
                    </div>

                    {/* Line items */}
                    <div className="bg-white divide-y divide-gray-100">
                      {lineItems.map((item, i) => (
                        <div key={i} className="px-6 py-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                            {item.note && (
                              <p className="text-xs text-green-600 font-medium mt-0.5">{item.note}</p>
                            )}
                          </div>
                          <p className="font-bold text-gray-900 text-sm whitespace-nowrap">{fmt(item.amount)}</p>
                        </div>
                      ))}
                    </div>

                    {/* Total */}
                    <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Estimated Total</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">Final price confirmed after review</p>
                      </div>
                      <p className="text-2xl font-extrabold text-[#0052cc]">{fmt(total)}</p>
                    </div>

                    <div className="bg-blue-50 px-6 py-3 border-t border-blue-100">
                      <p className="text-xs text-blue-700 font-medium flex items-center gap-2">
                        <MdCreditCard className="text-blue-500 text-sm shrink-0" />
                        Payment instructions will be shared after your request is reviewed. No upfront payment required to submit.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirmation */}
              <div className="space-y-4 pt-8 border-t">
                <label className="flex items-center gap-3 p-2 border border-gray-100 rounded">
                  <input type="checkbox" />
                  <span className="text-sm font-medium">
                    {lineItems.length > 0 ? '11' : '10'}. Save this request for future recall
                  </span>
                </label>
                
                <div className="space-y-2 bg-blue-50 p-4 rounded">
                  <p className="text-sm font-bold">
                    {lineItems.length > 0 ? '12' : '11'}. Confirmation
                  </p>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" required />
                    <span className="text-sm">I confirm all details are correct</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" required />
                    <span className="text-sm">I authorize Submitar to act on my behalf</span>
                  </label>
                </div>
                
                <button type="submit" className="w-full bg-blue-700 text-white font-bold py-5 rounded-lg text-xl hover:bg-blue-800 transition-colors shadow-lg">
                  Submit Request
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}