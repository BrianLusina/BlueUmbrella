import React from 'react'
import Header from './Header';
import Footer from './Footer';
import WeatherCard from './WeatherCard';


export default class App extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div>
            <Header />
            <div className='container-fluid'>
                <div className="main">
                    <div className="row">
                        <WeatherCard />    
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}