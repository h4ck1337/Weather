window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureDescription = document.querySelector(".temperature-descritption");
    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=> {
                console.log(position);
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const proxy = `https://cors-anywhere.herokuapp.com/`;
                const api = `${proxy}https://api.darksky.net/forecast/6985553218eb5391e896a4afc33d13df/${lat},${long}`;
                fetch(api)
                .then(response => {
                            return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary} = data.currently;

                    //Set DOM Elements
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary ;       
                    locationTimezone.textContent= data.timezone ;             
                });
            });

     

    }
});