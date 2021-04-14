/*
Send visited coutnries
*/

// Create traveler info
const traveler = {
    name: "Nguyen",
    countries: [
      {
        name: "Ecuador",
        year: 2003
      },
      {
        model: "Portugal",
        color: 2004
      },
      {
        model: "Russia",
        color: 2016
      }
    ]
  };
  
  // Send this object as JSON data to the server
  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    .then(response => response.text())
    .then(result => {
        document.getElementById("button").addEventListener("click", e=>{
            divElement = document.getElementById("content");
            paraElement = document.createElement("p");
            paraElement.textContent = result;
            divElement.appendChild(paraElement);

        })
    })
    .catch(err => {
      console.error(err.message);
    });