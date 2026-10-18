import useInView from "../hooks/useInView";
import logo from "../assets/Bloombash Logo.png";
import twitter from "../assets/Twitter.png";
import linkedin from "../assets/LinkedIn.png";
import instagram from "../assets/Instagram.png";
import email from "../assets/Email.png";

const footerSections = [
  {
    title: "Services",
    links: [
      "Software Development",
      "AI Solutions",
      "Product Design",
      "IT Consulting",
      "Cloud Infrastructure",
    ],
  },
  {
    title: "Industries",
    links: ["HealthTech", "FinTech", "AgriTech", "All Industries", "EduTech"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Work", "Careers", "Blog", "Press"],
  },
  {
    title: "Get In Touch",
    links: [
      "admin@bloombashglobal.com",
      "+234 907 482 7550",
      "Lagos, Nigeria",
      "Partner with us",
      "Book a call",
    ],
  },
];

const socialIcons = [
  { icon: twitter, alt: "X", url: "https://x.com/bloombashglobal" },
  {
    icon: linkedin,
    alt: "LinkedIn",
    url: "https://www.linkedin.com/company/bloombash",
  },
  {
    icon: instagram,
    alt: "Instagram",
    url: "https://www.instagram.com/bloombash_global",
  },
  { icon: email, alt: "Email", url: "mailto:hello@bloombashglobal.com" },
];

function Footer() {
  const [brandRef, brandInView] = useInView({ threshold: 0.15 });
  const [linksRef, linksInView] = useInView({ threshold: 0.1 });
  const [bottomRef, bottomInView] = useInView({ threshold: 0.2 });

  return (
    <footer className='bg-[#0E152C] text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 overflow-x-hidden'>
      <div className='max-w-311.25 mx-auto px-4 sm:px-6'>
        {/* Top Footer */}
        <div className='flex flex-col lg:flex-row justify-between gap-10 sm:gap-12 lg:gap-16'>
          {/* Brand */}
          <div ref={brandRef} className='max-w-76.75'>
            <img
              src={logo}
              alt='Bloombash Logo'
              width={183}
              height={40}
              className={`h-8 sm:h-10 w-auto cursor-pointer ${brandInView ? "anim-visible" : "anim-hidden"}`}
              style={{
                animation: brandInView
                  ? "fadeInLeft 0.7s cubic-bezier(0.22,1,0.36,1) both"
                  : "none",
              }}
            />

            <p
              className={`mt-4 sm:mt-5 text-[14px] sm:text-[15px] leading-6.5 sm:leading-7.5 font-medium text-white/70 ${brandInView ? "anim-visible" : "anim-hidden"}`}
              style={{
                animation: brandInView
                  ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : "none",
              }}>
              Bringing ideas to life, nations, and the world. Your technology
              partner for innovation.
            </p>

            {/* Social Icons */}
            <div className='flex gap-3 sm:gap-4 mt-5 sm:mt-6'>
              {socialIcons.map((social, index) => (
                <a
                  key={social.alt}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.alt}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] border border-[#87848B] bg-white/10 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors duration-300 ${
                    brandInView ? "anim-visible" : "anim-hidden"
                  }`}
                  style={{
                    animation: brandInView
                      ? `scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) ${
                          0.3 + index * 0.08
                        }s both`
                      : "none",
                  }}>
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className='w-4 h-4 sm:w-4.5 sm:h-4.5'
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div
            ref={linksRef}
            className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 lg:gap-21.5'>
            {footerSections.map((section, sectionIndex) => (
              <div
                key={section.title}
                className={`${linksInView ? "anim-visible" : "anim-hidden"}`}
                style={{
                  animation: linksInView
                    ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${sectionIndex * 0.1}s both`
                    : "none",
                }}>
                <h3 className='font-semibold text-[15px] sm:text-[16px] leading-6.5 sm:leading-7.5 mb-2 sm:mb-3'>
                  {section.title}
                </h3>

                <ul className='space-y-1 sm:space-y-2'>
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={link}
                      className={`text-[12px] sm:text-[14px] leading-6.5 sm:leading-7.5 text-white/80 hover:text-white cursor-pointer transition-colors ${linksInView ? "anim-visible" : "anim-hidden"}`}
                      style={{
                        animation: linksInView
                          ? `fadeIn 0.5s ease ${sectionIndex * 0.1 + linkIndex * 0.05 + 0.15}s both`
                          : "none",
                      }}>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`w-full h-px bg-white/10 my-6 sm:my-8 md:my-10 ${bottomInView ? "anim-visible" : "anim-hidden"}`}
          style={{
            animation: bottomInView
              ? "growWidth 0.8s cubic-bezier(0.22,1,0.36,1) both"
              : "none",
            transformOrigin: "left center",
          }}
        />

        {/* Bottom */}
        <div
          ref={bottomRef}
          className={`flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5 text-[12px] sm:text-[13px] text-white/70 text-center sm:text-left ${bottomInView ? "anim-visible" : "anim-hidden"}`}
          style={{
            animation: bottomInView
              ? "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"
              : "none",
          }}>
          <p>© 2025 Bloombash. All rights reserved. Built with purpose.</p>

          <div className='flex gap-6 sm:gap-8'>
            <span className='cursor-pointer hover:text-white transition-colors'>
              Privacy
            </span>
            <span className='cursor-pointer hover:text-white transition-colors'>
              Terms
            </span>
            <span className='cursor-pointer hover:text-white transition-colors'>
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
