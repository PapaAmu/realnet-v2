import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does RealNet Web Solutions offer?",
    answer:
      "We specialize in web design, software development, mobile app development, SEO, hosting, and digital marketing solutions. Our goal is to help businesses grow by building modern, secure, and scalable digital products.",
  },
  {
    question: "Do you build custom websites or use templates?",
    answer:
      "We primarily build custom websites tailored to your business needs. However, we can also work with high-quality templates when clients need a faster and more cost-effective solution.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Yes! We offer secure and reliable web hosting along with ongoing website maintenance, updates, and technical support to keep your digital solutions running smoothly.",
  },
  {
    question: "Can you integrate third-party systems and APIs?",
    answer:
      "Absolutely! We can integrate payment gateways, booking systems, analytics tools, CRM software, and any other third-party services needed to enhance your business operations.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "Project timelines vary depending on complexity. Simple websites can take 1–3 weeks, while larger web apps or software projects may require several months. We provide clear timelines upfront.",
  },
  {
    question: "How do I get started with RealNet Web Solutions?",
    answer:
      "Simply contact us through our website, and we'll schedule a free consultation. We'll discuss your goals, plan a strategy, and help you choose the best digital solutions for your business.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[linear-gradient(to_top_right,_rgba(255,255,255,1)_0%,_rgba(222,222,222,1)_50%)] pt-8 pb-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center my-16">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-md bg-gray-50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-4 text-gray-900 text-left"
              >
                <h2 className="text-lg font-medium">{faq.question}</h2>
                <motion.svg
                  className="size-5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: openIndex === index ? -180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-gray-900"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
