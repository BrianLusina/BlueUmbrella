import React from 'react'
import Geolocation from './Geolocation';

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
        Geolocation();
        this.setState({
            city: Geolocation.city,
            countryCode: Geolocation.countryCode
        });
        console.log("city ", Geolocation.city);
        console.log(this.state.city, this.state.countryCode);
    }
}

// // the types of props this component must receive
// CityContainer.propTypes = {
//     currentCity: React.PropTypes.string.isRequired,
//     countryCode: React.PropTypes.string.isRequired
// }