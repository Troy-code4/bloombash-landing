import useInView from "../hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We deeply understand your idea, audience, and goals through strategic workshops.",
    badgeColor: "purple",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft intuitive interfaces and validated prototypes that align with your users.",
    badgeColor: "orange",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our engineers build robust, scalable systems using modern, future-ready stacks.",
    badgeColor: "purple",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We deploy, optimize, and provide ongoing support to scale your product.",
    badgeColor: "orange",
  },
];

function HowWeWork() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [stepsRef, stepsInView] = useInView({ threshold: 0.1 });

  return (
    <section className='w-full bg-white py-12 sm:py-16 md:py-[90px]'>
      <div className='max-w-[1308px] mx-auto px-4 sm:px-6'>
        {/* Header */}
        <div ref={headerRef} className='flex flex-col items-center'>
          {/* Badge */}
          <div
            className={`flex items-center gap-2 sm:gap-[11px] rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-3 sm:px-4 py-2 sm:py-[10px] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                : "none",
            }}>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7C3AED]' />
            <span className='uppercase text-[12px] sm:text-[14px] md:text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`mt-5 sm:mt-6 md:mt-8 text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[36px] sm:leading-[46px] md:leading-[58px] font-bold text-[#020A23] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                : "none",
            }}>
            A proven path{" "}
            <span className='text-[#7C3AED]'>from Idea to Impact</span>
          </h2>

          {/* Description */}
          <p
            className={`mt-3 sm:mt-4 md:mt-5 max-w-[708px] text-center text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[30px] md:leading-[32px] font-medium text-[#020A23CC] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both"
                : "none",
            }}>
            Our collaborative four-step process ensures clarity, transparency,
            and results — every step of the way.
          </p>
        </div>

        {/* Steps — vertical on mobile, horizontal on lg+ */}
        <div ref={stepsRef} className='mt-10 sm:mt-14 md:mt-20 relative'>
          {/* Desktop: horizontal layout with connector (lg+) */}
          <div className='hidden lg:flex items-start justify-between relative'>
            {/* Dotted connector line */}
            <div
              className={`absolute top-[44px] left-[180px] right-[180px] h-[2px] z-0 ${stepsInView ? "anim-visible" : "anim-hidden"}`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #2221238c 0px, #87848b 6px, transparent 10px, transparent 16px)",
                animation: stepsInView
                  ? "growWidth 1s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : "none",
                transformOrigin: "left center",
              }}
            />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col items-center text-center relative ${stepsInView ? "anim-visible" : "anim-hidden"}`}
                style={{
                  width: "303px",
                  zIndex: 1,
                  animation: stepsInView
                    ? `fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) ${0.3 + index * 0.15}s both`
                    : "none",
                }}>
                {/* Circular Badge */}
                <div
                  className='w-[90px] h-[90px] rounded-full flex items-center justify-center shadow-lg relative z-10'
                  style={
                    step.badgeColor === "purple"
                      ? {
                          background:
                            "linear-gradient(304.68deg, #7C3AED 10.04%, #7034D6 84.93%)",
                        }
                      : { background: "#FFC77A" }
                  }>
                  <span
                    className='font-medium text-[32px] leading-[26px]'
                    style={{
                      color:
                        step.badgeColor === "purple" ? "#FFFFFF" : "#020A23",
                    }}>
                    {step.number}
                  </span>
                </div>
                <h3 className='mt-6 font-semibold text-[20px] leading-[26px] tracking-[2%] text-black'>
                  {step.title}
                </h3>
                <p className='mt-3 font-medium text-[16px] leading-[26px] tracking-[2%] text-[#605F62]'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: vertical layout with vertical connector */}
          <div className='lg:hidden flex flex-col items-center gap-0'>
            {/* Vertical dotted connector line */}
            <div
              className={`absolute left-1/2 top-[45px] bottom-[45px] w-[2px] -translate-x-1/2 z-0 hidden sm:block ${stepsInView ? "anim-visible" : "anim-hidden"}`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #2221238c 0px, #87848b 6px, transparent 10px, transparent 16px)",
                animation: stepsInView ? "fadeIn 0.8s ease 0.2s both" : "none",
              }}
            />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-[600px] py-4 relative ${stepsInView ? "anim-visible" : "anim-hidden"}`}
                style={{
                  zIndex: 1,
                  animation: stepsInView
                    ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.2 + index * 0.12}s both`
                    : "none",
                }}>
                {/* Circular Badge */}
                <div
                  className='w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full flex items-center justify-center shadow-lg shrink-0 relative z-10'
                  style={
                    step.badgeColor === "purple"
                      ? {
                          background:
                            "linear-gradient(304.68deg, #7C3AED 10.04%, #7034D6 84.93%)",
                        }
                      : { background: "#FFC77A" }
                  }>
                  <span
                    className='font-medium text-[24px] sm:text-[28px] leading-[26px]'
                    style={{
                      color:
                        step.badgeColor === "purple" ? "#FFFFFF" : "#020A23",
                    }}>
                    {step.number}
                  </span>
                </div>

                {/* Text content */}
                <div className='text-center sm:text-left'>
                  <h3 className='font-semibold text-[18px] sm:text-[20px] leading-[26px] tracking-[2%] text-black'>
                    {step.title}
                  </h3>
                  <p className='mt-2 font-medium text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] tracking-[2%] text-[#605F62]'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
