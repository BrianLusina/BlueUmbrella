import React from 'react'

/**
 * City container will be updated by Search Component and also by the current user location
 * Which will be obtained by api
 * 
 */
export default class CityContainer extends React.Component{
    constructor(){
        super();
        this.state ={
            city : ""
        }
    }

    //updates the state of this component when
    componentWillReceiveProps(){
        this.setState({city: this.props.currentCity})
    }

    render(){
        return(
            <div className='row'>
                <div className='col-xs-1 col-sm-6' id='city'>{this.state.city}</div>
            </div>
        )
    }
}

// the types of props this component must receive
CityContainer.propTypes = {
    currentCity: React.PropTypes.string.isRequired
}