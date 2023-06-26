const movie = document.querySelector("#searchMovie")
const form = document.querySelector('form')
const section = document.querySelector("section")
const home =document.querySelector(".texAndImg")
async function popularMovies() {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b581a626b3628ed86a8901a2c73f4a31")
    const movies = await response.json();
    const moviesPopular = movies.results
    console.log(moviesPopular);
    moviesPopular.forEach(e => {
        section.innerHTML += `<div class="cart">
        <a href="./movie.html?id=${e.id}">
        <img src="https://image.tmdb.org/t/p/w500${e.poster_path
            }" alt="" width=250px >
        <h3>${e.original_title}</h3>
        <p>${e.release_date}</p>
        </a>
        <button class="addFavorite"><img src="./imagenes/icono-de-favoritos.png" alt=""  width="20px" > favoritos</button>
    </div>`


    })

// const swiper =new Swiper(".section",{
//     efecct: "coverflow",
//     grabCursor: true,
//     centerendslides:true,
//     slidesPerView:"auto",
//     coverflowEffect:{
//         rotate:15,
//         strech:0,
//         depth:300,
//         modifler:1,
//         slideShadows: true,
//     },
//     loop:true,
// });


    const buttonsM = document.querySelectorAll('.addFavorite')
    const data = JSON.parse(localStorage.getItem("movies")) || []
    buttonsM.forEach((button, i) => {
        button.addEventListener('click', () => {
            const favoritemovieinfo = {
                id: moviesPopular[i].id,
                name: moviesPopular[i].original_title,
                year: moviesPopular[i].release_date,
                image: moviesPopular[i].poster_path
            };
            const isDuplicate = data.some((movie) => movie.name === favoritemovieinfo.name)
            if (!isDuplicate) {
                data.push(favoritemovieinfo);
                localStorage.setItem("movies", JSON.stringify(data))
            }

        })
    })
}





popularMovies()


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (movie.value === "") {
        section.innerHTML += `<div class="cart">no hay peliculas
    </div`
        return
    }
    Api(movie.value)
    console.log(movie.value);
})
async function Api(movie) {
    home.innerHTML=""
    section.innerHTML = ''
    const apiKey = "b581a626b3628ed86a8901a2c73f4a31"
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`)
    const movies = await response.json()
    const moviesSearch =movies.results;
    moviesSearch.forEach(element => {
        section.innerHTML += ` <div class="cart">
        <a href="./movie.html?id=${element.id}">
    <img src="https://image.tmdb.org/t/p/w500${element.poster_path
            }" alt="" width=250px>
    <h1>${element.original_title}</h1>
    <p>${element.release_date}</p>
    </a>
    <button class="addFavorite">favoritos</button>
</div> `

    });
    const buttonsM = document.querySelectorAll('.addFavorite')
    const data = JSON.parse(localStorage.getItem("movies")) || []
    buttonsM.forEach((button, i) => {
        button.addEventListener('click', () => {
            const favoritemovieinfo = {
                id: moviesSearch[i].id,
                name: moviesSearch[i].original_title,
                year: moviesSearch[i].release_date,
                image:moviesSearch[i].poster_path
            };
            const isDuplicate = data.some((movie) => movie.name === favoritemovieinfo.name)
            if (!isDuplicate) {
                data.push(favoritemovieinfo);
                localStorage.setItem("movies", JSON.stringify(data))
            }

        })
    })


}


