"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQData {
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    question: "What is TransferNow?",
    answer: "TransferNow is a simple, secure, and fast platform for sending and receiving large files. Whether you are an individual sharing photos or a business transferring professional documents, we make the process seamless."
  },
  {
    question: "What is the maximum file size I can send?",
    answer: "With a free account, you can send up to 5 GB per transfer. Upgrading to our Premium or Team plans allows you to send files up to 250 GB securely."
  },
  {
    question: "Is file transfer free?",
    answer: "Yes, our core service is completely free! You can send files up to 5 GB without needing an account. For higher limits and advanced tracking, we offer affordable premium plans."
  },
  {
    question: "Can I protect my files with a password?",
    answer: "Absolutely. You can secure any transfer with a custom password to ensure that only the intended recipients can download your files."
  },
  {
    question: "Where are TransferNow files hosted?",
    answer: "We prioritize your privacy and data sovereignty. All files are hosted on highly secure servers located in top-tier data centers close to your geographic region to ensure maximum speed and compliance."
  },
  {
    question: "Is my personal data safe?",
    answer: "We use robust encryption protocols (both in transit and at rest) and comply with strict data protection regulations. We never sell your personal data or access the contents of your files."
  }
];

const FAQItem = ({ 
  faq, 
  isOpen, 
  onClick 
}: { 
  faq: FAQData; 
  isOpen: boolean; 
  onClick: () => void 
}) => (
  <div 
    className={`bg-white border rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] transition-all cursor-pointer overflow-hidden ${
      isOpen ? 'border-[#4653A2] shadow-[0_4px_20px_rgb(70,83,162,0.1)]' : 'border-gray-100 hover:border-gray-200 hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)]'
    }`}
    onClick={onClick}
  >
    <div className="flex items-center gap-4 p-5 md:p-6 group">
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
        className="shrink-0"
      >
        <ChevronRight className={`w-5 h-5 transition-colors ${isOpen ? 'text-[#4653A2]' : 'text-gray-500 group-hover:text-[#4653A2]'}`} strokeWidth={2.5} />
      </motion.div>
      <span className={`text-[1.05rem] md:text-[1.1rem] font-medium transition-colors ${isOpen ? 'text-[#4653A2]' : 'text-[#1A1A1A]'}`}>
        {faq.question}
      </span>
    </div>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-600 leading-relaxed text-[0.95rem] md:text-[1rem] ml-9">
            {faq.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-[2rem] md:text-[2.2rem] font-bold text-[#1A1A1A] mb-3">
            FAQs about using TransferNow to send large files
          </h2>
          <p className="text-[1.1rem] text-gray-600">
            The safety of your data is our priority
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              onClick={() => handleToggle(i)} 
            />
          ))}
        </div>

        <div className="mt-6 text-right">
          <a href="#" className="text-[#4653A2] text-sm hover:text-[#384384] transition-colors inline-flex items-center gap-1 border-b border-dashed border-[#8A96D9] pb-0.5 cursor-pointer">
            Find out more answers on our FAQ <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
