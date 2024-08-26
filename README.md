1. **Project Overview**

        The Movie App is a web-based application designed to help users browse, search, and manage their favorite movies.
        It provides a user-friendly interface for exploring a collection of movies, filtering them by genre, searching by title,
        and marking movies as favorites. The app incorporates various advanced JavaScript techniques, including asynchronous operations
       and API interactions, to enhance functionality and user experience.

3. **Features**

      - **Browse Movies**: Users can view a list of available movies, each displayed as a card with key details like title and poster.

      - **Search Functionality**: Users can search for movies by entering a keyword. The app filters and displays movies whose titles match the search term.

      - **Genre Filtering**: Users can filter movies by selecting a specific genre, making it easier to find movies of interest.

      - **Favorite Movies**: Users can mark movies as favorites by clicking a heart icon. These favorites are stored locally and can be viewed separately.

      - **Separate Favorites Page**: The app includes a dedicated favorites page where users can view only their favorite movies.

4. **Technical Aspects**
   
   - **Frontend**: The app's frontend is built using HTML, CSS, and JavaScript. It uses grid and flexbox layouts for responsive design and JavaScript for dynamic content rendering.

   - **Local Storage**: The app uses the browser's local storage to persist favorite movies, ensuring that user preferences are saved across sessions.

5. **Key Functions**
   - createMovieCard(movie): Generates the HTML structure for a movie card, including the title, poster, and heart icon for marking favorites.

   - filterMovies(): Filters the movie list based on the selected genre and search keyword, updating the displayed movies accordingly.

   - displayMovies(movies): Renders the filtered list of movies on the screen.

   - toggleLike(movieId): Adds or removes a movie from the user's favorites list, updating the local storage.
