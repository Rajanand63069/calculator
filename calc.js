// calculate value of sine in radian
function sin() {
  document.calcul.result.value = Math.sin(document.calcul.result.value);
}
// calculate value of cos in radian
function cos() {
  document.calcul.result.value = Math.cos(document.calcul.result.value);
}
// calculate value of tan in radian
function tan() {
  document.calcul.result.value = Math.tan(document.calcul.result.value);
}
// delete individual digit 
function BACKSPC() {
  var a = document.calcul.result.value;
  document.calcul.result.value = a.substr(0, a.length - 1);
}
// calculate square
function square() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
}
// calculate power
let powerMode = false;
function power() {
  powerMode = true;
  document.calcul.result.value += "^";
}
// calculate square root
function sqrt2() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 1 / 2);
}
// calculate cube root
function sqrt3() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 1 / 3);
}
// display number on screen
function display(value) {
  if (powerMode) {
    // If powerMode is true, append the digits to the existing power
    document.calcul.result.value += value;
  } else {
    // Otherwise, append the value as usual
    document.calcul.result.value += value;
  }
}
// clear screen
function remv() {
  document.calcul.result.value = " ";
}
 // without error handling---> 
//function calculate() {
// if (powerMode) {
//     // If powerMode is active, evaluate the expression with exponentiation
//     const expression = document.calcul.result.value;
//     const parts = expression.split("^");
//     const base = parseFloat(parts[0]);
//     const exponent = parseFloat(parts[1]);
//     const result = Math.pow(base, exponent);
//     document.calcul.result.value = result;
//     powerMode = false; // Reset powerMode after the calculation
// } else {
//     // Otherwise, evaluate the expression normally
//     let expression = document.calcul.result.value;
//     // Replace all occurrences of 'e' with the actual value of 'e'
//     expression = expression.replace(/e/g, Math.exp(1));
//     document.calcul.result.value = eval(expression);

// }
// }

// With error handling---->
// calculate the value 
function calculate() {
  if (powerMode) {
    // If powerMode is active, evaluate the expression with exponentiation
    const expression = document.calcul.result.value;
    const parts = expression.split("^");
    if (parts.length !== 2) {
      document.calcul.result.value = "Error";
      return;
    }
    const base = parseFloat(parts[0]);
    const exponent = parseFloat(parts[1]);
    if (isNaN(base) || isNaN(exponent)) {
      document.calcul.result.value = "Error";
      return;
    }
    const result = Math.pow(base, exponent);
    document.calcul.result.value = result;
    powerMode = false; // Reset powerMode after the calculation
  } else {
    // Otherwise, evaluate the expression normally
    let expression = document.calcul.result.value;
    // Replace all occurrences of 'e' with the actual value of 'e'
    expression = expression.replace(/e/g, Math.exp(1));
    try {
      const result = eval(expression);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid expression");
      }
      document.calcul.result.value = result;
    } catch (error) {
      document.calcul.result.value = "Error";
    }
  }
}
// calculate value of e
function e() {
  powerMode = false;
  document.calcul.result.value += "e";
}
// calculate value of Log at base 10 
function calculateLog() {
  document.calcul.result.value = Math.log10(document.calcul.result.value);
}
// calculate value of Log at base e
function calculateLn() {
  document.calcul.result.value = Math.log(document.calcul.result.value);
}
