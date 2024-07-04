const movies = [
  {
    id: 1,
    title: "Interstellar",
    description:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    movie_year: 2014,
    director: "Christopher Nolan",
    actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
      "Casey Affleck",
      "Mackenzie Foy",
      "John Lithgow",
      "Ellen Burstyn",
      "Matt Damon",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    price: "120.00",
  },
  {
    id: 2,
    title: "Barbie",
    description:
      "A doll living in Barbieland is expelled for not being perfect enough and sets off on an adventure in the real world.",
    movie_year: 2023,
    director: "Greta Gerwig",
    actors: [
      "Margot Robbie",
      "Ryan Gosling",
      "Will Ferrell",
      "Simu Liu",
      "America Ferrera",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    price: "150.00",
  },
  {
    id: 3,
    title: "Spider-Man: Across the Spider-Verse",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    movie_year: 2023,
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    actors: [
      "Shameik Moore",
      "Hailee Steinfeld",
      "Oscar Isaac",
      "Jake Johnson",
      "Issa Rae",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    price: "140.00",
  },
  {
    id: 4,
    title: "Avatar: The Way of Water",
    description:
      "Jake Sully and Neytiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    movie_year: 2022,
    director: "James Cameron",
    actors: [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver",
      "Stephen Lang",
      "Kate Winslet",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5ScPNT6fHtfYJeWBajZciPV3hEL.jpg",
    price: "200.00",
  },
  {
    id: 5,
    title: "The Batman",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    movie_year: 2022,
    director: "Matt Reeves",
    actors: [
      "Robert Pattinson",
      "Zoë Kravitz",
      "Paul Dano",
      "Jeffrey Wright",
      "Colin Farrell",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    price: "190.00",
  },
  {
    id: 6,
    title: "Dune",
    description:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    movie_year: 2021,
    director: "Denis Villeneuve",
    actors: [
      "Timothée Chalamet",
      "Rebecca Ferguson",
      "Oscar Isaac",
      "Josh Brolin",
      "Zendaya",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    price: "180.00",
  },
  {
    id: 7,
    title: "No Time to Die",
    description:
      "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    movie_year: 2021,
    director: "Cary Joji Fukunaga",
    actors: [
      "Daniel Craig",
      "Rami Malek",
      "Léa Seydoux",
      "Lashana Lynch",
      "Ralph Fiennes",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    price: "170.00",
  },
  {
    id: 8,
    title: "Black Widow",
    description:
      "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    movie_year: 2021,
    director: "Cate Shortland",
    actors: [
      "Scarlett Johansson",
      "Florence Pugh",
      "David Harbour",
      "Rachel Weisz",
      "Ray Winstone",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    price: "160.00",
  },
  {
    id: 9,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    movie_year: 2010,
    director: "Christopher Nolan",
    actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
      "Cillian Murphy",
      "Marion Cotillard",
      "Michael Caine",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    price: "100.00",
  },
  {
    id: 10,
    title: "Twilight",
    description:
      "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
    movie_year: 2008,
    director: "Catherine Hardwicke",
    actors: [
      "Kristen Stewart",
      "Robert Pattinson",
      "Billy Burke",
      "Ashley Greene",
      "Nikki Reed",
      "Kellan Lutz",
      "Jackson Rathbone",
      "Peter Facinelli",
      "Elizabeth Reaser",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
    price: "120.00",
  },
  {
    id: 11,
    title: "Titanic",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    movie_year: 1997,
    director: "James Cameron",
    actors: [
      "Leonardo DiCaprio",
      "Kate Winslet",
      "Billy Zane",
      "Kathy Bates",
      "Frances Fisher",
      "Danny Nucci",
      "Bill Paxton",
      "David Warner",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    price: "120.00",
  },
];

const movieComments = {};

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <img src="${movie.poster_url}" alt="${movie.title} Poster" class="movie-poster">
    <div class="star-rating">
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
    <input type="text" placeholder="comment here ..." class="input-comment" id="input-comment-${movie.id}"/>
    <button type="submit" class="btn" id="submit-comment-${movie.id}">Submit</button>
    <h4 class="comment-heading">Comments:</h4>
    <div class="comment-list" id="comment-list-${movie.id}"></div>
  `;

  modal.style.display = "block";

  const closeModal = document.querySelector(".close");
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  const submitButton = modalContent.querySelector(
    `#submit-comment-${movie.id}`
  );
  submitButton.addEventListener("click", function () {
    addComment(movie.id);
  });

  displayComments(movie.id);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function addComment(movieId) {
  const commentInput = document.getElementById(`input-comment-${movieId}`);
  const commentText = commentInput.value.trim();
  if (commentText) {
    if (!movieComments[movieId]) {
      movieComments[movieId] = [];
    }
    movieComments[movieId].push(commentText);
    displayComments(movieId);
    commentInput.value = "";
  }
}

function displayComments(movieId) {
  const commentList = document.getElementById(`comment-list-${movieId}`);
  commentList.innerHTML = "";
  if (movieComments[movieId]) {
    movieComments[movieId].forEach((comment) => {
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
  allStars.forEach((star, index) => {
    star.addEventListener("click", function (event) {
      event.stopPropagation();
      const movieCard = star.closest(".movie-card");
      const stars = movieCard.querySelectorAll(".star");
      let currentStar = (index % 5) + 1;
      stars.forEach((star, i) => {
        if (i < currentStar) {
          star.innerHTML = "&#9733;";
        } else {
          star.innerHTML = "&#9734;";
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayMovies(movies);
});
