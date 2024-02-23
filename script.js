const popupButton = document.getElementById("popupButton");
const popupMenu = document.getElementById("popupMenu");
const optionsSelect = document.getElementById("options");
const selectButton = document.getElementById("selectButton");
const clickedOptions = document.getElementById("clickedOptions");
const counter = document.getElementById("counter");

let clickCount = 0;

// Función para cerrar el pop-up
function closePopup() {
  popupMenu.style.display = "none";
}

popupButton.addEventListener("click", () => {
  popupMenu.style.display = "block";
});

selectButton.addEventListener("click", () => {
  const selectedOption = optionsSelect.value;
  const dateTime = new Date().toLocaleString();
  const optionText = document.createElement("p");
  optionText.textContent = `${selectedOption} - ${dateTime}`;
  clickedOptions.appendChild(optionText);
  closePopup(); // Cerrar el pop-up después de seleccionar una opción
  
  clickCount++;
  counter.textContent = clickCount;
});

// Event listener para cerrar el pop-up si se hace clic fuera de él
document.addEventListener("click", function(event) {
  const isClickInsidePopup = popupMenu.contains(event.target);
  const isClickOnPopupButton = popupButton.contains(event.target);

  if (!isClickInsidePopup && !isClickOnPopupButton) {
    closePopup();
  }
});


