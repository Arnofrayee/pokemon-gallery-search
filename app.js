const $pokegrid = document.querySelector("#pokemon-grid");
const $counter = document.querySelector("#count-badge");
const url = "https://pokeapi.co/api/v2/pokemon";

document.addEventListener("DOMContentLoaded", async (e) => {
	const response = await fetch(url + "?offset=0&limit=500");
	const data = await response.json();
	const sorted = data.results.toSorted((a, b) => a.id - b.id)

	for (let i = 0; i < sorted.length; i++) {
		createPokemon(sorted[i]);
	}
});

async function createPokemon(elem) {
	const response = await fetch(url + "/" + elem.name);
	const data = await response.json();
	console.log(data);

	const card = document.createElement("div");
	card.classList.add("poke-card");

	const img = document.createElement("img");
	img.src = data.sprites.front_default;

	const id = document.createElement("p");
	id.classList.add("poke-id");
	if (data.id < 10) {
		id.textContent = "#00" + data.id;
	} else if (data.id < 100) {
		id.textContent = "#0" + data.id;
	} else {
		id.textContent = "#" + data.id;
	}

	const name = document.createElement("p");
	name.classList.add("poke-name");
	name.textContent = data.name;

	$pokegrid.appendChild(card);
	card.appendChild(img);
	card.appendChild(id);
	card.appendChild(name);
}
