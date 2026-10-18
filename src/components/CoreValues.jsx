import useInView from "../hooks/useInView";
import innovationIcon from "../assets/Innovation.png";
import inclusivityIcon from "../assets/Inclusivity.png";
import integrityIcon from "../assets/Integrity.png";
import excellenceIcon from "../assets/Excellence.png";
import collaborationIcon from "../assets/Collaboration.png";

const values = [
  {
    icon: innovationIcon,
    title: "INNOVATION FIRST",
    description:
      "We push boundaries to build what others won't constantly exploring new frontiers in technology.",
  },
  {
    icon: inclusivityIcon,
    title: "INCLUSIVITY",
    description:
      "We believe great ideas can come from anyone, regardless of background, geography, or resources.",
  },
  {
    icon: integrityIcon,
    title: "INTEGRITY",
    description:
      "We build with transparency, trust, and purpose delivering on every commitment we make.",
  },
  {
    icon: excellenceIcon,
    title: "EXCELLENCE",
    description:
      "We deliver quality without compromise, every product, every feature, every interaction.",
  },
  {
    icon: collaborationIcon,
    title: "COLLABORATION",
    description:
      "We grow ideas together with the people behind them, your success is our shared mission.",
  },
];

function CoreValues() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id='values'
      className='w-full bg-[#EAEAF8] py-12 sm:py-16 md:py-22.5'>
      <div className='max-w-332.5 mx-auto px-4 sm:px-6'>
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
              Our Foundation
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
            Built on <span className='text-[#7C3AED]'>Core Values</span>
          </h2>

          {/* Description */}
          <p
            className={`mt-3 sm:mt-4 md:mt-5 max-w-145 text-center text-[15px] sm:text-[17px] md:text-[18px] leading-6.5 sm:leading-7.5 md:leading-8 font-medium text-[#020A23CC] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both"
                : "none",
            }}>
            These aren't just words on a wall, they define every line of code we
            write and every client we serve.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className='mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5'>
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`
                bg-white
                rounded-[10px]
                border
                border-[#87848B4D]
                p-4 sm:p-5
                min-h-50 sm:min-h-57.5 md:min-h-62.5
                flex
                flex-col
                items-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                ${cardsInView ? "anim-visible" : "anim-hidden"}
              `}
              style={{
                animation: cardsInView
                  ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s both`
                  : "none",
              }}>
              {/* Icon */}
              <img
                src={value.icon}
                alt={value.title}
                className='w-6.5 h-8 sm:w-7.5 sm:h-9 object-contain'
              />

              {/* Title */}
              <h3 className='mt-4 sm:mt-6 text-[14px] sm:text-[16px] leading-5.5 sm:leading-6.5 font-bold text-[#020A23]'>
                {value.title}
              </h3>

              {/* Description */}
              <p className='mt-2 sm:mt-4 text-[13px] sm:text-[14px] leading-5.5 sm:leading-6.5 font-semibold text-[#605F62]'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
