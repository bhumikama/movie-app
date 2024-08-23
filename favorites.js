document.addEventListener("DOMContentLoaded", () => {
  displayFavorites();
});

function displayFavorites() {
  const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
  if (likedMovies.length === 0) {
    const favoriteGrid = document.getElementById("favorite-grid");
    favoriteGrid.innerHTML = "";
    const noFavoritesMessage = document.createElement("p");
    noFavoritesMessage.classList.add("favorite-result");
    noFavoritesMessage.textContent = `There are no movies yet. Add your favorites`;
    favoriteGrid.appendChild(noFavoritesMessage);
  }

  let movies = JSON.parse(localStorage.getItem("movies"));
  //console.log(movies);

  const favoriteMovies = movies.filter((movie) =>
    likedMovies.includes(movie.id)
  );
  console.log(favoriteMovies);
  console.log(likedMovies);
  const favoriteMovieGrid = document.getElementById("favorite-grid");
  favoriteMovieGrid.innerHTML = "";

  favoriteMovies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("favorite-card");
    card.setAttribute("data-movie-id", movie.id);
    card.innerHTML = `
        <img src="${movie.poster_url}" alt="${movie.title} Poster" class="movie-poster">
        <h2 class="card-title">${movie.title}</h2>
      `;
    favoriteMovieGrid.appendChild(card);
  });
}
