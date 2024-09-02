import { Dispatch, SetStateAction } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

interface Field {
    id: string;
    label: string;
    options: string[];
    placeholder: string;
  }
  
  interface DropdownProps {
    feild: Field; 
    options: string[];
    setFormData: Dispatch<SetStateAction<Record<string, string | number>>>;
  }
export default function Dropdown({
  feild,
  options,
  setFormData
}: DropdownProps) {
   const [selectedOpt,setSelectedOpt]=useState<string | null>(null)
   const [open,setisOpen]=useState<boolean>(false)

  return (
    <Menu as="div" className="relative inline-block text-left w-full bg-[#0C1220] rounded-md">
      <div >
        <Menu.Button className="flex justify-between  p-4 w-full"
        onClick={()=>setisOpen(!open)}>
          <p className='text-[15px]'>
            {selectedOpt? selectedOpt :feild.label}
            </p>
            {open?<IoMdArrowDropleft className='h-10 w-10'/>
            :<IoMdArrowDropdown className='h-10 w-10'/>}

        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-5 w-full origin-top-right rounded-md bg-[#0C1220] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2">
          <div className="py-1">
            {options.map((opt) => (
              <Menu.Item key={opt}>
                <p 
                  className='text-dark-grey font-semibold block px-4 py-4 text-[13px] hover:bg-[#162038] hover:cursor-pointer'
                  onClick={() =>{
                     setFormData((prev) => ({ ...prev, [feild.id]: opt }));
                    setSelectedOpt(opt)}
                }
                >
                  {opt}
                </p>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
