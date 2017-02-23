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
            <header id="location_text">{this.state.city}, {this.state.countryCode}</header>
            <section>
              <MorningWeather location={this.state.city}/>
              <DayWeather location={this.state.city}/>
              <EveningWeather location={this.state.city}/>
              <NightWeather location={this.state.city}/>
            </section>
          </div>
        </main>
        <aside>
          <div class="meta">    
            <h1>React Weather<br/>App Concept</h1>
            <p>Dribbble Rework<br/>Original shot by 
            <a href="https://dribbble.com/shots/1824088-GIF-for-the-Weather-App">Sergey Valiukh</a></p>
            <p>Hover over each filter to see the effect.<br/>Works best in Chrome.</p>
          </div>
        </aside>
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
