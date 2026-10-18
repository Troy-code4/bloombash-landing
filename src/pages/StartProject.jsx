import ProjectHero from "../components/ProjectHero";
import ProjectForm from "../components/ProjectForm";
import Footer2 from "../components/Footer2";

function StartProject() {
  return (
    <div className='overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-2 py-7   sm:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start'>
          <ProjectHero />
          <ProjectForm />
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default StartProject;
