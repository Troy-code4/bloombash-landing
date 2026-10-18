// src/components/MissionValues.jsx
import rocketImg from "../assets/Illustration Rocket.png";
import telescopeImg from "../assets/Illustration Telescope.png";
import useInView from "../hooks/useInView";

const MissionValues = () => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  const visible = isInView ? "anim-visible" : "";

  return (
    <section
      ref={sectionRef}
      className='w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-indigo-50'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16'>
          <div
            className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-200 anim-hidden anim-fade-down ${visible}`}>
            <span className='w-2 h-2 rounded-full bg-purple-600 shrink-0' />
            <span className='font-semibold text-xs sm:text-sm text-purple-700'>
              WHO WE ARE
            </span>
          </div>

          <h2
            className={`font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 anim-hidden anim-fade-up ${visible} anim-delay-2`}>
            Purpose-Driven <span className='text-violet-600'>Innovation</span>
          </h2>

          <p
            className={`text-sm sm:text-base text-gray-600 max-w-xl anim-hidden anim-fade-up ${visible} anim-delay-3`}>
            Our mission and vision guide everything we build, every partnership
            we form, and every problem we solve.
          </p>
        </div>

        {/* Mission */}
        <div className='grid md:grid-cols-2 gap-6 sm:gap-8 items-center'>
          <div className={`anim-hidden anim-fade-left ${visible} anim-delay-4`}>
            <h3 className='font-serif text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-slate-900'>
              MISSION
            </h3>

            <p className='text-gray-900 text-base sm:text-lg md:text-xl font-medium'>
              At Bloombash, we are committed to building cutting-edge
              technologies and tailor made solutions that bring ideas to life.
              We partner with dreamers, disruptors, and visionaries regardless
              of background or resources to turn imagination into scalable
              innovation that serves industries, nations, and the world.
            </p>
          </div>

          <div
            className={`flex items-center justify-center anim-hidden anim-fade-right ${visible} anim-delay-5`}>
            <img
              src={rocketImg}
              alt='Mission illustration'
              className='w-full max-w-xs sm:max-w-sm md:max-w-full h-auto'
            />
          </div>
        </div>

        {/* Vision */}
        <div className='grid md:grid-cols-2 gap-6 sm:gap-8 items-center mt-8 sm:mt-10 md:mt-8'>
          <div
            className={`flex items-center justify-center order-2 md:order-1 anim-hidden anim-fade-left ${visible} anim-delay-6`}>
            <img
              src={telescopeImg}
              alt='Vision illustration'
              className='w-full max-w-xs sm:max-w-sm md:max-w-full h-auto'
            />
          </div>

          <div
            className={`order-1 md:order-2 anim-hidden anim-fade-right ${visible} anim-delay-7`}>
            <h3 className='font-serif text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-slate-900'>
              VISION
            </h3>

            <p className='text-gray-900 text-base sm:text-lg md:text-xl font-medium'>
              To be the world's most trusted catalyst for innovation, empowering
              individuals, companies, and nations by transforming even the most
              unlikely ideas into impactful, technology-driven realities that
              reshape industries and improve lives globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
