"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiX } from 'react-icons/hi';

// 1. Define the Type to resolve the 'featured' error
type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean; // The '?' makes it optional and safe for TypeScript
};

type CategoryData = {
  plans: Plan[];
  custom: Plan;
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('Submissions');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleCustomClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const categories: Record<string, CategoryData> = {
    Submissions: {
      plans: [
        { 
          name: "Submission Only", 
          price: "₦35,000", 
          description: "Document handling and submission to the required office/desk.",
          features: ["Document handling", "Official desk delivery", "Basic confirmation"] 
        },
        { 
          name: "Sub + 4 Wks Follow-Up", 
          price: "₦120,000", 
          description: "Full handling with weekly tracking and status updates.",
          featured: true,
          features: ["4-week tracking", "Weekly progress updates", "Status monitoring"] 
        },
      ],
      custom: {
        name: "Custom Submission",
        price: "Get Quote",
        description: "For bulk filings or specialized document logistics.",
        features: ["High-volume discounts", "Special handling", "Custom reporting"]
      }
    },
    "Follow-Ups": {
      plans: [
        { 
          name: "Single Follow-Up", 
          price: "₦35,000", 
          description: "One-time status check or inquiry on an existing submission.",
          features: ["One-time check", "Progress report", "Inquiry handling"] 
        },
        { 
          name: "Monthly Follow-Up", 
          price: "₦120,000", 
          description: "Continuous tracking for multiple requests within the month.",
          features: ["Multiple requests", "Continuous tracking", "Resolution monitoring"] 
        },
      ],
      custom: {
        name: "Custom Follow-Up",
        price: "Get Quote",
        description: "Tailored tracking for complex or long-term cases.",
        features: ["Priority updates", "Extended duration", "Multi-office tracking"]
      }
    },
    Representation: {
      plans: [
        { 
          name: "Basic Representation", 
          price: "₦50,000", 
          description: "Physical attendance at office or meeting (per 2 hours).",
          features: ["Physical attendance", "Agency presence", "Client proxy"] 
        },
        { 
          name: "Premium Rep + Minutes", 
          price: "₦100,000", 
          description: "Full representation with speaking and minute taking.",
          features: ["Speaking proxy", "Minute-by-minute notes", "Post-session summary"] 
        },
      ],
      custom: {
        name: "Custom Representation",
        price: "Get Quote",
        description: "Full-day coverage or multi-city representation.",
        features: ["Full-day support", "Expert advocacy", "Travel logistics"]
      }
    },
    "Retrieval & Business": {
        plans: [
          { 
            name: "Document Retrieval", 
            price: "₦35,000", 
            description: "Official document retrieval and secure handling.",
            features: ["Secure pickup", "Physical/Digital delivery", "Proof of receipt"] 
          },
          { 
            name: "Business Tier", 
            price: "₦250k–₦500k", 
            description: "Constant support for high-volume corporate needs.",
            featured: true,
            features: ["Priority access", "Monthly retainer", "Dedicated account runner"] 
          },
        ],
        custom: {
          name: "Enterprise Custom",
          price: "Get Quote",
          description: "Customized service level agreements for large firms.",
          features: ["API integration", "Bulk discounts", "24/7 Support"]
        }
      }
  };

  const currentCategory = categories[activeTab];

  return (
    <section id="Pricing" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.h2 
          className="text-2xl font-bold text-center text-gray-900 mb-8"
        >
          Service Packages
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(categories).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab 
                ? 'bg-[#0052cc] text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {currentCategory.plans.map((plan, index) => (
              <motion.div 
                key={`${activeTab}-standard-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className={`bg-gray-100 rounded-xl p-8 flex flex-col items-center text-center border-2 transition-colors ${
                  plan.featured ? 'border-blue-500 bg-white shadow-xl' : 'border-transparent'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-xl font-bold text-black mb-4">{plan.price}</p>
                <p className="text-sm text-gray-500 mb-6 max-w-[200px]">{plan.description}</p>
                <ul className="text-left space-y-2 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-600">
                      <HiCheckCircle className="text-blue-500 mr-2 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div 
                key={`${activeTab}-custom`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center border-2 border-dashed border-gray-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{currentCategory.custom.name}</h3>
                <p className="text-xl font-bold text-blue-600 mb-4 font-mono uppercase tracking-tight italic">Custom Quote</p>
                <p className="text-sm text-gray-500 mb-6 max-w-[200px]">{currentCategory.custom.description}</p>
                <ul className="text-left space-y-2 mb-6 flex-grow">
                  {currentCategory.custom.features.map((f, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-600 font-medium">
                      <HiCheckCircle className="text-gray-400 mr-2 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button 
                    onClick={() => handleCustomClick(currentCategory.custom.name)}
                    className="w-full bg-[#0052cc] text-white py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors"
                >
                    Get a Quote
                </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          className="bg-[#0052cc] rounded-2xl p-8 md:p-12 lg:mx-20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Let someone handle it for you.
            </h2>
            <p className="text-blue-100 text-sm md:text-base max-w-md">
              Save time, reduce travel stress, and get things done from anywhere in the world.
            </p>
          </div>
          <Link href="/get-started" className="bg-white text-[#0052cc] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Get Started
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative z-10 shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                <HiX size={24} />
              </button>
              <h3 className="text-xl font-bold mb-1">Quote Request</h3>
              <p className="text-blue-600 text-sm font-bold mb-6 italic">{selectedService}</p>
              <textarea className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" rows={4} placeholder="Tell us what you need..."></textarea>
              <button className="w-full mt-4 bg-[#0052cc] text-white py-3 rounded-lg font-bold hover:bg-blue-700">Submit Request</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
