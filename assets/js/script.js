const url = "http://api.themoviedb.org/3/";


function getMovie() {
    var baseURL = url + "search/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&query=" + inputElement;
    fetch(baseURL).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.dir(data);
        $("#searchBtn").click(function () {
            var movies = data.results;
            var el = document.getElementById("Title");
            el.innerHTML = "";
            movies.forEach(function (movie) {
                el.innerHTML += `<p>${movie.title}</p>`;
            })
        })
    }).catch(function (error) {
        console.error("Something has gone wrong");
        console.error(error);
    })
}

getMovie();











