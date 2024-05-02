import { createContext, useContext, ReactNode } from "react";

interface RadioContextValue {
  value: string;
  onChange: (newValue: string) => void;
}

const RadioContext = createContext<RadioContextValue>({
  onChange: (newValue: string) => { },
  value: ''
});

export default function Radio({ children, ...props }: { children: ReactNode; value: string }) {
  const { value, onChange } = useContext(RadioContext);

  return (
    <label
      className={`
        px-6 py-4 shadow rounded-lg cursor-pointer
        transition-all
        ${value === props.value
          ? "bg-gradient-to-t from-violet-200 to-violet-100 text-violet-800 shadow-violet-500 scale-105"
          : "bg-white hover:shadow-md shadow-gray-300"
        }`}
    >
      <input
        type="radio"
        className="hidden"
        checked={value === props.value}
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
      {children}
    </label>
  );
}

export function RadioGroup({ value, onChange, children }: { value: string; onChange: (newValue: string) => void; children: ReactNode }) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  );
}
