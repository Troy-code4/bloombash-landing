function ContactInfoCard({ icon, title, children }) {
  return (
    <div className='flex items-start gap-4 border-[#8F9FF1] border rounded-2xl  bg-gray-100 p-6 shadow-sm'>
      <div className='flex h-15 w-15  shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white'>
        {icon}
      </div>
      <div>
        <h3 className='font-semibold text-black'>{title}</h3>
        <div className='mt-1 text-sm leading-relaxed text-gray-700 font-medium'>
          {children}
        </div>
      </div>
    </div>
  );
}
export default ContactInfoCard;
