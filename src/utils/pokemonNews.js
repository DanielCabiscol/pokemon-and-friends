import { getRandomPokemon } from './pokemonApi';

const newsTemplates = [
  { title: "Nuevo avistamiento de {pokemon} en {region}", content: "Entrenadores de la región de {region} han reportado avistamientos del raro Pokémon {pokemon}. Expertos están investigando este inusual fenómeno y su posible impacto en el ecosistema local." },
  { title: "{pokemon} gana el Torneo Regional de {region}", content: "En una emocionante final, un {pokemon} entrenado por un joven promesa se coronó campeón del Torneo Regional de {region}. Su estrategia única y el fuerte vínculo con su Pokémon fueron clave para la victoria." },
  { title: "Descubren nueva evolución de {pokemon}", content: "Científicos Pokémon han confirmado una nueva y sorprendente evolución de {pokemon}. Este descubrimiento podría cambiar nuestra comprensión de la evolución Pokémon y abrir nuevas posibilidades para los entrenadores." },
  { title: "Equipo Rocket intenta robar {pokemon} del laboratorio", content: "El infame Equipo Rocket ha sido frustrado en su intento de robar un valioso {pokemon} de un laboratorio de investigación en {region}. Las autoridades advierten a los entrenadores que estén alerta ante posibles actividades sospechosas." },
  { title: "Nuevo Gimnasio Pokémon especializado en tipo {type} abre en {region}", content: "Un nuevo Gimnasio Pokémon ha abierto sus puertas en {region}, especializándose en Pokémon de tipo {type}. Los entrenadores están ansiosos por poner a prueba sus habilidades y ganar la codiciada medalla." }
];

const regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar"];

function generateNews(pokemon, template) {
  const region = regions[Math.floor(Math.random() * regions.length)];
  const title = template.title.replace("{pokemon}", pokemon.name).replace("{region}", region).replace("{type}", pokemon.types[0].type.name);
  const content = template.content.replace("{pokemon}", pokemon.name).replace("{region}", region).replace("{type}", pokemon.types[0].type.name);
  const summary = content.split('.')[0] + '.';
  
  return {
    id: `${pokemon.id}-${Date.now()}`,
    title,
    content,
    summary,
    date: new Date().toISOString(),
  };
}

export async function getRecentNews(count) {
  const news = [];
  for (let i = 0; i < count; i++) {
    const pokemon = await getRandomPokemon();
    const template = newsTemplates[Math.floor(Math.random() * newsTemplates.length)];
    news.push(generateNews(pokemon, template));
  }
  return news;
}