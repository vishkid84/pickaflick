// API Key
const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
const img_URL = "https://image.tmdb.org/t/p/w500/"

const searchButton = document.getElementById("search");
const inputValue = document.getElementById("inputValue");
const searchMovie = document.getElementById("searchMovie");
const url = "http://api.themoviedb.org/3/";

function movieSections(movies){
    return movies.map(function (movie) {
        return `
            <img src=${img_URL + movie.poster_path} alt="" data-movie-id=${movie.id}>
        `
    })
}

function movieContainer(movies){
    let movieElement = document.createElement("div");
    movieElement.setAttribute("class", "movieTitle")
    movieTemplate = 
    `
    <section class="movieSections">
        ${movieSections(movies)}
    </section>
    
    <div class="content">
        <p id="content-close">X</p>
    </div>
    `

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

$(searchButton).click(function () {
    const value = inputValue.value;
    let searchURL = url + "search/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&query=" + value;

    fetch(searchURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let movies = data.results;
        // console.log("Movies", movies);
        let movieBlock = movieContainer(movies);
        searchMovie.appendChild(movieBlock);
    })
    .catch(function (error) {
        console.error("Something has gone wrong");
        console.error(error);
    })
    console.log("Value: ", value);
})





        // async function getMovie() {
//     const response = await fetch(url);
//     const data = await response.json();
//     var movies = data.Search;
//     var el = document.getElementById("Title");
//     el.innerHTML = "";
//     $("#searchBtn").click(function () {
//         movies.forEach(function (movie) {
//             el.innerHTML += "<p>" + movie.Title + "</p>";
//             console.log(movie.Search);
//         });
//     });
// }

// getMovie()
