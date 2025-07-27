// 1. Color Changer Class
class ColorChanger {
  static isOriginal = true;

  static change() {
    const btn = document.querySelector(".btn-color");
    if (ColorChanger.isOriginal) {
      btn.style.backgroundColor = "crimson";
    } else {
      btn.style.backgroundColor = "steelblue";
    }
    ColorChanger.isOriginal = !ColorChanger.isOriginal;
  }
}

// 2. Greeting Alert Class
class GreetingAlert {
  static show() {
    const hour = new Date().getHours();
    let message;

    if (hour < 12) {
      message = "Good morning!";
    } else if (hour < 18) {
      message = "Good afternoon!";
    } else {
      message = "Good evening!";
    }

    alert(message);
  }
}

// 3. Calculator Class
class Calculator {
  static add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultArea = document.getElementById("result");

    if (!isNaN(num1) && !isNaN(num2)) {
      resultArea.textContent = `Result: ${num1 + num2}`;
    } else {
      resultArea.textContent = "Please enter valid numbers.";
    }
  }
}
