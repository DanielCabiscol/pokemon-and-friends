export async function getRandomPokemon() {
  const randomId = Math.floor(Math.random() * 898) + 1; // Hay 898 Pokémon en total
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  return await response.json();
}