import React from 'react';
import jQuery from 'jquery';

const Geolocation = () => {
    var currentCity = "";
    var countryCode = "";
    //perform an asynchronous HTTP request
    jQuery.ajax({
        url:'http://ip-api.com/json',
        method:'GET',
        data:{},
        dataType:'json',
        success: (data) => {
            currentCity = data.city;
            countryCode = data.countryCode;
        },
        error: (err)=> {
            console.log(err)
        }
    });
    return {
        city: currentCity,
        cityCode: countryCode
    }
}

module.exports = Geolocation;