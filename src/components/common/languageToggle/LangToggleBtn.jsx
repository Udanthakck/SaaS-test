import { useLanguage } from '../../../context/LanguageContext';
import { useState } from 'react';

const LangToggleBtn = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Find the other language to show in the dropdown
  const otherLanguage = language === 'en' ? 'kr' : 'en';

  const handleMouseLeave = () => {
    // const btnContainer = document.getElementById('btnContainer');
    const btn1= document.getElementById('btn1');
    const btn2= document.getElementById('btn2');

    btn1.blur();
    btn2.blur();
    setIsOpen(false);
  };

  return (
    <div
      id='btnContainer'
      className='overflow-hidden flex flex-col border-btn-border hover:border-btn-def border rounded-md'
      onMouseLeave={handleMouseLeave}
    >
      {/* Main button showing the current language */}
      <button
        id='btn1'
        type="button"
        onClick={toggleDropdown}
        className=" px-3 py-1.5 font-medium text-sm text-txt-dark focus:text-white rounded focus:bg-btn-def outline-none transition-all duration-300"
      >
        {language.toUpperCase()}
      </button>


      {/* {isOpen && */}
      <button
        id='btn2'
        onClick={() => {
          changeLanguage(otherLanguage); // Change to the other language
          toggleDropdown(); // Close the dropdown after selection
        }}
        className={`px-3 font-medium text-sm text-txt-dark rounded outline-none transition-all duration-300 ${
          isOpen ? 'h-8 py-1.5 opacity-100' : 'h-0 py-0 opacity-0'
        }`}
        // className='px-3 h-8 font-medium text-sm text-txt-dark rounded outline-none transition-all duration-1000'
      >
          {otherLanguage.toUpperCase()}
      </button>
      {/* } */}

    </div>
  );
};

export default LangToggleBtn;

// TODO: fix btn animation