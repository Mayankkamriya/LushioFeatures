import React, { useState } from "react";
import "./AddressSelector.css"

const RadioButtonSelection = () => {
  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
<div className="address-selector-container">
  <h3>Please select an option:</h3>
  {options.length > 0 ? (
    <>
      {options.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            id={`option-${option.id}`}
            name="options"
            value={option.label}
            checked={selectedOption === option.label} // Check if this option is selected
            onChange={handleOptionChange} // Call the handler on change
          />
          <label htmlFor={`option-${option.id}`}>{option.label}</label>
        </div>
      ))}

      <div>
        <h4>Selected Option:</h4>
        {selectedOption ? (
          <p>You selected: {selectedOption}</p>
        ) : (
          <p>No option selected yet.</p>
        )}
      </div>
    </>
  ) : (
    <p style={{ color: "red" }}>No options available. Please check back later.</p>
  )}
</div>

  );
};

export default RadioButtonSelection;
