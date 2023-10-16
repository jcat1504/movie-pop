import React, { Component } from 'react';
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
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="movie-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img src={`http://localhost:8080/${movie.poster_path}`} alt={movie.title} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default MovieGrid;
