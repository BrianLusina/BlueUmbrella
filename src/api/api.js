import jQuery from 'jquery';

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
 * fetches the list for the forecast. the list has 40 objects, so the search has to be limted to 4.
 * this is to be able to get morning, day, evening and night forecasts.
 * if the first object has a datetime that is night, proceed to next day.
 * and begin search from there
 * */
export const weatherForecastForLocation = (location)=>{
    const OWM_ENDPT = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=c31662bca306c07093c0dfa1e9bbfd79`;

    return fetch(OWM_ENDPT)
        .then(response => {
            return response.json()
        }, (reason) =>{
            //todo: handle errors
            console.error(reason);
        }).then(json => {
            // limit search to first 4 objects to get the times for the day
            console.log(json.list);
        }, (reason)=>{
            //todo: handle errors
            console.error(reason);
        });
};
