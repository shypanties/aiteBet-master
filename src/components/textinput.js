import React from "react";
import "../styles/textinput.css";
import "../App.css";

const TextInput = ({ value, onChange, title }) => {
  return (
    <span className="flex-1 flex-row textinput-wrapper">
    {title}
    <input
      className="textinput"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    </span>
  );
};

export default TextInput;
