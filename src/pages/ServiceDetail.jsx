// src/pages/ServiceDetail.jsx
import { useParams, Link, Navigate } from "react-router-dom";
import { services, serviceOrder } from "../data/servicesData";
import useInView from "../hooks/useInView";

const COLUMN_DELAYS = ["", "anim-delay-2"];

const CardItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const visible = inView ? "anim-visible" : "";

  return (
    <div
      ref={ref}
      className={`bg-slate-50 rounded-xl p-6 border border-slate-100 anim-hidden anim-scale-in ${visible} ${COLUMN_DELAYS[index % 2]}`}>
      <p className='font-bold text-slate-900 mb-2'>{item.title}</p>
      <p className='text-slate-500 text-sm leading-relaxed'>{item.desc}</p>
    </div>
  );
};

const CardGrid = ({ heading, items }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const visible = inView ? "anim-visible" : "";

  return (
    <div>
      <h3
        ref={ref}
        className={`text-2xl font-bold text-slate-900 mb-6 anim-hidden anim-fade-up ${visible}`}>
        {heading}
      </h3>
      <div className='grid md:grid-cols-2 gap-5'>
        {items.map((item, index) => (
          <CardItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

const ServiceContent = ({ service, slug }) => {
  const [backRef, backInView] = useInView({ threshold: 0.15 });
  const [sideRef, sideInView] = useInView({ threshold: 0.15 });
  const [mainRef, mainInView] = useInView({ threshold: 0.1 });
  const [heroRef, heroInView] = useInView({ threshold: 0.15 });
  const [introRef, introInView] = useInView({ threshold: 0.15 });

  const back = backInView ? "anim-visible" : "";
  const side = sideInView ? "anim-visible" : "";
  const main = mainInView ? "anim-visible" : "";
  const hero = heroInView ? "anim-visible" : "";
  const intro = introInView ? "anim-visible" : "";

  return (
    <div className='bg-[#EAEAF8] min-h-screen py-10 px-6 md:px-16'>
      <Link
        ref={backRef}
        to='/'
        className={`flex items-center w-fit gap-2 text-slate-900 font-medium mb-8 anim-hidden anim-fade-down ${back}`}>
        ← Back to Solutions
      </Link>

      <div className='grid md:grid-cols-[280px_1fr] gap-8 max-w-6xl mx-auto'>
        {/* Sidebar */}
        <aside
          ref={sideRef}
          className={`bg-white rounded-2xl p-6 h-fit anim-hidden anim-fade-right ${side}`}>
          <p className='text-xs font-semibold tracking-wide text-slate-400 mb-4'>
            OUR SOLUTIONS
          </p>
          <nav className='flex flex-col gap-1'>
            {serviceOrder.map(key => (
              <Link
                key={key}
                to={`/services/${key}`}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  key === slug
                    ? "bg-purple-100 text-purple-700"
                    : "text-slate-800 hover:bg-slate-50"
                }`}>
                {services[key].label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div
          ref={mainRef}
          className={`bg-white rounded-2xl overflow-hidden anim-hidden anim-fade-up anim-delay-2 ${main}`}>
          {/* Hero */}
          <div
            ref={heroRef}
            className={`bg-linear-to-br ${service.heroGradient} px-10 py-14`}>
            <h1
              className={`text-4xl font-bold text-white mb-4 anim-hidden anim-fade-up ${hero}`}>
              {service.title}
            </h1>
            <p
              className={`text-slate-200 max-w-xl mb-8 anim-hidden anim-fade-up anim-delay-2 ${hero}`}>
              {service.subtext}
            </p>
            <Link
              to='/start-a-project'
              state={{ buildType: service.buildType }}
              className={`inline-block cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors anim-hidden anim-fade-up anim-delay-3 ${hero}`}>
              {service.ctaText}
            </Link>
          </div>

          {/* Intro */}
          <div className='px-10 py-10'>
            <div ref={introRef}>
              <h2
                className={`text-2xl font-bold text-slate-900 mb-4 anim-hidden anim-fade-up ${intro}`}>
                {service.introHeading}
              </h2>
              <p
                className={`text-slate-500 leading-relaxed mb-10 anim-hidden anim-fade-up anim-delay-2 ${intro}`}>
                {service.introParagraph}
              </p>
            </div>

            <CardGrid
              heading={service.capabilitiesHeading}
              items={service.capabilities}
            />

            {service.secondSection && (
              <div className='mt-12'>
                <CardGrid
                  heading={service.secondSection.heading}
                  items={service.secondSection.items}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) return <Navigate to='/' replace />;

  // key={slug} remounts the page when switching services from the sidebar,
  // so every animation replays for the new service
  return <ServiceContent key={slug} service={service} slug={slug} />;
};

export default ServiceDetail;
