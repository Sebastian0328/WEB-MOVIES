
const data = JSON.parse(localStorage.getItem('movies'));
const section = document.querySelector(".sectionPagfavorite");
if (data && data.length > 0) {
  data.forEach((e) => {
    section.innerHTML += `<div class="cartFavorites">
    <a href="./movie.html?id=${e.id}">
    <img src="https://image.tmdb.org/t/p/w500${e.image}" alt="" width="200px">  
    <h4>${e.name}</h4>

      <p>${e.year}</p>
      
    </a>
    <button class="borrar"> <img src="./imagenes/icono-de-favoritos.png" alt=""  width="20px" >Quitar de favoritos</button>
  </div>`;
  })


  const removeButtons = document.querySelectorAll('.borrar');
  removeButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      const local = JSON.parse(localStorage.getItem("movies"))
      const filter = local.filter(movie => data[i].id !== movie.id)
      localStorage.setItem("movies", JSON.stringify(filter))
      console.log(filter);

    const cartsMovies = document.querySelector(".cartFavorites")
    cartsMovies.remove();
      // section.innerHTML = "";
      // filter.forEach(e => {
      //   section.innerHTML += `<div class="cartFavorites">
      //     <a href="./movie.html?id=${e.id}">
      //       <h1>${e.name}</h1>
      //       <p>${e.year}</p>
      //       <img src="https://image.tmdb.org/t/p/w500${e.image}" alt="">
      //     </a>
      //     <button class="borrar">Quitar de favoritos</button>
      //   </div>`


    });
  });
}
else {
  section.innerHTML = '<p>No hay películas en favoritos.</p>';
}
