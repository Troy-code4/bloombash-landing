// src/components/AboutHero.jsx
import useInView from "../hooks/useInView";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "15+", label: "Countries Served" },
  { value: "50+", label: "Team Members" },
  { value: "7+", label: "Years of Innovation" },
];

const AboutHero = () => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  const visible = isInView ? "anim-visible" : "";

  return (
    <section
      ref={sectionRef}
      className='w-full py-16 sm:py-20 md:py-28 flex items-center justify-center px-4 sm:px-8 bg-linear-to-r from-blue-900 to-purple-900'>
      <div className='w-full max-w-5xl flex flex-col items-center gap-8 sm:gap-10 md:gap-14'>
        {/* Tag */}
        <div
          className={`flex items-center justify-center gap-2 rounded-full border border-white/50 px-4 py-2 anim-hidden anim-fade-down ${visible}`}>
          <span className='w-2.5 h-2.5 rounded-full bg-white shrink-0' />
          <span className='font-semibold text-xs sm:text-sm md:text-base text-white text-center'>
            OUR STORY & PURPOSE
          </span>
        </div>

        {/* Heading */}
        <div className='w-full max-w-4xl flex flex-col items-center'>
          <h1
            className={`w-full font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-none text-center text-white anim-hidden anim-fade-up ${visible} anim-delay-2`}>
            We Are <span className='text-amber-300'>Bloombash</span>
          </h1>

          <p
            className={`w-full max-w-2xl mt-4 sm:mt-5 font-medium text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-center text-white/80 anim-hidden anim-fade-up ${visible} anim-delay-3`}>
            Bringing Ideas to Life, Nations, and the World. We're a technology
            company built on the belief that every great idea deserves the tools
            to become reality.
          </p>
        </div>

        {/* Stats */}
        <div className='w-full max-w-5xl grid grid-cols-2 sm:flex sm:flex-wrap items-start justify-center gap-6 sm:gap-10 md:gap-16'>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-2 sm:gap-3 anim-hidden anim-scale-in ${visible} anim-delay-${index + 4}`}>
              <span className='font-semibold text-2xl font-poppins sm:text-3xl md:text-5xl leading-none text-amber-300'>
                {stat.value}
              </span>
              <span className='font-semibold font-poppy text-xs sm:text-sm md:text-lg leading-tight md:leading-none text-white/80 text-center'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
