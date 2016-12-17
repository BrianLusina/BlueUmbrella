import React from 'react';
import CityView from './CityView';
import Forecast from './Forecast';
import Metrics from './Metrics';
import Search from './Search';

// entry point to this container
export default class Container extends React.Component{
    constructor(){
        super();

    }

    render(){
        console.log(this.props.city, this.props.code)
        return(
            <div>
                <CityView city={this.props.city} code={this.props.code}/>
                <Forecast />
                <Metrics />
                <Search />
            </div>
        )
    }

    componentWillReceiveProps(nextProps){
        console.log("Props:", nextProps);
    }
}

Container.propTypes ={
    city :React.PropTypes.string.isRequired,
    code: React.PropTypes.string.isRequired
}