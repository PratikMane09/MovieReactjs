// SingleMovieDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import "../css/castbox.css";
import "../css/singlr.css";
import Castbox from "../components/Castbox.js";
function SingleMovieDetail() {
  const { id } = useParams();
  const [movies, setMovies] = useState();
  const [cast, setcast] = useState([]);
  console.log("cast :", cast);
  // Specify the API endpoint for user data
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=367dd760d5769cd24b8242911b782852&language=en-US`;
  const casturl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=367dd760d5769cd24b8242911b782852&language=en-US`;
  useEffect(() => {
    async function fetchData(apiUrl) {
      try {
        // const response = await fetch(apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await response.json();
        console.log(userData);
        setMovies(userData);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    // Call the fetchData function somewhere in your code
    fetchData(apiUrl);
  }, []);

  useEffect(() => {
    async function fetchData(casturl) {
      try {
        // const response = await fetch(apiUrl);
        const response = await fetch(casturl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await response.json();
        console.log(userData);
        setcast(userData.cast);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    // Call the fetchData function somewhere in your code
    fetchData(casturl);
  }, []);

  // `https://api.themoviedb.org/3/search/movie?api_key=367dd760d5769cd24b8242911b782852&language=en-US&query=${query}&page=1`

  function handleclose() {
    window.location.href = "/";
  }
  return (
    <div>
      <Container {...movies} />
      <div className="container2">
        <h2>Cast</h2>
        <div className="grid1">
          {cast.map((movieReq) => (
            <Castbox key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
      <div className="center">
        <button onClick={handleclose}>Close</button>
      </div>
    </div>
  );
}

export default SingleMovieDetail;
