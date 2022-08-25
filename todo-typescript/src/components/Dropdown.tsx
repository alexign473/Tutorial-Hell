import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

type DropdownProps = {
  icon?: string;
  options: Array<Option>;
};

export const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative inline-block z-10'>
      <BsThreeDotsVertical
        className='cursor-pointer'
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className='absolute top-0 right-5 shadow bg-white'>
          {options.map((option: Option) => (
            <button
              className={`w-full text-left bg-white px-5 py-2 hover:bg-gray-300`}
              key={option.value}
              onClick={() => {
                option.onClick();
                toggleDropdown();
              }}
            >
              {option.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
