document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector(".conButton button");
    const unitValue = document.getElementById("unitType");
    const unitValueInput = document.getElementById("unitValue");
    const type1Select = document.getElementById("type1");
    const type2Select = document.getElementById("type2");
    const ansValueInput = document.getElementById("ansValue");
  
    convertButton.addEventListener("click", function () {
      const inputValue = parseFloat(unitValueInput.value);
      const unitType = unitValue.value;
      const fromType = type1Select.value;
      const toType = type2Select.value;
      let convertedValue;
      let errorMessage = "";
  
      // Handle temperature conversions
      if (unitType === "temp") {
        if (fromType === "cel" && toType === "far") {
          convertedValue = (inputValue * 9 / 5) + 32;
        } else if (fromType === "far" && toType === "cel") {
          convertedValue = (inputValue - 32) * 5 / 9;
        } else if ((fromType === "cel" || fromType === "far") && (toType !== "cel" && toType !== "far")) {
          errorMessage = "Invalid Conversion";
        } else if ((toType === "cel" || toType === "far") && (fromType !== "cel" && fromType !== "far")) {
          errorMessage = "Invalid Conversion";
        } else if ((fromType !== "cel" && fromType !== "far") && (toType === "cel" || toType === "far")) {
          errorMessage = "Invalid Conversion";
        }
      }
  
      // Handle length conversions
      else if (unitType === "length") {
        if (fromType === "m" && toType === "cm") {
          convertedValue = inputValue * 100;
        } else if (fromType === "cm" && toType === "m") {
          convertedValue = inputValue / 100;
        } else if ((fromType === "cm" || fromType === "m") && (toType !== "cm" && toType !== "m")) {
          errorMessage = "Invalid Conversion";
        } else if ((toType === "cm" || toType === "m") && (fromType !== "cm" && fromType !== "m")) {
          errorMessage = "Invalid Conversion";
        } else if ((fromType !== "cm" && fromType !== "m") && (toType === "cm" || toType === "m")) {
          errorMessage = "Invalid Conversion";
        }
      }
  
      // Handle currency conversions
      else if (unitType === "curr") {
        if (fromType === "dol" && toType === "rup") {
          convertedValue = inputValue * 73.92;
        } else if (fromType === "rup" && toType === "dol") {
          convertedValue = inputValue / 73.92;
        } else if ((fromType === "dol" || fromType === "rup") && (toType !== "dol" && toType !== "rup")) {
          errorMessage = "Invalid Conversion";
        } else if ((toType === "dol" || toType === "rup") && (fromType !== "dol" && fromType !== "rup")) {
          errorMessage = "Invalid Conversion";
        } else if ((fromType !== "dol" && fromType !== "rup") && (toType !== "dol" && toType !== "rup")) {
          errorMessage = "Invalid Conversion";
        }
      }
  
      // Display the result or error message
      if (errorMessage) {
        ansValueInput.value = errorMessage;
      } else {
        ansValueInput.value = convertedValue.toFixed(3);
      }
    });
  });