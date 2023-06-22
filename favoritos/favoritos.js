
const data = JSON.parse(localStorage.getItem('movies'));
const section = document.querySelector(".section");
if (data && data.length > 0) {
    data.forEach((e, index) => {
        section.innerHTML += `<div class="cartFavorites">
    <a href="./movie.html?id=${e.id}">
      <h1>${e.name}</h1>
      <p>${e.year}</p>
      <img src="https://image.tmdb.org/t/p/w500${e.image}" alt="">
    </a>
    <button class="borrar" data-index="${index}">Quitar de favoritos</button>
  </div>`;
    })

    // Agregar evento de clic a los botones de "Quitar de favoritos"
    const removeButtons = document.querySelectorAll('.borrar');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            data.splice(index, 1); // Eliminar el elemento del array
            localStorage.setItem('movies', JSON.stringify(data)); // Actualizar los datos en el almacenamiento local
            section.innerHTML = ''; // Limpiar la sección
            data.forEach((e, index) => {
                section.innerHTML += `<div class="cartFavorites">
        <a href="./movie.html?id=${e.id}">
          <h1>${e.name}</h1>
          <p>${e.year}</p>
          <img src="https://image.tmdb.org/t/p/w500${e.image}" alt="">
        </a>
        <button class="borrar" data-index="${index}">Quitar de favoritos</button>
      </div>`;
            });
            checkEmpty();
        });
    });
}
else{
    section.innerHTML = '<p>No hay películas en favoritos.</p>';
}
function checkEmpty() {
    if (data && data.length === 0) {
      section.innerHTML = '<p>No hay películas en favoritos.</p>';
    }
  }