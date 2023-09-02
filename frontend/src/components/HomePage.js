import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,             // Adjust transition speed (lower value for smoother transition)
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,    // Adjust autoplay interval (higher value for smoother transitions)

};

  return (
    <Box width="100%" height="100%" margin="auto" marginTop={2}>
      <Box margin="auto" width="60%" height="60vh" padding={2}>
        <Slider {...sliderSettings}>
          <div>
            <img
              src="https://www.nowrunning.com/content/movie/2022/king-25787/Stills/kingofkotha_2023727.jpg"
              alt="Slide 1"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div>
            <img
              src="https://www.nowrunning.com/content/movie/2022/king-25787/Stills/kingofkotha_2023727.jpg"
              alt="Slide 2"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Add more slide items */}
        </Slider>
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign="center" marginTop={"50px"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        margin="auto"
        display="flex"
        width="80%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {movies &&
          movies.slice(0, 4).map((movie, index) => (
            <MovieItem
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          component={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
