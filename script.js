// Mengambil dan menampilkan angka di layar
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    updateScreen(event.target.value);
  });
});

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// Menyimpan angka-angka dan operator untuk melakukan kalkulasi
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

// Mengaktifkan fungsi kalkulasi ke aplikasi calculatornya.
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

// Membuat tombol AC berjalan dengan lancar
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// Membuat aplikasi dapat mengkalkulasi angka desimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

// Mengaktifkan fungsi tombol % ke aplikasi calculatornya.
const percent = document.querySelector(".percentage");

percent.addEventListener("click", (event) => {
  inputPercent(event.target.value);
  updateScreen(currentNumber);
});

inputPercent = (percent) => {
  hasil = currentNumber / 100;
  currentNumber = hasil;
};
