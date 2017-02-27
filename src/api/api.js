import jQuery from 'jquery';
import { config } from 'dotenv';

config({path: "../../.env"});

export const currentLocation = (cityState, countryCodeState)=>{
    jQuery.ajax({
        url:'http://ip-api.com/json',
        method:'GET',
        data:{},
        dataType:'json',
        success: (data) => {
            cityState = data.city;
            countryCodeState = data.countryCode;
        },
        error: (err)=> {
            console.log(err)
        }
    });

    return { city: cityState, countryCode: countryCodeState};
};

/**
 * weather forecast that fetches the weather forecast and returns the list of the weather forecast for the
 * day. It will evaluate the morning, day, evening and night weather*/
export const weatherForecast = () => {
    jQuery.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=nairobi&appid=c31662bca306c07093c0dfa1e9bbfd79",
        method: "GET",
        data:{},
        dataType:"json",
        success: (data) => {
            console.log(data["list"])
        },
        error: (err)=>{

        }
    });
};

/**
 * Gets the weather forecast for the current location
 * will update each time of the day. ie. morning, day, evening and night
 * */
export const weatherForecastForLocation = (location)=>{
    const OWM_ENDPT = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.OWM_KEY}`;
    return fetch(OWM_ENDPT)
        .then(response => {
            return response.json()
        });
};
