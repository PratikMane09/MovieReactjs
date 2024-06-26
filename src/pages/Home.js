// Home.js
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieBox from "../components/MovieBox";
import "../css/moviebox.css";
import { Link } from "react-router-dom";
function Home() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  // Specify the API endpoint for user data
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=367dd760d5769cd24b8242911b782852&language=en-US&page=1";
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
        setpageCount(userData.total_pages);
        setMovies(userData.results);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    // Call the fetchData function somewhere in your code
    fetchData(apiUrl);
  }, []);

  const fetchComments = async (currentPage) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=367dd760d5769cd24b8242911b782852&language=en-US&page=${currentPage}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const userData = await response.json();
      console.log(userData);
      setMovies(userData.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handlePageClick = async (data) => {
    console.log(data.selected + 1);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    // scroll to the top
    //window.scrollTo(0, 0)
  };

  // `https://api.themoviedb.org/3/search/movie?api_key=367dd760d5769cd24b8242911b782852&language=en-US&query=${query}&page=1`
  return (
    <div>
      {
        <div className="container2">
          <div className="grid">
            {movies.map((movieReq) => (
              <Link key={movieReq.id} to={`/movie/${movieReq.id}`}>
                <MovieBox key={movieReq.id} {...movieReq} />
              </Link>
            ))}
          </div>
        </div>
      }

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Home;
