import React, { Component, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style/App.scss';
import Details from './components/Details/Details';
import List from './components/List/List';
import Banner from './components/Banner/Banner';

const API_KEY = "57c23b2d887f53cf4e9808685fd0c6bc";

const now_playing_api = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
const popular_api = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const upcoming_api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        now_playing: [],
        popular: [],
        upcoming: [],
        images: [],
        isLoading: true,
        error: null,
    };
  }

  componentDidMount(){
    this.fetchData(now_playing_api, "now_playing");
    this.fetchData(popular_api, "popular");
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
    const { now_playing, popular, upcoming } = this.state;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={() => 
          <>
            <Banner title="Movie React App" backdrop={popular}/>
            <List title="Now Playing" feedData={now_playing} />
            <List title="Popular" feedData={popular}/>
            <List title="Upcoming" feedData={upcoming} />
          </>
        }/>
        <Route exact path="/:listType/:movieName" component={(props) => (<Details {...props} now_playing={now_playing} popular={popular} upcoming={upcoming} />)} />
      </Switch>
    </div>
  );
  }
}

export default App;
