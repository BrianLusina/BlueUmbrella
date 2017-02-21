import React, { Component, PropTypes } from 'react';

export default class NightWeather extends Component{
    render(){
        return(
            <div className="weather time-night">
            <div className="icon">
                <i className="moon"></i>
                <i className="cloud"></i>
                <div className="snowflakes">
                <i className="snowflake"></i>
                <i className="snowflake"></i>
                <i className="snowflake"></i>
                <i className="snowflake"></i>
                </div>
            </div>
            <div className="content">
                <h3>Night</h3>
                <div className="degrees">- 2</div>
                <div className="data">          
                <h2>Cloudy</h2>
                <div>Wind: N 2 mph</div>
                <div>Humidity: 47%</div>
                </div>
            </div>
            </div>
        )
    }
}

NightWeather.propTypes = {
    city : PropTypes.string.isRequired
}