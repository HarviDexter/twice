const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function getClassByRate(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote > 5) {
    return "orange";
  } else {
    return "red";
  }
}

function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  document.querySelector(".movies").innerHTML = "";

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `<div class="movie__cover-inner">
    <img 
    class ="movie-cover"
    src="${movie.posterUrlPreview}"
    alt="${movie.nameRu}" />
    <div class="movie__cover--darkened"></div>
  </div>
  <div class="movie__info">
    <div class="movie_tittle">${movie.nameRu}</div>
    <div class="movie__categori">${movie.genres.map(
      (genres) => `${genres.genre}`
    )}</div>
    <div class="movie_average movie__average--${getClassByRate(
      movie.rating
    )}">${movie.rating}</div>
  </div>`;
    moviesEl.appendChild(movieEl);
  });
}

const form = document.querySelector("form");
const search = document.querySelector(".header-search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ApiSearchUrl = `${API_URL_SEARCH} ${search.value}`;
  if (search.value) {
    getMovies(ApiSearchUrl);

    search.value = "";
  }
});
