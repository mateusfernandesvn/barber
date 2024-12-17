import React from "react";

interface SelectProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  options: { value: string; label: string }[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({
  name,
  register,
  options,
  error,
}) => {
  return (
    <div>
      <select
        {...register(name)}
        className="w-full border-2 rounded-md h-10 p-2 text-black "
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 mt-2 ">* {error}</p>}
    </div>
  );
};
