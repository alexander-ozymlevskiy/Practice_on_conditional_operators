// Дано два різні числа. Визначити, яке з них більше, а яке менше.

const num1 = prompt("Введіть перше число:");
const num2 = prompt("Введіть друге число:");

if (num1 > num2) {
  alert(`Перше число: ${num1}, більше за друге: ${num2}`);
} else if (num1 < num2) {
  alert(`Перше число: ${num1}, менше від другого: ${num2}`);
} else {
  alert("Числа рівні.");
}

// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

const distanceKm = prompt("Введіть відстань у кілометрах:");
const distanceFeet = prompt("Введіть відстань у футах:");
const distance = distanceFeet * 0.305;

if (distance < distanceKm) {
  alert("Відстань у футах менша.");
} else {
  alert("Відстань у кілометрах менша.");
}

// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

if (distanceKm % distance === 0) {
  alert(`Введене число ${distanceKm} є дільником відстані ${distance}.`);
} else {
  alert(`Введене число ${distanceKm} не є дільником відстані ${distance}.`);
}

if (distance % distanceKm === 0) {
  alert(`Введене число ${distance} є дільником відстані ${distanceKm}.`);
} else {
  alert(`Введене число ${distance} не є дільником відстані ${distanceKm}.`);
}

// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

const number = prompt("Введіть число:");
const lastNumber = number % 10;

if (lastNumber % 2 === 0) {
  alert("Число закінчується парною цифрою.");
} else {
  alert("Число закінчується непарною цифрою.");
}
alert("Остання цифра: " + lastNumber);

// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

let twoDigit = prompt("Введіть двозначне число:");

while (twoDigit.length !== 2 || isNaN(twoDigit)) {
  twoDigit = prompt("Будь ласка, введіть двозначне число:");
}

const firstDigit = Number(twoDigit[0]);
const secondDigit = Number(twoDigit[1]);

if (firstDigit > secondDigit) {
  alert("Перша цифра більша.");
} else if (firstDigit < secondDigit) {
  alert("Друга цифра більша.");
} else {
  alert("Обидві цифри рівні.");
}

/* Дано тризначне число.
     - Визначити чи є парною сума його цифр.
     - Визначити, чи кратна сума цифр п'яти.
     - Визначити чи є добуток його цифр більше 100.
*/

let threeDigit = prompt("Введіть тризначне число:");

while (threeDigit.length !== 3 || isNaN(threeDigit)) {
  threeDigit = prompt("Будь ласка, введіть тризначне число:");
}

const firstNum = Number(threeDigit[0]);
const secondNum = Number(threeDigit[1]);
const thirdNum = Number(threeDigit[2]);

const sumNum = firstNum + secondNum + thirdNum;
const productNum = firstNum * secondNum * thirdNum;

let message = "";

if (sumNum % 2 === 0) {
  message += "Сума цифр є парною.\n";
} else {
  message += "Сума цифр є непарною.\n";
}

if (sumNum % 5 === 0) {
  message += "Сума цифр кратна п'яті.\n";
} else {
  message += "Сума цифр не є кратною п'яті.\n";
}

if (productNum > 100) {
  message += "Добуток цифр більше 100.\n";
} else {
  message += "Добуток цифр не перевищує 100.\n";
}

alert(message);

/* Дано тризначне число.
    - Чи правда, що всі цифри однакові?
    - Чи є серед цифр цифри однакові? */

let threeNum = prompt("Введіть тризначне число:");

while (threeNum.length !== 3 || isNaN(threeNum)) {
    threeNum = prompt("Будь ласка, введіть тризначне число:");
  }

const firstNumber = Number(threeNum[0]);
const secondNumber = Number(threeNum[1]);
const thirdNumber = Number(threeNum[2]);

const allDigitsSame = firstNumber === secondNumber && secondNumber === thirdNumber;
const anyDigitsSame = firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber;

if (allDigitsSame) {
    alert("Всі цифри однакові.");
} else {
    alert("Не всі цифри однакові.");
}

if (anyDigitsSame) {
    alert("Серед цифр є однакові.");
} else {
    alert("Серед цифр немає однакових.");
}


// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

let sixDigit = prompt("Введіть шестизначне число:");

while (sixDigit.length !== 6 || isNaN(sixDigit)) {
    sixDigit = prompt("Будь ласка, введіть шестизначне число:");
  }

let mirrorDigit = true;

for (let i = 0; i < 3; i++) {
    if (sixDigit[i] !== sixDigit[5 - i]) {
        mirrorDigit = false;
        break;
    }
}

if (mirrorDigit) {
    alert("Задане число є дзеркальним");
} else {
    alert("Задане число не є дзеркальним");
}
