const div = document.querySelector('.js-weather'),
    weather = div.querySelector('span');

const API_KEY = '283cf57e7cea5cb08f066be4827a0670';
const COORDS = 'coords';

function getWeaher(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
        weather.style.color = 'white';  
    });
}

function saveCoords(coordObj){
    localStorage.setItem(COORDS,JSON.stringify(coordObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude
    };
    saveCoords(coordObj);
    getWeaher(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoord = localStorage.getItem(COORDS);
    if(loadedCoord === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoord);
        getWeaher(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();