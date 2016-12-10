# Local Weather (Hali Ya Anga)

Simple web application that displays the weather of the current user location. There are 2 versions of this app. One built on ReactJS library and another in jQuery. Functionality remains the same with a bit of differences in UI.


Fulfill the following user stories:
+ User can see the weather in their current location
+ User can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather
+ User can push a button to toggle between Fahrenheit and Celsius

## APIs used

+ The [Open Weather API](http://openweathermap.org/) is used to access the weather details of the cities. 
+ [IP-API](http://ip-api.com/) is used to obtain details of the current user location 
+ [GeoBytes](http://geobytes.com/) API is used to obtain locate other cities that the user searches for.


Versions:

1. The ReacJS version can be found [here](https://haliyaanga.herokuapp.com/)
2. jQuery version is [here](http://hali-ya-anga.bitballoon.com/)

To interact with the React version simply do the follogin:

1. Install the dependencies in the project directory

``` sh
$ npm install
```

2. Build the application

``` sh
$ npm run build
```

3. Run the app

``` sh
$ npm run start
```

That is it. Enjoy!


# Licence

Copyright (c) 2016 by Brian Lusina

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
