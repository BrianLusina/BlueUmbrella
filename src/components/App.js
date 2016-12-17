import React from 'react'
import Header from './Header';
import Footer from './Footer';
import WeatherCard from './WeatherCard';
import Container from './container/Container';
import jQuery from 'jquery';


export default class App extends React.Component{
    constructor(){
        super();

        this.state = {
            city : "",
            countryCode: ""
        }
        this._getLocation = this._getLocation.bind(this);
    }
    
    render(){
        return(
            <div>
                <Header />
                <div className='container-fluid'>
                    <div className="main">
                        <div className="row">
                            <WeatherCard />    
                            <Container city={this.state.city} code={this.state.countryCode}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    componentDidMount(){
        this._getLocation();
    }

    // get current user location
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

