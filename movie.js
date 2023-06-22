const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring)
const section = document.querySelector("section")
const id = urlParams.get("id")
async function Api() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b581a626b3628ed86a8901a2c73f4a31`)
    const movie = await response.json()
    const respo = await fetch (`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b581a626b3628ed86a8901a2c73f4a31`)
    const direct = await respo.json()
    console.log(direct);
    console.log(movie);
    section.innerHTML = `<div class="cartInfo">
                            <h1>${movie.title}</h1>
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt=""> 
                        <p>Fecha de estreno: ${movie.release_date}</p>
                        <p>Duracion: ${movie.runtime} minutos</p>
                        <p>Director: ${direct.crew[5].name}.</p>
                        <h3>Sinopsis</h3>
                        <p>
                         ${movie.overview                        }</p>
                            </div>
`
}
Api()