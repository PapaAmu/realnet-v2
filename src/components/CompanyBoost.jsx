import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CompanyBoost = () => {
  const [companyID, setCompanyID] = React.useState("");
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="joinsection">
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            
            {/* Text Section */}
            <div className="max-w-xl lg:max-w-lg">
              <motion.h2
                className="text-4xl font-semibold tracking-tight text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
                custom={0}
              >
                Empower Your <span className="text-orange-400">Business</span>
              </motion.h2>
              
              <motion.p
                className="mt-4 text-lg text-gray-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
                custom={1}
              >
                RealNet Web Solutions helps startups and enterprises build modern websites, secure hosting, and powerful web applications to drive business growth and digital transformation.
              </motion.p>

              <motion.div
                className="mt-6 flex max-w-md gap-x-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
                custom={2}
              >
                <label htmlFor="companyID" className="sr-only">
                  Company ID
                </label>
                <input
                  id="companyID"
                  value={companyID}
                  onChange={(e) => setCompanyID(e.target.value)}
                  type="text"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  placeholder="Enter Your Company ID"
                />
                <button
                  onClick={() => navigate(`/room/${companyID}`)}
                  disabled={companyID.length === 0}
                  className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Get Started
                </button>
              </motion.div>
            </div>

            {/* Feature Blocks */}
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              
              {/* Professional Web Solutions */}
              <motion.div
                className="flex flex-col items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={featureVariants}
              >
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Professional Web Solutions
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Custom websites and apps tailored for your business needs, optimized for performance and growth.
                </dd>
              </motion.div>

              {/* Secure & Reliable */}
              <motion.div
                className="flex flex-col items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={featureVariants}
              >
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Secure & Reliable
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Your business data is protected. We ensure security, privacy, and no spam in all communications.
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>

        {/* Decorative background */}
        <div
          className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBoost;
