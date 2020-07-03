import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style/App.css';
import Details from './components/Details';
import List from './components/List';

const now_playing_api = `https://api.themoviedb.org/3/movie/now_playing?api_key=57c23b2d887f53cf4e9808685fd0c6bc&language=en-US&page=1`;
const latest_api = `https://api.themoviedb.org/3/movie/latest?api_key=57c23b2d887f53cf4e9808685fd0c6bc&language=en-US`;
const upcoming_api = `https://api.themoviedb.org/3/movie/upcoming?api_key=57c23b2d887f53cf4e9808685fd0c6bc&language=en-US&page=1`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        now_playing: [],
        latest: [],
        upcoming: [],
        isLoading: true,
        error: null,
    };
  }

  componentDidMount(){
    this.fetchData(now_playing_api, "now_playing");
    this.fetchData(latest_api, "latest");
    this.fetchData(upcoming_api, "upcoming");
  }

  fetchData = (param, stateObj) => {   
    fetch(param)
      .then(response => response.json())
      .then(data => {
        this.setState({ [stateObj]: data })
    })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render(){
    const { now_playing, latest, upcoming } = this.state;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={() => <List now_playing={now_playing} latest={latest} upcoming={upcoming} />} />
        <Route exact path="/:listType/:movieName" component={(props) => (<Details {...props} now_playing={now_playing} latest={latest} upcoming={upcoming} />)} />
      </Switch>
    </div>
  );
  }
}

export default App;
