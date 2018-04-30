import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <div className="logo">
            <img src="http://dombellettini.com/portfolio/weather_app/src/img/InstaWEATHER_logo.png" />
          </div>
          <div className="search">
            <SearchBar />
          </div>
        </div>
        <div className="current">
          <p>Current Weather</p>
        </div>
        <WeatherList />
      </div>
    );
  }
}
