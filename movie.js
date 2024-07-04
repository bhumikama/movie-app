import { movies } from "./storemovies.js";

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <img src="${movie.poster_url}" alt="${movie.title} Poster" class="movie-poster">
    <div class="star-rating" data-movie-id="${movie.id}">
      <div>
        <i class="fa-solid fa-circle-info info-icon" style="color: #74C0FC;"></i>
      </div>
      <div>
        <button class="star">&#9734;</button>
        <button class="star">&#9734;</button>
        <button class="star">&#9734;</button>
        <button class="star">&#9734;</button>
        <button class="star">&#9734;</button>
      </div>
    </div>
  `;

  const infoIcon = card.querySelector(".info-icon");
  infoIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the card click event from firing
    showMovieInfo(movie);
  });

  return card;
}

function showMovieInfo(movie) {
  const modal = document.getElementById("movieModal");
  const modalContent = document.getElementById("modal-movie-info");

  modalContent.innerHTML = `
    <h2 class="movie-title">${movie.title}</h2>
    <p class="movie-description">${movie.description}</p>
    <p class="movie-details"><strong>Year:</strong> ${movie.movie_year}</p>
    <p class="movie-price">$${movie.price}</p>
    <form id="comment-form-${movie.id}">
    <input type="text" placeholder="comment here ..." class="input-comment" id="input-comment-${movie.id}"/>
    <button type="submit" class="btn" id="submit-comment-${movie.id}">Submit</button>
    </form>
    <h4 class="comment-heading">Comments:</h4>
    <div class="comment-list" id="comment-list-${movie.id}"></div>
  `;

  modal.style.display = "block";

  const closeModal = document.querySelector(".close");
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  const commentForm = document.getElementById(`comment-form-${movie.id}`);
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const commentInput = document.getElementById(`input-comment-${movie.id}`);
    const commentText = commentInput.value.trim();
    if (commentText) {
      addComment(movie.id, commentText);
      commentInput.value = "";
    }
  });

  displayComments(movie.id, movie.comments);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function addComment(movieId, commentText) {
  const movie = movies.find((m) => m.id === movieId);
  if (movie) {
    if (!movie.comments) {
      movie.comments = [];
    }
    movie.comments.push(commentText);
    displayComments(movieId, movie.comments);
  }
}

function displayComments(movieId, movieComments) {
  const commentList = document.getElementById(`comment-list-${movieId}`);
  commentList.innerHTML = "";
  if (movieComments) {
    movieComments.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.innerHTML = comment;
      commentList.appendChild(commentDiv);
    });
  }
}

function displayMovies(movieList) {
  const movieGrid = document.getElementById("movie-grid");
  movieList.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    movieGrid.appendChild(movieCard);
  });

  const allStars = document.querySelectorAll(".star");
  allStars.forEach((star) => {
    star.addEventListener("click", function (event) {
      event.stopPropagation();
      const movieCard = star.closest(".movie-card");
      const movieDiv = movieCard.querySelector(".star-rating");
      const movieId = movieDiv.getAttribute("data-movie-id");

      const stars = movieDiv.querySelectorAll(".star");
      const index = Array.from(stars).indexOf(star);
      const rating = index + 1;

      stars.forEach((star, i) => {
        if (i < rating) {
          star.innerHTML = "&#9733;";
        } else {
          star.innerHTML = "&#9734;";
        }
      });

      const movie = movieList.find((m) => m.id === movieId);
      if (movie) {
        movie.rating = rating;
      }
    });
  });
}

displayMovies(movies);
