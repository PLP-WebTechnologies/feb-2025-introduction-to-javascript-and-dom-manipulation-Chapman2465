// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const changeTextBtn = document.getElementById("changeTextBtn");
    const changeStyleBtn = document.getElementById("changeStyleBtn");
    const toggleElementBtn = document.getElementById("toggleElementBtn");
    const newElement = document.getElementById("newElement");
    
    // Change text content dynamically
    changeTextBtn.addEventListener("click", function() {
      document.querySelector("header h1").textContent = "Text Changed!";
    });
  
    // Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener("click", function() {
      document.querySelector("header h1").style.color = "blue";
      document.querySelector("header p").style.fontSize = "20px";
    });
  
    // Add or remove an element when the button is clicked
    toggleElementBtn.addEventListener("click", function() {
      if (newElement.style.display === "none") {
        newElement.style.display = "block";
      } else {
        newElement.style.display = "none";
      }
    });
  });
  