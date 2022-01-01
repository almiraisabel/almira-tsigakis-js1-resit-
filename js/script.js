const container = document.querySelector(".container");
const url = "https://api.icndb.com/jokes/random";

async function fetchJoke() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}

fetchJoke();

function createHtml(details) {
  container.innerHTML = `
<h2>${details.value.joke}</h2>
<div class="joke setup">Joke Number: ${details.value.id}</div>
<div class="joke punchline">Category: ${details.value.categories}</div>`;
}
