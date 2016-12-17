import React from 'react'

/**
 * City container will be updated by Search Component and also by the current user location
 * Which will be obtained by api
 * 
 */
export default class CityView extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='row'>
                <div className='col-xs-1 col-sm-6' id='city'>{this.props.city}</div>
            </div>
        )
    }
}

// the types of props this component must receive
CityView.propTypes = {
    city: React.PropTypes.string.isRequired,
    code: React.PropTypes.string.isRequired
}