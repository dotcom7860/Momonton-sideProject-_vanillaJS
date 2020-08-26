const COORDS = 'coords';

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
        //getWeaher();
    }
}

function init(){
    loadCoords();
}

init();