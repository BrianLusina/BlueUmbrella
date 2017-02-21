import React, { Component } from 'react';
import jQuery from 'jquery';
import MorningWeather from '../components/morningWeather';
import DayWeather from '../components/dayWeather';
import EveningWeather from '../components/eveningWeather';
import NightWeather from '../components/nightWeather';

class App extends Component {
  constructor(){
      super();

      this.state = {
          city : "",
          countryCode: ""
      }
      this._getLocation = this._getLocation.bind(this);
  }

  render() {
    return (
      <div>
        <main>  
          <div className="device">
            <header></header>
            <section>
              <MorningWeather location={this.state.city}/>
              <DayWeather location={this.state.city}/>
              <EveningWeather location={this.state.city}/>
              <NightWeather location={this.state.city}/>
            </section>
          </div>
        </main>
      </div>
    );
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

export default App;
