import React, { Component, PropTypes } from 'react';

export default class DayWeather extends Component{
    render(){
        return(
            <div className="weather time-day">
                <div className="icon">
                    <i className="sun"></i>
                    <i className="cloud windy"></i>
                </div>
                
                <div className="content">
                    <h3>Day</h3>
                    <div className="degrees">+ 3</div>
                    <div className="data">          
                        <h2>Mostly Sunny</h2>
                        <div>Wind: N 5 mph</div>
                        <div>Humidity: 45%</div>
                    </div>
                </div>
            </div>
        )
    }
}

DayWeather.propTypes = {
    location : PropTypes.object.isRequired
}