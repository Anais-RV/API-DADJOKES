const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

// USING ASYNC/AWAIT
async function generateJoke() { // función asíncrona que nos permite generar un chiste
  const config = { // objeto config
    headers: { //cabeceras de la solicitud
      Accept: 'application/json', // se espera respuesta en formato JSON
    },
  }

  const res = await fetch('https://icanhazdadjoke.com/', config) //solicitud GET a la URL -> obtener nuevo chiste

  const data = await res.json() // espera a que los datos se convierta en JSON, los almacena en data

  jokeEl.innerHTML = data.joke // actualiza el contenido del elemento joke con el chiste
}

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }