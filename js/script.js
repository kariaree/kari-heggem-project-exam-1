const imageUrl = "https://api.nasa.gov/planetary/apod?api_key=ZdcHuwe23vTU6AIJkOGNRKoHR16Ld5dpukFsBDYk";

fetch(imageUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        console.log(error);
       // document.location.href="error.html";
    });

function handleJson(json) {
    console.dir(json);

    const image = document.querySelector("#todays-image");
    image.src = json.url;

    const copyright = document.querySelector("#copyright");
    copyright.innerHTML = json.copyright;

    const title = document.querySelector("#todays-image-title");
    title.innerHTML = json.title;

    const date = document.querySelector("#todays-date");
    date.innerHTML = json.date;
}

const locationUrl = "http://api.open-notify.org/iss-now.json";

fetch(locationUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        createLocation(json);
    })
    .catch(function(){
        console.log(error);
        // document.location.href ="error.html";
    })

function createLocation(json){
    console.dir(json);

    const latitude = document.querySelector("#latitude");
    latitude.innerHTML = json.iss_position.latitude;

    const longitude = document.querySelector("#longitude");
    longitude.innerHTML = json.iss_position.longitude;

    const time = document.querySelector("#timestamp");
    time.innerHTML = json.timestamp;
}
