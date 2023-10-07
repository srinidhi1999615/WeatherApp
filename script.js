// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '91b3b1215cmshe851469f3daec91p19b61fjsn12fe2ce0126f',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// function getWeather(){
// 	$.ajax(settings).done(function (response) {
// 		console.log(response);
// 		$('#temperature').text(response.temp);
// 		$('#min-temperature').text(response.min_temp);
// 		$('#max-temperature').text(response.max_temp);
// 		$('#humidity').text(response.humidity);
// 		$('#sunrise').text(response.sunrise);
// 		$('#sunset').text(response.sunset);
// 		$('#cloudpct').text(response.cloud_pct);
// 		$('#windspeed').text(response.wind_speed);
// 		$('#winddegrees').text(response.wind_degrees);
// 		$('#temperature1').text(response.temp);
// 		$('#sunrise1').text(response.sunrise);
// 		$('#windspeed1').text(response.wind_speed);
// 	});
// }

    // Function to get weather details
    function getWeatherDetails(city) {
        const apiKey = '91b3b1215cmshe851469f3daec91p19b61fjsn12fe2ce0126f'; // Replace with your actual API key
        const apiUrl = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

        const settings = {
            async: true,
            crossDomain: true,
            url: apiUrl,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':'91b3b1215cmshe851469f3daec91p19b61fjsn12fe2ce0126f',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        $.ajax(settings)
            .done(function (response) {
                // Update the weather details on the webpage
                $('#city').text(city);
                $('#temperature').text(response.temp);
                $('#min-temperature').text(response.min_temp);
                $('#max-temperature').text(response.max_temp);
                $('#humidity').text(response.humidity);
                $('#sunrise').text(response.sunrise);
                $('#sunset').text(response.sunset);
                $('#cloudpct').text(response.cloud_pct);
                $('#windspeed').text(response.wind_speed);
                $('#winddegrees').text(response.wind_degrees);
                $('#temperature1').text(response.temp);
                $('#sunrise1').text(response.sunrise);
                $('#windspeed1').text(response.wind_speed);
            })
            .fail(function (error) {
                console.error('Error fetching weather data:', error);
            });
    }

    // Event listener for form submission
    $('#Search-Submit').on('click', function (event) {
        event.preventDefault();
        const city = $('#Search-Input').val();
        getWeatherDetails(city);
    });

    // Event listener for city dropdown
    $('.dropdown-menu a.dropdown-item').on('click', function (event) {
        event.preventDefault();
        const city = $(this).text();
        $('#Search-Input').val(city);
        $('#Search-Submit').submit();
    });

getWeatherDetails('Hyderabad');
