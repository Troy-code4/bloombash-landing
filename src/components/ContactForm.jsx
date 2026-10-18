// src/components/ContactForm.jsx
import { useState } from "react";
import { supabase } from "../lib/supabase";
import useInView from "../hooks/useInView";

const ContactForm = () => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  const visible = isInView ? "anim-visible" : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [honey, setHoney] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const isFormValid =
    formData.name.trim() !== ""
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    && formData.subject.trim() !== ""
    && formData.message.trim() !== "";

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () =>
    setFormData({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isFormValid || submitting) return;

    // Bot filled the honeypot: pretend success, send nothing
    if (honey) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      resetForm();
      return;
    }

    setSubmitting(true);
    setSubmitted(false);
    setSubmitError(false);

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          },
        ]);

      if (error) {
        console.error("Submission failed:", error);
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
        return;
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      resetForm();
    } catch (error) {
      console.error("Unexpected submission error:", error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className='bg-gray-100 rounded-2xl px-6 py-5 md:p-10 border-gray-100'>
      <h2
        className={`text-3xl font-bold text-gray-900 mb-2 anim-hidden anim-fade-down ${visible}`}>
        Send us a message
      </h2>

      <p
        className={`text-gray-600 mb-8 anim-hidden anim-fade-up ${visible} anim-delay-2`}>
        Fill out the form below and our team will get back to you.
      </p>

      {submitted && (
        <div className='mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800'>
          Thanks, we'll be in touch!
        </div>
      )}

      {submitError && (
        <div className='mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800'>
          Unable to submit. Please try again.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`space-y-6 anim-hidden anim-fade-up ${visible} anim-delay-3`}>
        <div>
          <label
            htmlFor='contact-name'
            className='block text-sm font-semibold text-gray-900 mb-2'>
            Name
          </label>
          <input
            id='contact-name'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your full name'
            maxLength={100}
            required
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label
            htmlFor='contact-email'
            className='block text-sm font-semibold text-gray-900 mb-2'>
            Email
          </label>
          <input
            id='contact-email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='you@example.com'
            maxLength={254}
            required
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label
            htmlFor='contact-subject'
            className='block text-sm font-semibold text-gray-900 mb-2'>
            Subject
          </label>
          <input
            id='contact-subject'
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='How can we help?'
            maxLength={150}
            required
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label
            htmlFor='contact-message'
            className='block text-sm font-semibold text-gray-900 mb-2'>
            Message
          </label>
          <textarea
            id='contact-message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Leave us a message...'
            rows={5}
            maxLength={5000}
            required
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
          />
        </div>

        {/* Honeypot: real users never see or fill this */}
        <input
          type='text'
          name='website'
          value={honey}
          onChange={e => setHoney(e.target.value)}
          className='sr-only'
          tabIndex={-1}
          autoComplete='off'
          aria-hidden='true'
        />

        <button
          type='submit'
          disabled={submitting || !isFormValid}
          className='cursor-pointer w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors'>
          {submitting
            ? "Sending..."
            : submitted
              ? "Message Sent"
              : "Get Started"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
