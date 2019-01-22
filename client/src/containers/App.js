import React, { Component } from 'react';
import { SearchInput } from '../components'
import ApiHelper from '../helpers/api-helper';

import './App.css';

class App extends Component {
  state = {
    selectedCity: {},
    cityList: [],
    weatherData: [],
    isLoading: [],
    temperature: []
  };
  
  componentDidMount() {
    
  }

  onSearchChange = async (city) => {
    const cityList = await ApiHelper.findCity(city);

    this.setState({ cityList });
  }

  onCityChange = async (selectedCity) => {
    const { coord } = selectedCity;
    let temperature = [];

    if(!localStorage.getItem('temp')) {
      temperature = await ApiHelper.getTemperatureForCity(coord.lat, coord.lon);
    
      localStorage.setItem('temp', JSON.stringify(temperature));
    } else {
      temperature = await new Promise((resolve) => resolve(localStorage.getItem('temp')));
    }
    
    this.setState({ selectedCity, temperature });
  }

  render() {
    const { cityList, selectedCity } = this.state;
    
    return (
      <div className="App">
          <div className="">{selectedCity && selectedCity.name}</div>
          <SearchInput cities={cityList} onSearchChange={this.onSearchChange} onCityChange={this.onCityChange}/>
      </div>
    );
  }
}

export default App;
