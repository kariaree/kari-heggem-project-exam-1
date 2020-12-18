const newsUrl = "http://hubblesite.org/api/v3/news";

fetch(newsUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        handleNews(json);
    })
    .catch(function(error){
        console.log(error);
        // document.location.href ="error.html";
    })

function handleNews(json){

    console.dir(json);
    const container = document.querySelector(".news-link-list");

    let html = "";

    json.forEach(function(results){
        html += `<li class="news-link-list-item"><a href="${results.url}">${results.name}</a></li>`

    });

    container.innerHTML = html;
}