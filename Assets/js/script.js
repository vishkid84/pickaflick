// const baseURL = "http://www.omdbapi.com/?i=tt3896198&apikey=f0d1e078";

// function getData(query, cb) {
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cb(JSON.parse(this.responseText));
//         }
//     };

//     xhr.open("GET", baseURL + "&" + query);
//     xhr.send();
// }

// function writeToDocument(query) {
//     getData(query, function(data) {
//         console.dir(data);
//         document.getElementById("pickMovieBtn").innerHTML = data.Title;
//     });
// }

const url = "http://api.themoviedb.org/3/search/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&query=kerala";
// var movies = data.Search;
 fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        console.dir(data);
        document.getElementById("Title").innerHTML = data;
    }).catch(function(error){
        console.error("Something has gone wrong");
        console.error(error);
    })

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

