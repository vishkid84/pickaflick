

const url = "http://api.themoviedb.org/3/search/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&query=kerala";

function getMovie() {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.dir(data);
        var movies = data.results;
        $("#searchBtn").click(function () {
            var el = document.getElementById("Title");
            el.innerHTML = "";
            movies.forEach(function (movie) {
                el.innerHTML += `<p>${movie.title}</p>`;
            });
        })
    }).catch(function (error) {
        console.error("Something has gone wrong");
        console.error(error);
    })
}

getMovie();

// function(getMovie(){

// })
// getMovie()


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





// function getMovie() {
//     fetch(url).then(response => {
//         return response.json();
//     }).then(response => {
//         $("#searchBtn").click(function () {
//             document.getElementById("Title").textContent = Title;
//             console.log(Title);
//         });
//     })
// }

// getMovie();

