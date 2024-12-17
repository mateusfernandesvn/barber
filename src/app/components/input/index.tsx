import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  ruler?: RegisterOptions;
  step?: string | number;
  value?: string;
}

export function Input({
  type,
  name,
  placeholder,
  register,
  error,
  ruler,
  step,
  value,
}: InputProps) {
  return (
    <div>
      <input
        className="w-full border-2 rounded-md h-10 p-2 text-black"
        placeholder={placeholder}
        type={type}
        step={step}
        value={value}
        {...register(name, ruler)}
        id={name}
      />
      {error && <p className=" text-red-400 mt-2">* {error}</p>}
    </div>
  );
}
