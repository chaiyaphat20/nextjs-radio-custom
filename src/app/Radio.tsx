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
        shadow  cursor-pointer
        transition-all
        `
      }
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
