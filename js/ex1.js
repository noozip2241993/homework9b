// Handle form submission
document.querySelector("form").addEventListener("submit", e => {
    // Cancel default behavior of sending a synchronous POST request
    e.preventDefault();
    // Create a FormData object, passing the form as a parameter
    const formData = new FormData(e.target);
    const divElement = document.getElementById("data");
    const paraElement = document.createElement("p");
    paraElement.textContent = `${e.target.elements.name.value}, Thank you for your order.We will keep you posted on delivery status at ${e.target.elements.email.value}`;
    divElement.appendChild(paraElement);




});