const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#result");

  // Check if height is not a number, empty, or negative
  if (
    isNaN(height) ||
    height < 0 ||
    document.querySelector("#height").value.trim() === ""
  ) {
    results.innerText = "Please enter a valid height";
    return; // Exit the function to prevent further execution
  }

  // Check if weight is not a number, empty, or negative
  if (
    isNaN(weight) ||
    weight < 0 ||
    document.querySelector("#weight").value.trim() === ""
  ) {
    results.innerText = "Please enter a valid weight";
    return; // Exit the function to prevent further execution
  }

  // If both height and weight are valid, proceed with further actions
});
