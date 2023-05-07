
        function calculateSquare() {
        var num = parseInt(document.getElementById("numInput").value);
        var i = 0;
        var square = 0;
        
        while (i < num) {
          square += num;
          i++;
        }

        document.getElementById("result").innerHTML = `The square of ${num} is ${square}.`;

    }

        function calculateCube() {
			var num = document.getElementById("numInput").value;
			var cube = 0;
			var i = 0;

			while (i < num) {
				cube += num * num;
				i++;
			}
        
        document.getElementById("result").innerHTML = `The cube of ${num} is ${cube}.`;
      }

      function reverseNumber() {
			var number = parseInt(document.getElementById("numInput").value);
			var reversedNumber = 0;

			while (number > 0) {
				var digit = number % 10;
				reversedNumber = reversedNumber * 10 + digit;
				number = Math.floor(number / 10);
			}

			document.getElementById("result").innerHTML = "Reversed Number: " + reversedNumber;
		}

        function calculate() {
  var number = document.getElementById("numInput").value;
  var sum = 0;
  var i = 1;
  while (i <= number) {
    sum += i;
    i++;
  }
  document.getElementById("result").innerHTML = "The sum of all numbers from 1 to " + number + " is " + sum;
}

function checkPalindrome() {
  var input = document.getElementById("numInput").value;
  var reversedNumber = 0;
  var originalNumber = input;

  while (originalNumber > 0) {
    var remainder = originalNumber % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    originalNumber = Math.floor(originalNumber / 10);
  }

  if (input == reversedNumber) {
    document.getElementById("result").innerHTML = input + " is a palindrome.";
  } else {
    document.getElementById("result").innerHTML = input + " is not a palindrome.";
  }
}

function calculateFactorial() {
			var num = document.getElementById("numInput").value;
			var result = 1;
			var i = 1;

			while (i <= num) {
				result *= i;
				i++;
			}

			document.getElementById("result").innerHTML = "Factorial of " + num + " is " + result;
		}

        function generateTable() {
			var num = parseInt(document.getElementById("numInput").value);
			var i = 1;
			var table = document.getElementById("table");
			var tableHTML = "";

			while (i <= 10) {
				tableHTML += "<tr><td>" + num + " x " + i + "</td><td>" + (num * i) + "</td></tr>";
				i++;
			}

			table.innerHTML = tableHTML;
		}

        function checkEvenOdd() {
			var number = document.getElementById("numInput").value;
			var result = "";
			var i = 0;
			while (i < number) {
				i += 2;
			}
			if (i === number) {
				result = number + " is even.";
			} else {
				result = number + " is odd.";
			}
			document.getElementById("result").textContent = result;
		}