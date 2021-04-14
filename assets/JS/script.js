
//var latt = 94.42
//var long = -100.33





function getName(){
  
   var cityName = $('#cityname').val()
console.log(cityName)
displayData(cityName)
clearData();
document.querySelector("#cityname").val=""
return
}



function displayData(cityName){ 
    


var fiveDay = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=eac047b45b411f6b89b6af8b3c5e347e`

fetch(fiveDay)
    .then(( res) => {
       return res.json();
    })
    .then((data) => {

        var city = data.city.name
        var country = data.city.country
        $('#city').append(city," ", country);

        var latt = data.city.coord.lat
        var long = data.city.coord.lon
        sessionStorage.setItem("lat", latt)
        sessionStorage.setItem("lon", long)

        
        var days1 = data.list[0].dt_txt
        var dateday1 = moment(days1).format('l');
        $('#date0').append(dateday1);
        var temp1 = data.list[0].main.temp
        $('#daytemp0').append("Temperture: ", temp1);
        var image = data.list[0].weather[0].icon
        var iconUrl = "http://openweathermap.org/img/w/" + image + ".png";
        $("#icon0").html("<img src='" + iconUrl  + "'>");        

        var days2 = data.list[8].dt_txt
        var dateday = moment(days2).format('l');
        $('#date1').append(dateday);
        var temp2 = data.list[8].main.temp
        $('#daytemp1').append("Temperture: ", temp2);
        var image = data.list[8].weather[0].icon
        var iconUrl = "http://openweathermap.org/img/w/" + image + ".png";
        $("#icon1").html("<img src='" + iconUrl  + "'>");        

        var days = data.list[16].dt_txt
        var dateday = moment(days).format('l');
        $('#date2').append(dateday);
        var temp = data.list[16].main.temp
        $('#daytemp2').append("Temperture: ", temp);
        var image = data.list[16].weather[0].icon
        var iconUrl = "http://openweathermap.org/img/w/" + image + ".png";
        $("#icon2").html("<img src='" + iconUrl  + "'>");        

        var days = data.list[24].dt_txt
        var dateday = moment(days).format('l');
        $('#date3').append(dateday);
        var temp = data.list[24].main.temp
        $('#daytemp3').append("Temperture: ", temp);
        var image = data.list[24].weather[0].icon
        var iconUrl = "http://openweathermap.org/img/w/" + image + ".png";
        $("#icon3").html("<img src='" + iconUrl  + "'>");        

        var days = data.list[33].dt_txt
        var dateday = moment(days).format('l');
        $('#date4').append(dateday);
        var temp = data.list[33].main.temp
        $('#daytemp4').append("Temperture: ", temp);
        var image = data.list[33].weather[0].icon
        var iconUrl = "http://openweathermap.org/img/w/" + image + ".png";
        $("#icon4").html("<img src='" + iconUrl  + "'>"); 

    var requestOne = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latt + '&lon=' + long + '&exclude=minutely&exclude=hourly&units=metric&appid=eac047b45b411f6b89b6af8b3c5e347e'




    fetch(requestOne)
        .then(( res) => {
        return res.json();
    })
    .then((data) => {
        var day = data.current
        var windSpeed = day.wind_speed
        $('#wind').append(windSpeed), "KmPH";
        var humid = day.humidity
        $('#humd').append(humid);
        var uv = day.uvi
        $('#uv').append(uv);
        var temper = day.temp
        $('#temp').append(temper);

        var fveHumid = data.daily

        var dayOne = fveHumid[0].humidity
        $('#humid0').append("Humidity: ",dayOne);
        var dayTwo = fveHumid[1].humidity
        $('#humid1').append("Humidity: ",dayTwo);
        var dayThree = fveHumid[2].humidity
        $('#humid2').append("Humidity: ",dayThree);
        var dayFour = fveHumid[3].humidity
        $('#humid3').append("Humidity: ",dayFour);
        var dayFive = fveHumid[4].humidity
        $('#humid4').append("Humidity: ",dayFive);

      
     console.log(data)
    })


}) 
}
getName();

 


function clearData(){

    $('#humid4').empty();
    $('#humid3').empty();

}






    //WHEN I view current weather conditions for that city

///THEN I am presented with the city name, the date, an 
   // icon representation of weather conditions, the temperature, the humidity, 
   // the wind speed, and the UV index

