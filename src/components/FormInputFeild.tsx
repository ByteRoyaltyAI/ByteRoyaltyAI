import { ChangeEvent } from "react";


interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
  }
  
export  const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder, onChange, required = false }) => (
    <div>
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        id={id}
        type={type}
        onChange={onChange}
        className="p-4 text-[15px] bg-[#0C1220] rounded-lg placeholder:text-[#9AA0AD]"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
