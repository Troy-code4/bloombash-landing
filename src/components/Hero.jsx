import { useEffect, useState } from "react";
import playBtn from "../assets/Play button.png";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    value: (
      <>
        7<span className='text-[#7C3AED]'>+</span>
      </>
    ),
    label: "Service Verticals",
  },
  {
    value: (
      <>
        5<span className='text-[#7C3AED]'>+</span>
      </>
    ),
    label: "Industries served",
  },
  { value: "∞", label: "Ideas Possible" },
  {
    value: (
      <>
        1
        <span className='text-[#7C3AED] text-xl sm:text-3xl align-top'>st</span>
      </>
    ),
    label: "Step: Your Idea",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='w-full bg-[#DEDDFF] flex flex-col items-center text-center md:min-h-222 pt-12 sm:pt-16 md:pt-20 pb-8 md:pb-5 px-4 sm:px-6'>
      {/* Badge */}
      <div
        className={`flex items-center gap-2 sm:gap-3 rounded-full border border-[#87848B] bg-[#7C3AED1A] px-3 sm:px-4 py-2 sm:py-2.5 ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted
            ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"
            : "none",
        }}>
        <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7C3AED]' />

        <span className='uppercase text-xs sm:text-sm md:text-base font-extrabold tracking-wider text-[#420C9F]'>
          Innovation-Driven Tech Company
        </span>
      </div>

      {/* Heading */}
      <h1
        className={`mt-6 sm:mt-8 md:mt-10 max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight font-bold text-[#150734] ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted
            ? "fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s both"
            : "none",
        }}>
        Bringing{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#C9A96E 0%,#6B4DA8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Ideas to Life,
        </span>
        <br />
        Nations, and the World
      </h1>

      {/* Description */}
      <p
        className={`mt-4 sm:mt-6 md:mt-8 max-w-180 text-base md:text-lg leading-relaxed font-medium text-[#150734] ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted
            ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both"
            : "none",
        }}>
        We partner with dreamers, disruptors, and visionaries, regardless of
        background or resources to turn imagination into scalable,
        technology-driven innovation.
      </p>

      {/* Buttons */}
      <div
        className={`mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted
            ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both"
            : "none",
        }}>
        <button
          onClick={() => navigate("/start-a-project")}
          className='w-full sm:w-55 md:w-60 h-13 sm:h-14 md:h-15 rounded-2xl text-white text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'
          style={{
            background: "linear-gradient(95.25deg,#472187 3%,#7C3AED 100%)",
          }}>
          Start a Project
        </button>

        <button className='w-full sm:w-55 md:w-60 h-13 sm:h-14 md:h-15 rounded-2xl border-2 border-[#87848B] flex items-center justify-center gap-3 text-lg sm:text-xl font-semibold text-[#150734] transition-all duration-300 hover:bg-white/30 cursor-pointer'>
          <img src={playBtn} alt='Play' className='w-4 h-4 sm:w-5 sm:h-5' />
          Watch Our Story
        </button>
      </div>

      {/* Stats */}
      <div className='mt-12 sm:mt-16 md:mt-24 grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-10 md:gap-16'>
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center ${mounted ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: mounted
                ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.75 + index * 0.12}s both`
                : "none",
            }}>
            <p
              className={`font-bold text-center text-[#150734] ${
                stat.value === "∞"
                  ? "text-4xl md:text-5xl"
                  : "text-3xl md:text-4xl"
              }`}>
              {stat.value}
            </p>

            <p className='mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-[#150734] whitespace-nowrap'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
