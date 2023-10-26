import React, { Component } from 'react';
import './MovieGrid.css';

class MovieGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        position: 0,
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

    slideLeft = () => {
      this.setState((prevState) => ({
        position: prevState.position + 1,
      }));
    };
  
      slideRight = () => {
        this.setState((prevState) => ({
          position: prevState.position - 1,
        }))
      }
    render() {
      const { movies, position } = this.state;
      rreturn (
        <div className="movie-slider">
          <div className="movie-grid" style={{ transform: `translateX(${position * 100}%)` }}>
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img src={`http://localhost:8080/${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
  
          <button id="left-button" onClick={this.slideLeft}>
            Previous
          </button>
          <button id="right-button" onClick={this.slideRight}>
            Next
          </button>
        </div>
      );
    }
  }
  
  export default MovieGrid;
//testing