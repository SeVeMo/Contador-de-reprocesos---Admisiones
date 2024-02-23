const popupButton = document.getElementById("popupButton");
const popupMenu = document.getElementById("popupMenu");
const optionsSelect = document.getElementById("options");
const selectButton = document.getElementById("selectButton");
const clickedOptions = document.getElementById("clickedOptions");
const counter = document.getElementById("counter");

let clickCount = 0;

popupButton.addEventListener("click", () => {
  popupMenu.style.display = "block";
});

selectButton.addEventListener("click", () => {
  const selectedOption = optionsSelect.value;
  const dateTime = new Date().toLocaleString();
  const optionText = document.createElement("p");
  optionText.textContent = `${selectedOption} - ${dateTime}`;
  clickedOptions.appendChild(optionText);
  popupMenu.style.display = "none";
  
  clickCount++;
  counter.textContent = clickCount;
});

