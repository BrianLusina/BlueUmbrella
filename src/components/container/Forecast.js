import React from "react";
import jQuery from "jquery";


export default class Forecast extends React.Component{
    constructor(){
        super();
        this.state = {
            date: new Date(),
            weekday: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
            nextWeekdays:[],
            icons:[],
            forecast:[],
            tempData:[],
            measurement: 'cel'
        }
        
        this._setForecast = this._setForecast.bind(this);
        this._inCel = this._inCel.bind(this);
        this._getIcon = this._getIcon.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        this._setForecast(nextProps.city);
    }

    render(){
        console.log(this.state.nextWeekdays);
        return(
            <div className='row'>
                <div className='col-xs-6'>
                    <div id='icon'></div>
                </div>
            <div className='col-xs-4'>
                <div className='icons'></div>
                <div id='forecast'></div>
                <div id='weekdays'></div>
            </div>
        </div>
        )
    }

    /*asynchronous HTTP request to get forcast*/
    _setForecast(currentCity){
        jQuery.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+currentCity+',de&mode=json&appid=c31662bca306c07093c0dfa1e9bbfd79',
            method: 'GET',
            data: {},
            dataType: 'json',
            success: (data) => {
                //gets the current day
                var dayCounter= this.state.date.getDay();
                for (var i = 0; i <= 4; i++){
                    if (dayCounter >= this.state.weekday.length-1){
                        dayCounter = 0;
                    }else {
                        dayCounter += 1;
                    }
                    if (data.list[i].weather[0].main !== ''){
                        //sets the forecast for the next 5 days
                        this.state.nextWeekdays.push(this.state.weekday[dayCounter]);
                        this.state.icons.push(this._getIcon(data.list[i].weather[0].main) +'<br/>');
                        // $('#weekdays').append(weekday[dayCounter]+'<br/>');   
                        //updates the icons for the next 5 days
                    }

                    //sets the temp for the next 5 days
                    this.state.tempData.push(this._inCel(data.list[i].temp.max)+"<br/>");
                }
            }
        });
    }

    /*Gets the icon for the weather forecast*/
    _getIcon(weather){
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

    /*function to set the temp value, converts it to either celsius of farenheit*/
    _inCel(value){
        if(this.state.measurement === 'cel'){
            return Math.round(value - 273.15)+' °C';
        }else {
            return Math.round((value - 273.15)* 1.8000 + 32.00)+' °F';
        }
    }
}

Forecast.propTypes = {
    city: React.PropTypes.string.isRequired
}