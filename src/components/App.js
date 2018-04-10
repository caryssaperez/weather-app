import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import YoutubeSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA_Muu0SzhIW6Y1dSjUPSImUCuIXakTYhA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('cats');
  }

  videoSearch(term) {
    YoutubeSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos} 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;