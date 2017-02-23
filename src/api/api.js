import jQuery from 'jquery';

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
}
