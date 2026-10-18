import { useState } from "react";
import useInView from "../hooks/useInView";

const industries = [
  "HealthTech",
  "EdTech",
  "FinTech",
  "AgriTech",
  "GovTech",
  "Logistics & Supply Chain",
  "E-commerce",
  "Non-Profit NGOs",
  "Energy & Clean Tech",
  "Real Estate Tech",
];

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("HealthTech");
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [pillsRef, pillsInView] = useInView({ threshold: 0.15 });

  return (
    <section
      id='industries'
      className='w-full bg-[#EAEAF8] py-12 sm:py-14 md:py-17'>
      <div className='max-w-267.75 mx-auto px-4 sm:px-6'>
        {/* Header */}
        <div ref={headerRef} className='flex flex-col items-center'>
          {/* Badge */}
          <div
            className={`flex items-center gap-2 sm:gap-2.75 rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-3 sm:px-4 py-2 sm:py-2.5 ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                : "none",
            }}>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7C3AED]' />
            <span className='uppercase text-[12px] sm:text-[14px] md:text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
              Industries
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`mt-5 sm:mt-6 md:mt-8 text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-9 sm:leading-11.5 md:leading-14.5 font-bold text-[#020A23] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                : "none",
            }}>
            Access Every <span className='text-[#7C3AED]'>Sector</span>
          </h2>

          {/* Description */}
          <p
            className={`mt-3 sm:mt-4 md:mt-5 max-w-150 text-center text-[15px] sm:text-[17px] md:text-[18px] leading-6.5 sm:leading-7.5 md:leading-8 font-medium text-[#020A23CC] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both"
                : "none",
            }}>
            We bring deep domain expertise across high-impact sectors — building
            technology that solves real problems.
          </p>
        </div>

        {/* Pills */}
        <div
          ref={pillsRef}
          className='mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6'>
          {industries.map((industry, index) => (
            <button
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`
                px-3 sm:px-4 py-2 sm:py-2.5
                rounded-[30px]
                border
                border-[#87848B80]
                font-medium
                text-[13px] sm:text-[14px] md:text-[15px]
                leading-5.5 sm:leading-6.5
                tracking-[2%]
                transition-all
                duration-300
                ${
                  activeIndustry === industry
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#EAEAF8] hover:bg-[#7C3AED1A]"
                }
                ${pillsInView ? "anim-visible" : "anim-hidden"}
              `}
              style={{
                animation: pillsInView
                  ? `scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 0.06}s both`
                  : "none",
              }}>
              {industry}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
