import React from 'react';

export default class WeatherCard extends React.Component{
    
    constructor(){
        super();
    }
    
    render(){
        return(
            <div class="col-xs-4">
                <div id="material-card">
                    <div id="material-content">
                        <div id="material-img"></div>
                        <div class="material-divider"></div>
                        <div id="material-location-tag">
                            <p id="city-material"></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}