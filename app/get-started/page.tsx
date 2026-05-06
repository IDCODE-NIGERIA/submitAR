import React from 'react';

export default function SubmitarForm() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-2xl mx-auto py-10 px-6 text-gray-800">
        
        {/* Back Button */}
        <div className="mb-8">
          <a 
            href="/" 
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back
          </a>
        </div>

        <header className="mb-10 border-b pb-6">
          <h1 className="text-3xl font-extrabold text-blue-700">
            Submitar Service Request Form
          </h1>
        </header>

        <form className="space-y-8">
          
          {/* 0. Service Eligibility Check */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg uppercase tracking-wide underline">
              0. Service Eligibility Check (MANDATORY)
            </h2>
            <p className="text-sm font-medium">Is this request related to a legally mandated, court-compulsory, or government-enforced process?</p>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 p-4 border border-gray-200 rounded">
                <input type="radio" name="eligibility" />
                <span>Yes, it is legally mandated / court-compulsory</span>
              </label>
              <label className="flex items-center gap-3 p-4 border border-gray-200 rounded">
                <input type="radio" name="eligibility" />
                <span>No, it is a general/non-mandated service</span>
              </label>
            </div>
            <p className="text-xs text-red-600 italic">If YES is selected: We are sorry. Submitar does not process these matters. Please contact a licensed legal practitioner or the appropriate authority. [ End Process ]</p>
          </div>

          {/* 1. Select Service(s) */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-bold text-lg">1. Select Service(s)</h3>
            <label className="flex items-center gap-3 p-3 border border-gray-100"><input type="checkbox" /> Submission</label>
            <label className="flex items-center gap-3 p-3 border border-gray-100"><input type="checkbox" /> Follow-up</label>
            <label className="flex items-center gap-3 p-3 border border-gray-100"><input type="checkbox" /> Representation</label>
            <label className="flex items-center gap-3 p-3 border border-gray-100"><input type="checkbox" /> Retrieval</label>
          </div>

          {/* 2. How Should We Receive Your Document? */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-bold text-lg">2. How Should We Receive Your Document? (Submission only)</h3>
            <label className="flex items-center gap-2"><input type="radio" name="receive" /> Upload Document</label>
            <div className="pl-6 space-y-2">
              <label className="text-xs font-bold block">Upload File(s)</label>
              <input type="file" className="w-full border p-2" />
              <input type="text" placeholder="Description" className="w-full border p-2 text-sm" />
            </div>

            <label className="flex items-center gap-2 mt-4"><input type="radio" name="receive" /> Send Text for Typesetting</label>
            <div className="pl-6 space-y-2">
              <input type="text" placeholder="Type of Document (Letter, CV, etc.)" className="w-full border p-2 text-sm" />
              <textarea placeholder="Paste Text Here" className="w-full border p-2 text-sm" rows={4}></textarea>
              <p className="text-xs font-bold">Formatting Style:</p>
              <label className="flex gap-2 text-sm"><input type="radio" name="style" /> Formal</label>
              <label className="flex gap-2 text-sm"><input type="radio" name="style" /> Simple</label>
              <label className="flex gap-2 text-sm"><input type="radio" name="style" /> Professional</label>
            </div>

            <label className="flex items-center gap-2 mt-4"><input type="radio" name="receive" /> Hardcopy Pickup</label>
            <div className="pl-6 space-y-2 flex flex-col">
              <input type="text" placeholder="Pickup Address" className="w-full border p-2 text-sm" />
              <input type="date" className="w-full border p-2 text-sm" />
              <input type="time" className="w-full border p-2 text-sm" />
              <input type="text" placeholder="Contact Person Name" className="w-full border p-2 text-sm" />
              <input type="tel" placeholder="Phone Number" className="w-full border p-2 text-sm" />
              <input type="number" placeholder="Number of Documents" className="w-full border p-2 text-sm" />
              <textarea placeholder="Instructions" className="w-full border p-2 text-sm"></textarea>
            </div>
          </div>

          {/* 3. Submission Details */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-bold text-lg">3. Submission Details</h3>
            <select className="w-full border p-3 text-sm">
              <option>Select Type of Document...</option>
              <option>Business Registration</option>
              <option>Government</option>
              <option>Academic</option>
              <option>Legal</option>
              <option>Job/Application</option>
              <option>Personal</option>
              <option>Company Document</option>
              <option>Others</option>
            </select>
            <input type="text" placeholder="Submission Location (Office/Agency)" className="w-full border p-3 text-sm" />
            <input type="date" className="w-full border p-3 text-sm" />
            <textarea placeholder="Special Instructions" className="w-full border p-3 text-sm"></textarea>
            
            <p className="font-bold text-sm">Follow-up Preference (Inside Submission)</p>
            <label className="flex items-center gap-2"><input type="checkbox" /> Do you want us to follow up on this submission?</label>
            <select className="w-full border p-3 text-sm">
              <option>Select Follow-up Frequency...</option>
              <option>Once a week (Basic)</option>
              <option>Twice a week</option>
              <option>Daily</option>
              <option>Custom</option>
            </select>
          </div>

          {/* 4. Follow-up Details */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-bold text-lg">4. Follow-up Details</h3>
            <input type="date" placeholder="When was the document submitted?" className="w-full border p-3 text-sm" />
            <input type="text" placeholder="Where was it submitted?" className="w-full border p-3 text-sm" />
            <input type="text" placeholder="What is the last update/status?" className="w-full border p-3 text-sm" />
            <input type="text" placeholder="Reference Number (if any)" className="w-full border p-3 text-sm" />
          </div>

          {/* 5. Representation Details */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-bold text-lg">5. Representation Details</h3>
            <input type="text" placeholder="Organization/Office" className="w-full border p-3 text-sm" />
            <p className="text-sm font-bold">Preferred Representative:</p>
            <label className="flex items-center gap-2"><input type="radio" name="rep" /> Male</label>
            <label className="flex items-center gap-2"><input type="radio" name="rep" /> Female</label>
            <label className="flex items-center gap-2"><input type="radio" name="rep" /> No preference</label>
            
            <p className="text-sm font-bold">Purpose:</p>
            <label className="flex items-center gap-2"><input type="radio" name="purpose" /> Attendance only</label>
            <label className="flex items-center gap-2"><input type="radio" name="purpose" /> Representation + Speaking</label>
            
            <input type="text" placeholder="If Speaking: Topic/Subject" className="w-full border p-3 text-sm" />
            <textarea placeholder="Breakdown of what to say" className="w-full border p-3 text-sm" rows={3}></textarea>
            <label className="text-xs font-bold block">Materials/Documents (Upload or Describe)</label>
            <input type="file" className="w-full border p-2" />
          </div>

          {/* 6. Retrieval Details */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-bold text-lg">6. Retrieval Details</h3>
            <input type="text" placeholder="What are we retrieving?" className="w-full border p-3 text-sm" />
            <input type="text" placeholder="Location" className="w-full border p-3 text-sm" />
            <input type="date" placeholder="When was it submitted?" className="w-full border p-3 text-sm" />
            <input type="text" placeholder="Last update/status" className="w-full border p-3 text-sm" />
            <p className="text-sm font-bold">Delivery Method:</p>
            <label className="flex items-center gap-2"><input type="radio" name="retrieval" /> Home Delivery</label>
            <label className="flex items-center gap-2"><input type="radio" name="retrieval" /> Office Delivery</label>
            <label className="flex items-center gap-2"><input type="radio" name="retrieval" /> Pickup</label>
          </div>

          {/* 7. Company Verification */}
          <div className="space-y-4 pt-4 border-t bg-gray-50 p-4 rounded">
            <h3 className="font-bold text-lg">7. Company Verification (If Company Document)</h3>
            <input type="text" placeholder="Company Name" className="w-full border p-3 text-sm bg-white" />
            <input type="text" placeholder="Company Registration Number (CAC)" className="w-full border p-3 text-sm bg-white" />
            <p className="text-sm font-bold">Your Position in the Company:</p>
            <label className="flex items-center gap-2"><input type="radio" name="pos" /> Director</label>
            <label className="flex items-center gap-2"><input type="radio" name="pos" /> Manager</label>
            <label className="flex items-center gap-2"><input type="radio" name="pos" /> Staff</label>
            <label className="flex items-center gap-2"><input type="radio" name="pos" /> Other</label>
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

          {/* 8. Authorization & Identity */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-bold text-lg">8. Authorization & Identity Verification (REQUIRED)</h3>
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

          {/* 9. Personal Information */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-bold text-lg">9. Your Information</h3>
            <input type="text" placeholder="Full Name" className="w-full border p-3 text-sm" />
            <input type="tel" placeholder="Phone Number" className="w-full border p-3 text-sm" />
            <input type="email" placeholder="Email" className="w-full border p-3 text-sm" />
            <input type="text" placeholder="Address" className="w-full border p-3 text-sm" />
          </div>

          {/* 10 & 11 Confirmation */}
          <div className="space-y-4 pt-8 border-t">
            <label className="flex items-center gap-3 p-2 border border-gray-100 rounded">
              <input type="checkbox" />
              <span className="text-sm font-medium">10. Save this request for future recall</span>
            </label>
            <div className="space-y-2 bg-blue-50 p-4 rounded">
              <p className="text-sm font-bold">11. Confirmation</p>
              <label className="flex items-center gap-3">
                <input type="checkbox" required />
                <span className="text-sm">I confirm all details are correct</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" required />
                <span className="text-sm">I authorize Submitar to act on my behalf</span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-700 text-white font-bold py-5 rounded-lg text-xl hover:bg-blue-800 transition-colors shadow-lg"
            >
              Submit Request
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
