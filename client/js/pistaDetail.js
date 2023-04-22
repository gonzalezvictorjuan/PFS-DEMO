let container = document.querySelector('#container');
let params = [];

const processParam = () => {

    let paramString = window.location.search.substring(1) /* 'index=1' */
    let paramArray = paramString.split('&');


    for (let i = 0; i < paramArray.length; i++) {

        let tmpArray = paramArray[i].split('='); /*['index', '1'] */

        params[tmpArray[0]] = tmpArray[1] /* params['index'] = 1 */
    }
}


const getPistaDetail = async () => {
    try {
        processParam();
        const response = await fetch(`http://localhost:3000/pistas/${params["index"]}`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        } else {
            const pista = await response.json();
            console.log(pista)
            document.querySelector('#id').innerHTML += pista['id'];
            document.querySelector('#nombre').innerHTML += pista['nombre'];
            document.querySelector('#interprete').innerHTML += pista['interprete'];
            document.querySelector('#duracion').innerHTML += pista['duracion'];
            document.querySelector('#lanzamiento').innerHTML += pista['lanzamiento'];
        }
    } catch (error) {
        console.error(error);
        container.innerHTML = "<h1>Connection error</h1>";

    }
}
getPistaDetail();



