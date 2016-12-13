import React from 'react'
import jQuery from 'jquery';

/**
 * City container will be updated by Search Component and also by the current user location
 * Which will be obtained by api
 * 
 */
export default class CityContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            city : "",
            countryCode: ""
        }
        this._getLocation = this._getLocation.bind(this);
    }

    //updates the state of this component when
    componentWillReceiveProps(){
    }

    render(){
        return(
            <div className='row'>
                <div className='col-xs-1 col-sm-6' id='city'>{this.state.city}</div>
            </div>
        )
    }

    componentDidMount(){
        this._getLocation();
        console.log("city ", this.state.city);
    }

    _getLocation(){
        jQuery.ajax({
            url:'http://ip-api.com/json',
            method:'GET',
            data:{},
            dataType:'json',
            success: (data) => {
                let city = data.city;
                let countryCode = data.countryCode;
                this.setState({ city, countryCode});
            },
            error: (err)=> {
                console.log(err)
            }
    });
}

}

// // the types of props this component must receive
// CityContainer.propTypes = {
//     currentCity: React.PropTypes.string.isRequired,
//     countryCode: React.PropTypes.string.isRequired
// }