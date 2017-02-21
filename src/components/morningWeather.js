import React, { Component, PropTypes } from 'react';

export default class MorningWeather extends Component{
    render(){
        return(
            <div className="weather time-morning active">
                <div className="icon">
                    <i className="sun"></i>
                </div>
                
                <div className="content">
                    <h3>Morning</h3>
                    <div className="degrees">- 1</div>
                    <div className="data">          
                        <h2>Sunny</h2>
                        <div>Wind: E 7 mph</div>
                        <div>Humidity: 91%</div>
                    </div>
                </div>
            </div>
        )
    }
}

MorningWeather.propTypes = {
    city : PropTypes.string.isRequired
}