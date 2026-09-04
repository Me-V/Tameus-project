import React from 'react';
import { ChevronRight } from 'lucide-react';

const FAQItem = ({ question }: { question: string }) => (
  <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:border-gray-200 hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all cursor-pointer group">
    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#4653A2] transition-colors shrink-0" strokeWidth={2.5} />
    <span className="text-[1.05rem] md:text-[1.1rem] font-medium text-[#1A1A1A]">{question}</span>
  </div>
);

const FAQ = () => {
  const questions = [
    "What is TransferNow?",
    "What is the maximum file size I can send?",
    "Is file transfer free?",
    "Can I protect my files with a password?",
    "Where are TransferNow files hosted?",
    "Is my personal data safe?"
  ];

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
          {questions.map((q, i) => (
            <FAQItem key={i} question={q} />
          ))}
        </div>

        <div className="mt-6 text-right">
          <a href="#" className="text-[#4653A2] text-sm hover:text-[#384384] transition-colors inline-flex items-center gap-1 border-b border-dashed border-[#8A96D9] pb-0.5">
            Find out more answers on our FAQ <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
