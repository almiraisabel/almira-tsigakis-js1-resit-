const container = document.querySelector(".container");
const url = "https://api.icndb.com/jokes/random/10";

async function fetchMultiple() {
  try {
    const response = await fetch(url);
    let cards = await response.json();

    console.log(cards.value);

    cards.value.forEach((element) => {
      console.log("id" + element.id);
      createCard(element);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchMultiple();

function createCard(element) {
  container.innerHTML += myHTMLvariable = `<div>
     <div class ="loader"></div>
     <div class="col-sm-6 col-md-4 col-lg-3">
     <div class="cards">
     <div class="joke-detail">
    <h4 class="type">Type of joke: ${element.categories}</h4>
<div class="setup">Joke: ${element.joke}</div>
<div class="punchline">ID: ${element.id}</div>
</div></div></div></div></div>`;
}
