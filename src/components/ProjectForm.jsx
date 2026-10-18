import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { supabase } from "../lib/supabase";
import useInView from "../hooks/useInView";

const DEFAULT_BUILD_TYPE = "Custom Software/Web App";

const ProjectForm = () => {
  const location = useLocation();
  const incomingBuildType = location.state?.buildType;
  const initialBuildType = incomingBuildType || DEFAULT_BUILD_TYPE;

  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });
  const visible = isInView ? "anim-visible" : "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    buildType: initialBuildType,
    projectDetails: "",
  });

  const [honey, setHoney] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const isFormValid =
    formData.firstName.trim() !== ""
    && formData.lastName.trim() !== ""
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())
    && formData.projectDetails.trim() !== "";

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () =>
    setFormData({
      firstName: "",
      lastName: "",
      workEmail: "",
      buildType: initialBuildType,
      projectDetails: "",
    });

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
        .from("project_requests")
        .insert([
          {
            first_name: formData.firstName.trim(),
            last_name: formData.lastName.trim(),
            work_email: formData.workEmail.trim(),
            build_type: formData.buildType,
            project_details: formData.projectDetails.trim(),
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
        Let's build together
      </h2>

      <p
        className={`text-gray-600 mb-8 anim-hidden anim-fade-up ${visible} anim-delay-2`}>
        Fill out the form below and our technical leads will reach out.
      </p>

      {submitted && (
        <div className='mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800'>
          Request submitted successfully.
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
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='project-first-name'
              className='block text-sm font-semibold text-gray-900 mb-2'>
              First Name
            </label>
            <input
              id='project-first-name'
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='Jane'
              maxLength={100}
              required
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          <div>
            <label
              htmlFor='project-last-name'
              className='block text-sm font-semibold text-gray-900 mb-2'>
              Last Name
            </label>
            <input
              id='project-last-name'
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Doe'
              maxLength={100}
              required
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='project-work-email'
            className='block text-sm font-semibold text-gray-900 mb-2'>
            Work Email
          </label>
          <input
            id='project-work-email'
            type='email'
            name='workEmail'
            value={formData.workEmail}
            onChange={handleChange}
            placeholder='jane@company.com'
            maxLength={254}
            required
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-900 mb-2'>
            What are you looking to build ?
          </label>

          <Dropdown value={formData.buildType} onChange={handleChange} />
        </div>

        <div>
          <label
            htmlFor='project-details'
            className='block text-sm font-semibold text-gray-900 mb-2'>
            Project Details
          </label>

          <textarea
            id='project-details'
            name='projectDetails'
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder='Tell us a bit about your timelines, goals, and any specific requirements...'
            rows={5}
            maxLength={5000}
            required
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
          />
        </div>

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
          {submitting ? "Submitting..." : "Submit Project Request"}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
