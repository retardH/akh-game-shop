import React, { useRef } from "react";
// import "./OTPInput.css";  import your CSS file for styling

const OTPInput = () => {
  const inputRefs = useRef([]);

  const handleInput = (event, index) => {
    const input = inputRefs.current[index];

    if (event.target.value.length === 1) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      } else {
        input.blur();
      }
    } else if (event.target.value.length === 0) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.keyCode === 8) {
      const input = inputRefs.current[index];

      if (input.value.length === 0) {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    }
  };

  return (
    <div>
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="number"
          maxLength="1"
          autoFocus={index === 0}
          onInput={(event) => handleInput(event, index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        />
      ))}
    </div>
  );
};

export default OTPInput;