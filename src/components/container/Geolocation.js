import jQuery from 'jquery';
import CityContainer from './CityContainer';
import Forecast from './Forecast';

const Geolocation = () =>{
    //perform an asynchronous HTTP request
    jQuery.ajax({
        url:'http://ip-api.com/json',
        method:'GET',
        dataType:'json',
        success: (response) => {
            let json = JSON.parse(response);
            let city = json["city"];
            let code = json["countryCode"];                
            <CityContainer currentCity={city} countryCode={code}/>;
            <Forecast currentCity={city} countryCode={code}/>;
        },
        error: (err)=> {
            console.log(err)
        }
    });
}

module.exports = Geolocation;