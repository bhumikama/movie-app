/*
 * ------------------------------
 * GLOBAL VARIABLES
 * ------------------------------
 */
let searchIsActive = false;
let filteredMovies = [];
let movies = [];
let searchKeyword = "";
let selectedGenre = "All";
let countdown;
let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
const startTimerButton = document.getElementById("start-timer");
const displayCountDown = document.getElementById("timer-display");
const favoriteButton = document.getElementById("favoriteButton");

/*
 * ------------------------------
 * MOVIE SLIDERS FOR HOME PAGE
 * ------------------------------
 */

const navButtons = document.querySelectorAll(".nav-btn");
const videoSliders = document.querySelectorAll(".video-slider");
const contentDivS = document.querySelectorAll(".content");

let sliderNav = function (index) {
  navButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
  videoSliders.forEach((btn) => {
    btn.classList.remove("active");
  });
  contentDivS.forEach((btn) => {
    btn.classList.remove("active");
  });
  navButtons[index].classList.add("active");
  videoSliders[index].classList.add("active");
  contentDivS[index].classList.add("active");
};

navButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    sliderNav(index);
  });
});

/*
 * ------------------------------
 * MENU ICON FOR SMALLER SCREENS
 * ------------------------------
 */

const menuIcon = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navList");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/*
 * ------------------------------
 * DISPLAY MOVIE GRID
 * ------------------------------
 */
function displayMovies(movieList) {
  const movieGrid = document.getElementById("movie-grid");
  movieGrid.innerHTML = "";
  if (movieList.length === 0) {
    const noMoviesMessage = document.createElement("p");
    noMoviesMessage.classList.add("filter-result");
    noMoviesMessage.textContent = `No movies found for "${searchKeyword}"`;
    movieGrid.appendChild(noMoviesMessage);
  } else {
    movieList.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      movieGrid.appendChild(movieCard);
    });
  }
}

/*
 * ----------------------
 * MOVIE CARD
 * ----------------------
 */
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.setAttribute("data-movie-id", movie.id);
  const isLiked = likedMovies.includes(movie.id);

  card.innerHTML = `
    <img src="${movie.poster_url}" alt="${
    movie.title
  } Poster" class="movie-poster">
    <h2 class="card-title">${movie.title}</h2>
    <div class="heart-icon ${isLiked ? "liked" : ""}">
      <i class="fa${isLiked ? "s" : "r"} fa-heart"></i>
    </div>
  `;
  card.addEventListener("click", function (event) {
    if (event.target.closest(".heart-icon")) {
      return;
    }
    showMovieInfo(movie);
  });

  //handles click event for heartIcon
  const heartIcon = card.querySelector(".heart-icon");
  heartIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering the card click event
    toggleLike(movie.id, heartIcon);
  });

  return card;
}

/*
 * -----------------
 * MODAL POP UP
 * -----------------
 */
function showMovieInfo(movie) {
  const modal = document.getElementById("movieModal");
  const modalContent = document.getElementById("modal-movie-info");

  modalContent.innerHTML = `
  <div class="info">
   <img src="${movie.poster_url}" alt="${movie.title} Poster" class="poster">
    <div>
     <h2 class="movie-title">${movie.title}</h2>
     <div class="rating">
       <img src="star-solid.svg">
       <h4>${movie.imdb_rating}</h4>
     </div>
     <div class="details">
        <span>${movie.age_rating} </span>
        <span>${movie.movie_year} </span>
        <span>${movie.duration}</span>
     </div>
     <div class="genre">
       <div>${movie.genre.split(",").join("</div><div>")}</div>
     </div>
     <div class="trailer">
       <a href="${movie.trailer_url}"
       target="_blank"><i class="fa-solid fa-circle-play" style="color: #FFD43B;"></i> watch the trailer </a>
     </div>
    </div>
  </div>

  <h3 class="headerThree">Overview</h3>
  <p class="movie-description">${movie.description}</p>
  <h3 class="headerThree">Cast</h3>
  <p class="movie-actors">${movie.actors.join(", ")}</p>
  <div class="star-rating" data-movie-id="${movie.id}">
      <span class="rating_span">Your Rating : </span>
      <div>
        <button class="star">${
          movie.rating >= 1 ? "&#9733;" : "&#9734;"
        }</button>
        <button class="star">${
          movie.rating >= 2 ? "&#9733;" : "&#9734;"
        }</button>
        <button class="star">${
          movie.rating >= 3 ? "&#9733;" : "&#9734;"
        }</button>
        <button class="star">${
          movie.rating >= 4 ? "&#9733;" : "&#9734;"
        }</button>
        <button class="star">${
          movie.rating >= 5 ? "&#9733;" : "&#9734;"
        }</button>
      </div>
    </div>
  <form id="comment-form-${movie.id}">
     <input type="text" placeholder="comment here ..." class="input-comment" id="input-comment-${
       movie.id
     }"/>
     <button type="submit" class="btn" id="submit-comment-${
       movie.id
     }">Submit</button>
   </form>
  <h4 class="comment-heading">Comments:</h4>
  <div class="comment-list" id="comment-list-${movie.id}"></div>
  `;

  modal.style.display = "block";

  //close the pop up
  const closeModal = document.querySelector(".close");
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  //handles click event for star rating
  const allStars = document.querySelectorAll(".star");
  allStars.forEach((star, index) => {
    star.addEventListener("click", function (event) {
      event.stopPropagation();
      const rating = index + 1;

      allStars.forEach((star, i) => {
        if (i < rating) {
          star.innerHTML = "&#9733;";
        } else {
          star.innerHTML = "&#9734;";
        }
      });

      movie.rating = rating;
    });
  });

  //handling submission of the comment
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

/*
 * ------------------------
 * ADD COMMENTS FOR MOVIE
 * ------------------------
 */
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
/*
 * -----------------------
 * DISPLAY MOVIE COMMENTS
 * -----------------------
 */
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

/*
 * ------------------------------------------
 * TOGGLE CLASS FOR HANDLING FAVORITE MOVIES
 * ------------------------------------------
 */
function toggleLike(movieId, heartIcon) {
  if (likedMovies.includes(movieId)) {
    likedMovies = likedMovies.filter((id) => id !== movieId);
  } else {
    likedMovies.push(movieId);
  }

  localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
  heartIcon.classList.toggle("liked");
  const iconElement = heartIcon.querySelector("i");
  if (heartIcon.classList.contains("liked")) {
    iconElement.classList.remove("far"); // Remove regular heart
    iconElement.classList.add("fas"); // Add solid heart
  } else {
    iconElement.classList.remove("fas"); // Remove solid heart
    iconElement.classList.add("far"); // Add regular heart
  }
}

/*
 * -----------------------------
 * SEARCH MOVIES THROUGH KEYWORD
 * -----------------------------
 */
function searchMovies(keyword) {
  searchKeyword = keyword.toLowerCase();
  searchIsActive = true;
  filterMovies();
}

/*
 * -----------------------------------------------
 * FILTER MOVIES BASED ON GENRE AND SEARCH KEYWORD
 * -----------------------------------------------
 */
function filterMovies() {
  let moviesToDisplay = [...movies];

  // Apply genre filter
  if (selectedGenre !== "All") {
    moviesToDisplay = moviesToDisplay.filter((movie) =>
      movie.genre.split(", ").includes(selectedGenre)
    );
  }
  // Apply keyword filter
  if (searchKeyword) {
    moviesToDisplay = moviesToDisplay.filter((movie) =>
      movie.title.toLowerCase().includes(searchKeyword)
    );
  }
  filteredMovies = moviesToDisplay;
  displayMovies(moviesToDisplay);
}

/*
 * -----------------------------
 *        SORT MOVIES
 * -----------------------------
 */
function sortMovies(movieList, sortBy) {
  const sortedMovies = [...movieList]; //creates a shallow copy since sorting overwrites the original array
  sortedMovies.sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "year") {
      return a.movie_year - b.movie_year;
    } else if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0); // null or undefined values are considered as 0
    }
    return 0;
  });
  displayMovies(sortedMovies);
}

/*
 * ---------------------------------------------------------------------------------
 * FOR HANDLING MOVIE GENRES
 * generates <a> tags for each of the genre in the genres array
 * handles toggle of genres so that only one genre is selected at a time
 * also handles the case where "all genres" is selected after selecting any other genre
 * calls filterMovies() function to apply filter for the selected genres
 * ----------------------------------------------------------------------------------
 */
function generateGenreTags() {
  const genres = ["Comedy", "Family", "Adventure", "Drama", "Action"];

  const genreTagsContainer = document.getElementById("genre-tags");
  genreTagsContainer.innerHTML =
    '<a href="#" class="genre-tag selected" data-genre="All">All</a>';
  genres.forEach((genre) => {
    const genreTag = document.createElement("a");
    genreTag.classList.add("genre-tag");
    genreTag.textContent = genre;
    genreTag.href = "#";
    genreTag.setAttribute("data-genre", genre);
    genreTag.addEventListener("click", function (event) {
      event.preventDefault();
      document
        .querySelectorAll(".genre-tag")
        .forEach((tag) => tag.classList.remove("selected"));
      genreTag.classList.add("selected");
      selectedGenre = genreTag.getAttribute("data-genre");
      filterMovies();
    });
    genreTagsContainer.appendChild(genreTag);
  });

  const allTag = document.querySelector(".genre-tag[data-genre='All']");
  allTag.addEventListener("click", function (event) {
    event.preventDefault();

    document
      .querySelectorAll(".genre-tag")
      .forEach((tag) => tag.classList.remove("selected"));

    allTag.classList.add("selected");

    selectedGenre = "All";

    filterMovies();
  });
}

/*
 * ------------------------------
 * COUNTDOWN FUNCTION
 * ------------------------------
 */
function startCountDown(startingMinutes) {
  let time = startingMinutes * 60;

  countdown = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    displayCountDown.innerHTML = ` Time left to choose a movie : ${minutes}m : ${seconds}s`;
    time--;
    if (time < 0) {
      clearInterval(countdown);
      alert("Time's up. Choose a movie FAST !!");
    }
  }, 1000);
}

/*
 * --------------------------------------
 * TIMER FUNCTION
 * uses asynchronous function setInterval()
 * to update the timings.
 * --------------------------------------
 */
function calculateTimeSpent() {
  let hrs = document.getElementById("hours");
  let mins = document.getElementById("minutes");
  let secs = document.getElementById("seconds");

  let startingTime = new Date();
  setInterval(() => {
    const timeNow = new Date();

    const elapsedTime = Math.floor((timeNow - startingTime) / 1000); //difference is in ms
    let hours = Math.floor(elapsedTime / 36000);
    let minutes = Math.floor((elapsedTime % 36000) / 60);
    let seconds = elapsedTime % 60;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hrs.innerHTML = `${hours}`;
    mins.innerHTML = `${minutes}`;
    secs.innerHTML = `${seconds}`;
  }, 1000);
}

/*
 * --------------------------------------------
 *  FETCH MOVIE DATA FROM API
 *  fetches movie data from API using async/await
 *  errors are handled through try/catch block
 * --------------------------------------------
 */
async function fetchData() {
  try {
    const resp = await fetch(
      "https://raw.githubusercontent.com/bhumikama/bhumikama.github.io/main/movies.json"
    );
    const data = await resp.json();
    movies = data;
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies(movies);
    generateGenreTags();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Event Listener for DOMContentLoaded.
 *
 * handles click events for search icon
 * toggles class for search(show/hide input element)
 * handles click events for sort
 * handles click event for different navigation in header
 * handles click event for starting the timer
 */

document.addEventListener("DOMContentLoaded", async () => {
  await fetchData();

  const searchBar = document.getElementById("search-bar");
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
    searchBar.classList.toggle("show-search");
  });

  //when the search icon is closed
  const closeIcon = document.querySelector(".search__close");
  closeIcon.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    searchInput.value = "";
    searchKeyword = "";
    searchIsActive = false;
    filterMovies();
  });

  //searching movies through input field
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (event) => {
    const keyword = event.target.value.trim();
    if (keyword) {
      searchMovies(keyword);
    } else {
      searchKeyword = "";
      searchIsActive = false;
      filterMovies();
    }
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the form from being submitted
    }
  });

  const selectField = document.getElementById("sort-select");
  selectField.addEventListener("change", (event) => {
    const sortType = event.target.value;
    if (searchIsActive || filteredMovies.length !== 0) {
      sortMovies(filteredMovies, sortType); // when search is active sort based on filtered movies
    } else {
      sortMovies(movies, sortType); // otherwise sort considering the whole list of movies
    }
  });

  //when home nav is clicked
  document.getElementById("homeButton").addEventListener("click", () => {
    displayMovies(movies);
    selectedGenre = "All";
  });

  //when favorites nav is clicked
  document.getElementById("favoriteButton").addEventListener("click", () => {
    window.location.href = "favorites.html";
  });

  //for starting a timer
  startTimerButton.addEventListener("click", function (event) {
    const timerInput = document.getElementById("input-minutes");
    const inputTimeInMinutes = parseInt(timerInput.value);

    if (isNaN(inputTimeInMinutes) || inputTimeInMinutes <= 0) {
      alert("Please input a valid number ...");
      return;
    }
    displayCountDown.innerHTML = "";
    clearInterval(countdown);
    startCountDown(inputTimeInMinutes);
    timerInput.value = "";
  });

  calculateTimeSpent();
});
