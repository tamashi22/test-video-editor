import React from "react";

interface TextInputProps {
  onChange: (value: string) => void;
  defaultValue?: string;
}

const TextInput: React.FC<TextInputProps> = ({ onChange, defaultValue }) => {
  return (
    <input
      type="text"
      placeholder="Enter your message"
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
    />
  );
};

export default TextInput;
