import React from 'react';
import './MovieGrid.css';


class MovieGrid extends React.Component {
  state = {
    movies: [],
    currentIndex: 0,
    transformValue: null,
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/v1/movies/now-playing")
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleNextClick = () => {
    const { currentIndex, movies } = this.state;
    const nextIndex = currentIndex + 5;

    if (nextIndex < movies.length) {
      const transformValue = `translateX(-${nextIndex * 200}px)`;
      this.setState({ currentIndex: nextIndex, transformValue });
    }
  };

  handlePreviousClick = () => {
    const { currentIndex } = this.state;
    const previousIndex = currentIndex - 5;

    if (previousIndex >= 0) {
      const transformValue = `translateX(-${previousIndex * 200}px)`;
      this.setState({ currentIndex: previousIndex, transformValue });
    }
  };

  render() {
    const { movies, currentIndex, transformValue } = this.state;

    const visibleMovies = movies.slice(currentIndex, currentIndex + 5);

    return (
      <div className="movie-grid-wrapper" style={{ transform: transformValue }}>
        <div className="movie-grid">
          {visibleMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={`http://localhost:8080/${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
        <button id="left-button" onClick={this.handlePreviousClick}>
          Previous
        </button>
        <button id="right-button" onClick={this.handleNextClick}>
          Next
        </button>
      </div>
    );
  }
}

export default MovieGrid;




