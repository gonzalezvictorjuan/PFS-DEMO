console.log("hola gente!");

async function load() {
  const url_base = "http://localhost:3000";
  const endpoint = "/pistas";

  const respuesta = await fetch(url_base + endpoint);
  pistas = await respuesta.json();
  console.log(pistas);
}

load();
