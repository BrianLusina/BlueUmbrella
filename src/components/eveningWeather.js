import React, { Component, PropTypes } from 'react';

export default class EveningWeather extends Component{
    render(){
        return(
            <div className="weather time-evening">
                <div className="icon">
                  <i className="sun"></i>
                  <i className="cloud"></i>
                  <i className="sprinkles"></i>
                  <i className="sprinkles"></i>
                  <i className="sprinkles"></i>
                  <i className="sprinkles"></i>
                </div>
                <div className="content">
                  <h3>Evening</h3>
                  <div className="degrees">0</div>
                  <div className="data">          
                    <h2>Rainy</h2>
                    <div>Wind: W 12 mph</div>
                    <div>Humidity: 91%</div>
                  </div>
                </div>
            </div>
        )
    }
}

EveningWeather.propTypes = {
    city : PropTypes.string.isRequired
}