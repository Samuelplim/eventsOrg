import { ChangeEvent } from "react";

interface TextFieldProps {
  type: "text" | "date" | "file";
  id: string;
  value: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const TextField = ({
  type = "text",
  id,
  value,
  onchange,
  name,
}: TextFieldProps) => {
  return (
    <form className="md:w-96 sm:w-full">
      <label
        form={id}
        className="mb-2 xl:text-sm  md:text-xs font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <div className="flex gap-2">
        <input
          type={type}
          id={id}
          className="block w-full p-4 md:ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={name}
          required
          onChange={onchange}
          value={value}
        />
      </div>
    </form>
  );
};
