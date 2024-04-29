import "../css/moviebox.css";
import SingleMovieDetail from "../pages/SingleMovieDetail";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({
  id,
  original_title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  function singlepage(id) {
    <SingleMovieDetail id={id} />;
  }

  return (
    <div className="card text-center  mb-3">
      <div className="card-body ">
        <img className="card-img-top" src={API_IMG + poster_path} alt="" />
        <div className="card-body">
          <p>{original_title}</p>
          <p>ratings:{vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
