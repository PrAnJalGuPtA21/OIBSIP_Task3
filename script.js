function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitSelect = document.getElementById("unit");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    var resultInput = document.getElementById("result");
    
    // Validate the temperature input
    if (!isNumeric(temperatureInput)) {
      alert("Please enter a valid number for the temperature.");
      return;
    }
    
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    
    if (selectedUnit === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      resultInput.value = convertedTemperature.toFixed(2) + " °F";
    } else {
      convertedTemperature = (temperature - 32) * 5/9;
      resultInput.value = convertedTemperature.toFixed(2) + " °C";
    }
  }
  
  function isNumeric(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
  }