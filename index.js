import { entrenadores } from "./trainers.js";
import { rivalEquipo } from "./rival.js";
import { tablaTipos } from "./types.js";

// Desafío 1: Pokémon con Mayor y Menor Nivel
// Crea una función que retorne el pokemon con el mayor nivel y el con el menor nivel entre todos los equipos de los cinco entrenadores.

function handleFindStrogestPokemon() {
  const allPokemon = entrenadores.flatMap((entrenador) => entrenador.equipo);

  const higherLevelPokemon = allPokemon.reduce((acc, curr) =>
    curr.nivel > acc.nivel ? curr : acc
  );

  const lowestLevelPokemon = allPokemon.reduce((acc, curr) =>
    curr.nivel < acc.nivel ? curr : acc
  );

  console.log(higherLevelPokemon);
  console.log(lowestLevelPokemon);

  return {
    lowestLevelPokemon,
    higherLevelPokemon,
  };
}

handleFindStrogestPokemon();

//Desafío 2: Buscador
//Crea una función que devuelva todos los pokemones que contengan un string pasado como argumento. No puede devolver undefined

function handleFindPokemon(pokemonDetail) {
  const team = entrenadores.flatMap((entrenador) => entrenador.equipo);

  const pokemonFinded = team.filter(
    (pokemon) =>
      pokemon.nombre.toLocaleLowerCase() ===
        pokemonDetail.toLocaleLowerCase() ||
      pokemon.tipo.toLocaleLowerCase() === pokemonDetail.toLocaleLowerCase()
  );

  const pokemon = pokemonFinded.map((pokemon) => pokemon);

  if (pokemon.length > 0) {
    return console.log(
      `Se han encontrado los siguientes pokemones: ${JSON.stringify(pokemon)}`
    );
  } else {
    return console.log("No se encontraron coincidencias");
  }
}

handleFindPokemon("pikachu");

/* Desafío 3: Tipo con Promedio de Nivel Más Alto
Crea una función que retorne el tipo cuyos Pokémon tienen un promedio de nivel mayor. */

function handleFindTypeOfPokemon() {
  const tipos = entrenadores.reduce((acc, trainer) => {
    trainer.equipo.forEach((pokemon) => {
      if (!acc[pokemon.tipo]) {
        acc[pokemon.tipo] = { totalNivel: 0, cantidad: 0 };
      }

      acc[pokemon.tipo].totalNivel += pokemon.nivel;
      acc[pokemon.tipo].cantidad += 1;
    });
    return acc;
  }, {});

  const tipoConMayorPromedio = Object.keys(tipos).reduce(
    (typeMax, currType) => {
      const promedioActual =
        tipos[currType].totalNivel / tipos[currType].cantidad;
      const promedioMax = tipos[typeMax].totalNivel / tipos[typeMax].cantidad;
      return promedioActual > promedioMax ? currType : typeMax;
    }
  );
  console.log(`Tipo con primedio mayor: ${tipoConMayorPromedio}`);
  return tipoConMayorPromedio;
}

handleFindTypeOfPokemon();

/* Crea una función que retorne el tipo cuyos Pokémon tienen un promedio de nivel mayor.

Desafío 4: Desafío Equipo Superior
Te enfrentarás a un rival que solo usa Pokémon de tipo Hielo. A partir de los Pokémon de los entrenadores, crea el mejor equipo considerando las siguientes reglas:
Un Pokémon súper efectivo siempre gana contra uno que es débil contra él, a menos que sea 10 niveles inferior.
Un Pokémon de mayor nivel que no tiene fortalezas ni debilidades contra otro Pokémon siempre le gana.
Si tienes que escoger entre un Pokémon súper efectivo y otro que es 10 niveles o más superior, escoge al súper efectivo si la diferencia de niveles entre ellos no es mayor a 10.

Crea una función que retorne el equipo ideal para enfrentarte al rival. */

function esSuperEfectivo(tipoAtacante, tipoDefensor) {
  return tablaTipos[tipoAtacante].superEfectivo.includes(tipoDefensor);
}

function esDebilContra(tipoAtacante, tipoDefensor) {
  return tablaTipos[tipoDefensor].debilContra.includes(tipoAtacante);
}

function crearEquipoIdeal(rivalEquipo, entrenadores) {
  const equipoIdeal = [];

  for (const pokemonRival of rivalEquipo) {
    let mejorOpcion = null;

    for (const entrenador of entrenadores) {
      for (const pokemon of entrenador.equipo) {
        const esSúperEfectivo = esSuperEfectivo(
          pokemon.tipo,
          pokemonRival.tipo
        );
        const esDébilContra = esDebilContra(pokemon.tipo, pokemonRival.tipo);

        if (esSúperEfectivo) {
          if (
            !mejorOpcion ||
            (pokemon.nivel >= mejorOpcion.nivel - 10 &&
              pokemon.nivel > mejorOpcion.nivel)
          ) {
            mejorOpcion = pokemon;
          }
        } else if (
          !esDébilContra &&
          (mejorOpcion === null || pokemon.nivel > mejorOpcion.nivel)
        ) {
          mejorOpcion = pokemon;
        }
      }
    }

    if (mejorOpcion) {
      equipoIdeal.push(mejorOpcion);
    }
  }
  console.log(`El equipo ideal es: ${JSON.stringify(equipoIdeal)}`);
  return equipoIdeal;
}

crearEquipoIdeal(rivalEquipo, entrenadores);
