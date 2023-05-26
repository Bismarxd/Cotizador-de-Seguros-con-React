export const MARCAS = [
  { id: 1, nombre: "EUROPEO" },
  { id: 2, nombre: "AMERICANO" },
  { id: 3, nombre: "ASIATICO" },
];

const YEARMAX = new Date().getFullYear()

export const YEAR = Array.from(new Array(20), (valor, index) => YEARMAX - index);

export const PLANES = [
  { id: 1, nombre: "BASICO" },
  { id: 2, nombre: "COMPLETO" },
];
