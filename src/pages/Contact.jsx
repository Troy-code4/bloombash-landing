import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Footer2 from "../components/Footer2";

function Contact() {
  return (
    <div className='overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-2 py-7 sm:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start'>
          <ContactHero />
          <ContactForm />
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Contact;
