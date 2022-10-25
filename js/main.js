function getNumber(func, num1, num2) {
  let numbers = func(num1, num2);
  return numbers;
}

const division = function (a, b) {
  return a / b;
};

const result = getNumber(division, 20, 2);
// masala

const teacher = {
  name: "Xolmirza",
  subject: "web dasturlash",
  age: 30,
  darajasi: "middle",
  ilmi: true,
};
// ma'lumot

let num;

do {
  num = prompt("To'g'ri sonni top (10-20)");
} while (num <= 17 && num);
