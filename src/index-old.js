/*Array for the Weekdays*/
var weekday = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
/*JS date instances*/
d= new Date();

var measurement = 'cel';
$measurement = 'cel';

$(document).ready(function(){
    $measurement = 'cel';
    //get the user location
    getLocation();
    //get the id #switch to change the temp degree unit
    $('#switch').click(function(){
        changeDeg();
    });
});

// /*Get user location*/
// function getLocation(){
//     //perform an asynchronous HTTP request
//     $.ajax({
//         url:'http://ip-api.com/json',
//         method:'GET',
//         data:{},
//         dataType:'json',
//         success: function(data){
//             $city = data.city+','+data.countryCode;
//             setCurrent($city);
//             setForecast($city);
//             ;
//             },
//         error: function(err){
//             console.log(err)
//         }
//     });
// }

/*Set current city from the getLocation() function*/
function setCurrent(city){
   $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=5ffdbfa1c66bc24fc33a167761edd1e2',
        method: 'GET',
        data: {},
        dataType: 'json',
        success: function(data){
            //calls the setGradient(value) fn to set the temp
            setGradient(data.main.temp);
            //removes the #city child elements from DOM
            $('#city').empty();
            $('#city-material').empty();
            //add current city to element with #city id
            $('#city').append(city.substring(0,city.indexOf(',')));
            $('#city-material').append(city.substring(0,city.indexOf(',')) + ' ' + city.substring(city.indexOf(',')) + ' ' + '<i class="fa fa-map-marker"></i>');
            $('#temp').empty();
            if ($('#icon').is(':empty')){
                //call the setIcon(status) function to set the weather icons and the background based on the weather condition
                setIcon(data.weather[0].main);
            }
            if ($('#temp').is(':empty')){
                //call the inCel(value, reason) funtion to set the temp value
                $('#temp').append(inCel(data.main.temp));
            }
            if ($('#switch').is(':empty')){
                $('#switch').append('<button id="toggleDeg" class="btn btn-default">Switch to °F</button>')
            }
        }
    }); 
}

/*Sets and formats the temp value from setCurrent(city) fn, responsible to setting the background image and color*/
function setGradient(value){
    $('.container-fluid').css('background','linear-gradient(rgba('+Math.round(value-263)*8 + ','+ Math.round(value-263)*2+','+(45-Math.round(value-263))*7+',0.6), rgba('+Math.round(value-263)*8+','+ Math.round(value-263)*5 +',200,0.6))');
    
    $('.container-fluid').css('background','-webkit-linear-gradient(rgba('+Math.round(value-263)*8+','+ Math.round(value-263)*2+','+(45-Math.round(value-263))*6+',0.6), rgba('+Math.round(value-263)*5+','+ Math.round(value-263)*4+',200,0.6))');
    
    $('.container-fluid').css('background','-moz-linear-gradient(rgba('+Math.round(value-263)*8+','+ Math.round(value-263)*2+','+(45-Math.round(value-263))*6+',0.6), rgba('+Math.round(value-263)*5+','+ Math.round(value-263)*8+',200,0.6))');
    
    $('.container-fluid').css('background','-o-linear-gradient(rgba('+Math.round(value-263)*8+','+ Math.round(value-263)*2+','+(45-Math.round(value-263))*6+',0.6), rgba('+Math.round(value-263)*5+','+ Math.round(value-263)*8+',200,0.6))');
}

/*function to set the weather icons based on the weather desc in JSON data, switches between the cases and updates the icon and the background*/
function setIcon(status){
  switch(status){
      
      case 'Rain':
          /*Sets the appropriate weather icon*/
          $('#icon').append('<i class="wi wi-rain-mix"></i>');
          /*Changes the background image*/
          $('body').css('background-image','url("http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853")');
          break;
          
      case 'Drizzle':
          $('#icon').append('<i class="wi wi-rain-mix"></i>');
          $('body').css('background-image','url("http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853")'); 
          break;
    
    case 'Clear':
          $('#icon').append('<i class="wi wi-day-sunny"></i>');
          $('body').css('background-image','url("http://pexels.imgix.net/photos/3032/summer-ray-of-sunshine-bikes-bicycles.jpg?fit=crop&w=1600&h=853")')
           break;
    
    case 'Clouds':
          $('#icon').append('<i class="wi wi-cloudy"></i>');
          $('body').css('background-image','url("http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853")')
           break;
         
    case 'Thunderstorm':
          $('#icon').append('<i class="wi wi-storm-showers"></i>');
          $('body').css('background-image','url("http://pexels.imgix.net/photos/2271/clouds-cloudy-field-meadow.jpg?fit=crop&w=1600&h=853")')
           break;  
           
    case 'Snow':
          $('#icon').append('<i class="wi wi-snow"></i>');
          $('body').css('background-image','url("http://pexels.imgix.net/photos/2377/snow-black-and-white-street-winter.jpg?fit=crop&w=1600&h=853")')
           break;  
    
    case 'Mist':
          $('#icon').append('<i class="wi wi-fog"></i>');
          $('body').css('background-image','url("http://pexels.imgix.net/photos/5230/road-fog-foggy-mist.jpg?fit=crop&w=1600&h=853")')
           break;
    
    case 'Fog':
          $('#icon').append('<i class="wi wi-fog"></i>');
          $('body').css('background-image','url("http://pexels.imgix.net/photos/5230/road-fog-foggy-mist.jpg?fit=crop&w=1600&h=853")')
           break;
    
    case 'Haze':
          $('#icon').append('<i class="wi wi-smoke"></i>');
          $('body').css('background-image','url("http://pexels.imgix.net/photos/5281/city-sky-skyline-australia.jpg?fit=crop&w=1600&h=853")')
           break;  
  }
}

/*function to set the temp value, converts it to either celsius of farenheit*/
function inCel(value, reason){
  if ($measurement === 'cel'){
      return Math.round(value - 273.15)+' °C';
  }else {
      return Math.round((value - 273.15)* 1.8000 + 32.00)+' °F';
  }
}

/*Sets the forecast for the current city*/
function setForecast(city, reason){
    /*asynchronous HTTP request*/
     $.ajax({
         url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+',de&mode=json&appid=5ffdbfa1c66bc24fc33a167761edd1e2',
         method: 'GET',
         data: {},
         dataType: 'json',
         success: function (data){
             $('#forecast').empty();    	
             //gets the current day
             var dayCounter= d.getDay();
             for (i=0;i<=4;i++){
                 if (dayCounter >= weekday.length-1){
                     dayCounter = 0;
                 }else {
                     dayCounter+=1
                 }
                 if (data.list[i].weather[0].main !== '' && reason !== 'refresh')
                 {
                     //sets the forecast for the next 5 days
                     $('#weekdays').append(weekday[dayCounter]+'<br/>');   
                     //updates the icons for the next 5 days
                     $('.icons').append(getIcon(data.list[i].weather[0].main)+'<br/>');
                 }
                 //sets the temp for the next 5 days
                 $('#forecast').append(inCel(data.list[i].temp.max)+"<br/>");
             }
         }
     });
}

/*Gets the icon for the weather forecast*/
function getIcon(weather){
  switch(weather){
    case 'Rain': return '<i class="wi wi-rain-mix"></i>';
    case 'Drizzle': return '<i class="wi wi-rain-mix"></i>';
    case 'Clouds': return '<i class="wi wi-cloudy"></i>';
    case 'Clear': return '<i class="wi wi-day-sunny"></i>';
    case 'Thunderstorm': return '<i class="wi wi-storm-showers"></i>';
    case 'Snow': return '<i class="wi wi-snow"></i>';
    case 'Haze': return '<i class="wi wi-smoke"></i>';
    case 'Fog': return '<i class="wi wi-fog"></i>';
    case 'Mist': return '<i class="wi wi-fog"></i>';
    default: return '<i class="wi wi-time-1"></i>';
  }
}

/*Change degrees*/
function changeDeg(){
    //remove all child nodes from DOM
   $('#switch').empty();
    //if the measurement var is strictly cel, append a button to element with #switch id
    if ($measurement === 'cel') {
        $('#switch').append('<button id="toggleDeg" class="btn btn-default">Switch to °C</button>');
        setForecast($city,'refresh')
        setCurrent($city)
        $measurement='far';
    }else {
        $('#switch').append('<button id="toggleDeg" class="btn btn-default">Switch to °F</button>');
        setCurrent($city)  
        setForecast($city,'refresh')
        $measurement='cel';
    }  
}

//Adds an autocomplete function to the searchbox
$('#search').autocomplete({
  source: function (request, response) {
      $.getJSON("http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term, function (data) {
          if (data[0] ===''){
              response(close());
          }else{
              response(data);
          }
        }
    );
  },
  minLength: 3,
  appendTo: '#searchbox',
  delay:250,
  select: function (x,y){
      getCityDetails(y.item.value);
  }
});

function getCityDetails(citycomp){
  $.ajax({
    url: 'http://gd.geobytes.com/GetCityDetails?callback=?&fqcn='+citycomp,
    dataType: 'json',
    success:function(data){
        $city = data.geobytescity+','+data.geobytesinternet+','+data.geobytesregionlocationcode.substring(2,5);
        $('#icon').empty();
        //sets the current city
      setCurrent($city);
        $('.icons').empty();
        $('#weekdays').empty();
        //set the forecase for the current city
        setForecast($city);
    }
  });
}