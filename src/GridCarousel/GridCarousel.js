import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// const GridCarousel = ({ movies }) => {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1, // Adjust as needed
//       slidesToScroll: 5, // Adjust as needed
//     };
  
//     return (
//       <Slider {...settings}>
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             <img src={`http://localhost:8080/${movie.poster_path}`} alt={movie.title} />
//             <p>{movie.title}</p>
//           </div>
//         ))}
//       </Slider>
//     );
//   };
  

const GridCarousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 movies per slide
    slidesToScroll: 5, // Scroll 5 slides at a time
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`http://localhost:8080/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </Slider>
  );
};



export default GridCarousel;
