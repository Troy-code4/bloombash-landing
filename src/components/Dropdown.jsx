import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const buildOptions = [
  "Custom Software/Web App",
  "AI Powered Solutions",
  "Product Design & MVP",
  "IT Consulting",
  "Tech Infrastructure",
  "Startup Acceleration",
  "Industry Solutions",
];

function Dropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = option => {
    onChange({ target: { name: "buildType", value: option } });
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className='relative'>
      <button
        type='button'
        onClick={() => setOpen(prev => !prev)}
        className='w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500'>
        <span>{value}</span>
        <ChevronDown
          size={18}
          className={`text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className='absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden'>
          {buildOptions.map(option => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-3 cursor-pointer hover:bg-purple-50 ${
                option === value
                  ? "bg-purple-50 text-purple-700 font-medium"
                  : "text-gray-900"
              }`}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
