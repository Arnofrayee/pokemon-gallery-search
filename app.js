document.addEventListener("DOMContentLoaded", async (e) => {
	const url = "https://pokeapi.co/api/v2/pokemon";
	const response = await fetch(url);
	const data = await response.json();
	for (let i = 0; i < data.results.length; i++) {
		createPokemon(data.results[i]);
	}
});
