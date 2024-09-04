//Tabla de Tipos Pokémon

export const tablaTipos = {
  Insecto: {
    superEfectivo: ["Planta", "Psíquico", "Oscuro"],
    noMuyEfectivo: [
      "Fuego",
      "Pelea",
      "Veneno",
      "Volador",
      "Fantasma",
      "Acero",
      "Hada",
    ],
    debilContra: ["Fuego", "Volador", "Roca"],
  },
  Oscuro: {
    superEfectivo: ["Fantasma", "Psíquico"],
    noMuyEfectivo: ["Oscuro", "Hada", "Pelea"],
    debilContra: ["Pelea", "Insecto", "Hada"],
  },
  Dragón: {
    superEfectivo: ["Dragón"],
    noMuyEfectivo: ["Acero", "Hada (nulo)"],
    debilContra: ["Hielo", "Dragón", "Hada"],
  },
  Eléctrico: {
    superEfectivo: ["Volador", "Agua"],
    noMuyEfectivo: ["Dragón", "Eléctrico", "Planta", "Tierra (nulo)"],
    debilContra: ["Tierra"],
  },
  Hada: {
    superEfectivo: ["Oscuro", "Dragón", "Pelea"],
    noMuyEfectivo: ["Fuego", "Veneno", "Acero"],
    debilContra: ["Veneno", "Acero"],
  },
  Pelea: {
    superEfectivo: ["Oscuro", "Hielo", "Acero", "Normal", "Roca"],
    noMuyEfectivo: [
      "Insecto",
      "Hada",
      "Veneno",
      "Psíquico",
      "Volador",
      "Fantasma (nulo)",
    ],
    debilContra: ["Volador", "Psíquico", "Hada"],
  },
  Fuego: {
    superEfectivo: ["Insecto", "Planta", "Acero", "Hielo"],
    noMuyEfectivo: ["Dragón", "Fuego", "Agua", "Roca"],
    debilContra: ["Agua", "Tierra", "Roca"],
  },
  Volador: {
    superEfectivo: ["Insecto", "Planta", "Pelea"],
    noMuyEfectivo: ["Eléctrico", "Roca", "Acero"],
    debilContra: ["Eléctrico", "Hielo", "Roca"],
  },
  Fantasma: {
    superEfectivo: ["Fantasma", "Psíquico"],
    noMuyEfectivo: ["Oscuro", "Normal (nulo)"],
    debilContra: ["Fantasma", "Oscuro"],
  },
  Planta: {
    superEfectivo: ["Tierra", "Roca", "Agua"],
    noMuyEfectivo: [
      "Volador",
      "Veneno",
      "Insecto",
      "Acero",
      "Fuego",
      "Planta",
      "Dragón",
    ],
    debilContra: ["Volador", "Veneno", "Insecto", "Fuego", "Hielo"],
  },
  Tierra: {
    superEfectivo: ["Eléctrico", "Fuego", "Roca", "Acero", "Veneno"],
    noMuyEfectivo: ["Insecto", "Planta", "Volador (nulo)"],
    debilContra: ["Planta", "Hielo", "Agua"],
  },
  Hielo: {
    superEfectivo: ["Dragón", "Planta", "Tierra", "Volador"],
    noMuyEfectivo: ["Fuego", "Hielo", "Acero", "Agua"],
    debilContra: ["Fuego", "Pelea", "Roca", "Acero"],
  },
  Normal: {
    superEfectivo: [],
    noMuyEfectivo: ["Acero", "Roca", "Fantasma (nulo)"],
    debilContra: ["Pelea"],
  },
  Veneno: {
    superEfectivo: ["Planta", "Hada"],
    noMuyEfectivo: ["Veneno", "Tierra", "Roca", "Fantasma", "Acero (nulo)"],
    debilContra: ["Tierra", "Psíquico"],
  },
  Psíquico: {
    superEfectivo: ["Pelea", "Veneno"],
    noMuyEfectivo: ["Psíquico", "Acero", "Oscuro (nulo)"],
    debilContra: ["Insecto", "Oscuro", "Fantasma"],
  },
  Roca: {
    superEfectivo: ["Insecto", "Fuego", "Hielo", "Volador"],
    noMuyEfectivo: ["Tierra", "Pelea", "Acero"],
    debilContra: ["Pelea", "Tierra", "Acero", "Agua", "Planta"],
  },
  Acero: {
    superEfectivo: ["Hada", "Hielo", "Roca"],
    noMuyEfectivo: ["Eléctrico", "Fuego", "Acero", "Agua"],
    debilContra: ["Fuego", "Pelea", "Tierra"],
  },
  Agua: {
    superEfectivo: ["Fuego", "Roca", "Tierra"],
    noMuyEfectivo: ["Dragón", "Planta", "Agua"],
    debilContra: ["Eléctrico", "Planta"],
  },
};
