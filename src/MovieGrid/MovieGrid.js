import React, { Component } from 'react';
import GridCarousel from '../GridCarousel/GridCarousel';
import './MovieGrid.css';

class MovieGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
      };
    }
  
    componentDidMount() {
      fetch('http://localhost:8080/api/v1/movies/now-playing')
        .then((response) => response.json())
        .then((data) => {
          this.setState({ movies: data });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    render() {
      const { movies } = this.state;
      return (
        <div className="movie-grid">
          <GridCarousel movies={movies} /> {/* Render the GridCarousel component */}
        </div>
      );
    }
  }
  
  export default MovieGrid;
//testing