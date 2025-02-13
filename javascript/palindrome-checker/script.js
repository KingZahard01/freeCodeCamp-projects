document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;
  const resultElement = document.getElementById("result");

  if (!input.trim()) {
    alert("Please input a value");
    return;
  }

  // Process input: remove non-alphanumeric characters and convert to lowercase
  const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if it's a palindrome
  const isPalindrome =
    sanitizedInput === sanitizedInput.split("").reverse().join("");

  // Update the result
  if (isPalindrome) {
    resultElement.textContent = `${input} is a palindrome`;
  } else {
    resultElement.textContent = `${input} is not a palindrome`;
  }
});
