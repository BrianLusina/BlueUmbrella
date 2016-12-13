import React from 'react';
import jQuery from 'jquery';
import CityContainer from './CityContainer';
import Forecast from './Forecast';

export default class GeoLocation extends React.Component{
    constructor(){
        super();
        this.state={
            currentCity:"",
            countryCode:""
        }

        this._getLocation = this._getLocation.bind(this);
    }
    /*Get user location*/
    _getLocation(){
        //perform an asynchronous HTTP request
        jQuery.ajax({
            url:'http://ip-api.com/json',
            method:'GET',
            dataType:'json',
            success: (response) => {
                let json = JSON.parse(response);
                let city = json["city"];
                let code = json["countryCode"]
                this.setState({
                    currentCity: city,
                    countryCode: code
                });
                <CityContainer currentCity={this.state.currentCity} />;
                <Forecast currentCity={this.state.currentCity} />;
            },
            error: (err)=> {
                console.log(err)
            }
        });
    }
}