import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import CityList from '../containers/CityList';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CityList />
      </div>
    );
  }
}

export default App;