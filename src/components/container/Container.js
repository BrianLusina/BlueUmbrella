import React from 'react';
import CityContainer from './CityContainer';
import Forecast from './Forecast';
import Metrics from './Metrics';
import Search from './Search';

export default class Container extends React.Component{
    render(){
        return(
            <CityContainer />
            <Forecast />
            <Metrics />
            <Search />
        )
    }
}