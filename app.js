const app = document.getElementById("main");
const next = document.getElementById("next");
const flag = true;

let getJoke = async () => {
  try {
    app.innerHTML = "";

    let joke = await fetch("https://v2.jokeapi.dev/joke/Programming");
    let jokeJson = await joke.json();
    if (jokeJson.type == "twopart") {
      // setup

      let setupTitle = document.createElement("h4");
      let setupText = document.createTextNode(jokeJson.setup);

      setupTitle.appendChild(setupText);
      app.appendChild(setupTitle);

      let breakLine = document.createElement("br");
      app.appendChild(breakLine);
      // Devilery

      let deliveryTitle = document.createElement("p");
      let deliveryText = document.createTextNode("- " + jokeJson.delivery);
      deliveryTitle.appendChild(deliveryText);
      app.appendChild(deliveryTitle);
    } else {
      let jokeTitle = document.createElement("h4");
      let jokeText = document.createTextNode(jokeJson.joke);
      jokeTitle.appendChild(jokeText);
      app.appendChild(jokeTitle);
    }
  } catch (err) {
    alert("Come back tomorrow", "Error");
  }
};

next.addEventListener("click", () => getJoke());
