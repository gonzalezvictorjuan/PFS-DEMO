console.log("hola gente!");
let contenedor = document.getElementById('contenedor')
async function load() {
  const url_base = "http://localhost:3000";
  const endpoint = "/pistas";

  const respuesta = await fetch(url_base + endpoint);
  let pistas = await respuesta.json();
  console.log(pistas);

  for(let pista of pistas){
    contenedor.innerHTML += `<p>${pista.nombre}</p>`
  }
  
}

load();


