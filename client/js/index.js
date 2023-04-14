// let contenedor = document.getElementById('contenedor')

let btnAgregar = document.getElementById('btnAgregar');
// let btnDuracion = document.getElementById('btnDuracion');
let pistas = [];

const mostrarPistas = () => {
  let contenedor = document.getElementById('tblPistas');
  let tabla = '';
  for (let r of pistas) {
    console.log(r)
    tabla +=
      `<tr>
      <td>${r.id}</td>
       <td>${r.nombre}</td>
      <td>${r.duracion}</td>
      <td>${r.interprete}</td>
      <td>${r.lanzamiento}</td>
    </tr>
 `
  }
  contenedor.innerHTML = tabla;
}


async function load() {
  const url_base = "http://localhost:3000";
  const endpoint = "/pistas";

  const respuesta = await fetch(url_base + endpoint);
  pistas = await respuesta.json();
  console.log(pistas);

  mostrarPistas()
}

const agregar = async () => {
  let nombre = document.getElementById('nombre').value;
  let duracion = document.getElementById('duracion').value;
  let interprete = document.getElementById('interprete').value;
  let lanzamiento = document.getElementById('lanzamiento').value;

  let pista = {
    "nombre": nombre,
    "duracion": Number(duracion),
    "interprete": interprete,
    "lanzamiento": Number(lanzamiento),
  }
  if (aServidor(pista)) {
    pistas.push(pista);
    mostrarPistas();
  }
}


const aServidor = async (datos) => {
  let respuesta = await fetch('/pistas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return (await respuesta.text() == "ok");
}




btnAgregar.addEventListener('click', agregar);
// btnDuracion.addEventListener('click', duracion);



load();


