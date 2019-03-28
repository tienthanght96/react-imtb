import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import './App.css';
import { userLoginWithSession } from '../user/userActions';
import { Header } from '../share/Header';
import { CarouselContainer } from '../share/Carousel';

class App extends Component<any> {
  componentDidMount() {
    this.props.userLoginWithSession();
  }
  render() {
    const movie = {
      "vote_count": 9634,
      "id": 238,
      "video": false,
      "vote_average": 8.6,
      "title": "The Godfather",
      "popularity": 29.247,
      "poster_path": "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
      "original_language": "en",
      "original_title": "The Godfather",
      "genre_ids": [
        18,
        80
      ],
      "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
      "adult": false,
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "release_date": "1972-03-14"
    }
    return (
      <div>
        <Header/>
        <div className="app-wrapper">
          <CarouselContainer movie={movie} currentDot={1}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  userLoginWithSession: () => dispatch(userLoginWithSession())
});

export default connect(null, mapDispatchToProps)(App);
