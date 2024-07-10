document.getElementById('convertButton').addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let resultValue;

    if (isNaN(inputValue)) {
        resultValue = "Invalid input";
    } else {
        resultValue = convertUnits(inputValue, inputUnit, outputUnit);
    }

    document.getElementById('resultValue').textContent = resultValue;
});

function convertUnits(value, fromUnit, toUnit) {
    const conversions = {
        meters: { feet: value => value * 3.28084 },
        feet: { meters: value => value * 0.3048 },
        kilograms: { pounds: value => value * 2.20462 },
        pounds: { kilograms: value => value * 0.453592 },
        celsius: { fahrenheit: value => (value * 9/5) + 32 },
        fahrenheit: { celsius: value => (value - 32) * 5/9 }
    };

    if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
        return conversions[fromUnit][toUnit](value).toFixed(3);
    } else {
        return "Conversion not supported";
    }
}
