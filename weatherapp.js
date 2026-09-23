document.querySelector('#myform').addEventListener('submit', (e) => {

    e.preventDefault();

    let cityInfo = document.querySelector('#city').value;

    if (cityInfo === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "05af43025e8044f6d51675bd0283764c";

    axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&appid=${apiKey}&units=metric`
    )

    .then((info) => {

        console.log(info.data);

        // Store API response
        let weather = info.data;
        document.querySelector('#cityName').innerHTML =
            weather.name + ", " + weather.sys.country;

    
        document.querySelector('#temperature').innerHTML =
            weather.main.temp + "°C";


        document.querySelector('#description').innerHTML =
            weather.weather[0].description;

        
        document.querySelector('#feelsLike').innerHTML =
            weather.main.feels_like;

        
        document.querySelector('#humidity').innerHTML =
            weather.main.humidity;

    
        document.querySelector('#windSpeed').innerHTML =
            weather.wind.speed;

        
        let iconCode = weather.weather[0].icon;

        document.querySelector('#weatherIcon').src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    })

    .catch((error) => {

        console.log(error);

        alert("Enter a valid city name");

    });

});