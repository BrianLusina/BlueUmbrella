import React, { Component } from 'react';
import jQuery from 'jquery';

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
              <div className="weather time-morning active">
                <div className="icon">
                  <i className="sun"></i>
                </div>
                <div className="content">
                  <h3>Morning</h3>
                  <div className="degrees">- 1</div>
                  <div className="data">          
                    <h2>Sunny</h2>
                    <div>Wind: E 7 mph</div>
                    <div>Humidity: 91%</div>
                  </div>
                </div>
              </div>
              <div className="weather time-day">
                <div className="icon">
                  <i className="sun"></i>
                  <i className="cloud windy"></i>
                </div>
                <div className="content">
                  <h3>Day</h3>
                  <div className="degrees">+ 3</div>
                  <div className="data">          
                    <h2>Mostly Sunny</h2>
                    <div>Wind: N 5 mph</div>
                    <div>Humidity: 45%</div>
                  </div>
                </div>
              </div>
              <div className="weather time-evening">
                <div className="icon">
                  <i className="sun"></i>
                  <i className="cloud"></i>
                  <i className="sprinkles"></i>
                  <i className="sprinkles"></i>
                  <i className="sprinkles"></i>
                  <i className="sprinkles"></i>
                </div>
                <div className="content">
                  <h3>Evening</h3>
                  <div className="degrees">0</div>
                  <div className="data">          
                    <h2>Rainy</h2>
                    <div>Wind: W 12 mph</div>
                    <div>Humidity: 91%</div>
                  </div>
                </div>
              </div>
              <div className="weather time-night">
                <div className="icon">
                  <i className="moon"></i>
                  <i className="cloud"></i>
                  <div className="snowflakes">
                    <i className="snowflake"></i>
                    <i className="snowflake"></i>
                    <i className="snowflake"></i>
                    <i className="snowflake"></i>
                  </div>
                </div>
                <div className="content">
                  <h3>Night</h3>
                  <div className="degrees">- 2</div>
                  <div className="data">          
                    <h2>Cloudy</h2>
                    <div>Wind: N 2 mph</div>
                    <div>Humidity: 47%</div>
                  </div>
                </div>
              </div>
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
