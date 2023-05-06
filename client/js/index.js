// let contenedor = document.getElementById('contenedor')

let btnAgregar = document.getElementById("btnAgregar");

// let btnDuracion = document.getElementById('btnDuracion');
let pistas = [];

const mostrarPistas = () => {
  let contenedor = document.getElementById("tblPistas");
  let tabla = "";
  for (let r of pistas) {
    //console.log(r);
    tabla += `<tr>
      <td>${r.id}</td>
       <td>${r.nombre}</td>
      <td>${r.duracion}</td>
      <td>${r.interprete}</td>
      <td>${r.lanzamiento}</td>
      <td> <a href='http://localhost:3000/pistaDetail.html?index=${r.id}' > Ver detalles </a> </td>
			<td> <button type="button" class="btnEliminar" id="${r.id}">Eliminar</button></td>
    </tr>
    <tr>
    <td>${r.id}</td>
    <td><input type="text" value="${r.nombre}" id="nombre${r.id}"</td> 
    <td><input type="text" value="${r.duracion}" id="duracion${r.id}"</td>
    <td><input type="text" value="${r.interprete}" id="interprete${r.id}"</td>
    <td><input type="text"value="${r.lanzamiento}" id="lanzamiento${r.id}"</td>
    <td> ---</td>

    <td><button class="btnUpdPista" id="${r.id}">Actualizar</button></td>
    </tr>
    
 `;
  }

  contenedor.innerHTML = tabla;

// Funcion para borrar pistas
  const borrarPista = async (e) => {
    let id = e.target.id;

    let respuesta = await fetch(`/pistas/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })

    load();
  }
  
//Evento a los botones borrar
  let botonesBorrar = document.querySelectorAll('.btnEliminar');

  botonesBorrar.forEach(boton => {

    boton.addEventListener('click', (e) => {
      borrarPista(e)
    })
  })

  async function btnActualizarClick(e) {

    let id = e.target.id;
    console.log(id);

    let renglon = {
    "nombre": document.querySelector(`#nombre${id}`).value,
    "duracion": Number(document.querySelector(`#duracion${id}`).value),
    "interprete": document.querySelector(`#interprete${id}`).value,
    "lanzamiento": Number(document.querySelector(`#lanzamiento${id}`).value)
    }

    let respuesta = await fetch(`/pistas/${id}`, {
             method :'PUT',
             headers: { 'Content-Type' : 'application/json' },
             body : JSON.stringify(renglon)
      });

      load();
    }

  let botonesActualizar = document.querySelectorAll(".btnUpdPista");

  botonesActualizar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      btnActualizarClick(e)
    });
  });

};

async function load() {
  const url_base = "http://localhost:3000";
  const endpoint = "/pistas";

  const respuesta = await fetch(url_base + endpoint);
  pistas = await respuesta.json();
  console.log(pistas);

  mostrarPistas();
}

const eliminar = (data) => {
  console.log("a eliminar", data);
};

const agregar = async () => {
  let nombre = document.getElementById("nombre").value;
  let duracion = document.getElementById("duracion").value;
  let interprete = document.getElementById("interprete").value;
  let lanzamiento = document.getElementById("lanzamiento").value;

  let pista = {
    nombre: nombre,
    duracion: Number(duracion),
    interprete: interprete,
    lanzamiento: Number(lanzamiento),
  };
  const response = await postPistaServidor(pista);

  if (!Object.keys(response).includes("error")) {
    pista.id = response.id;
    pistas.push(pista);
    mostrarPistas();
  } else {
    // manejo de error
  }
};

const postPistaServidor = async (datos) => {
  const p = await fetch("/pistas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  return await p.json();
};

btnAgregar.addEventListener("click", agregar);

load();
