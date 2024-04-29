import "../css/singlr.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Container({
  poster_path,
  original_title,
  vote_average,
  overview,
  backdrop_path,
  release_date,
}) {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="container">
      <div className="first-part">
        <Row>
          <Col>
            <div className="image-box">
              {/* Image */}
              <img
                src={API_IMG + poster_path}
                alt="Placeholder"
                height={300}
                width={200}
              />
            </div>
          </Col>
          <Col>
            <h4>{original_title}</h4>
            <br />
            <p>Ratings:{vote_average}</p>
            <p>Release Date:{release_date}</p>
          </Col>
        </Row>

        <div className="description">
          {/* Description */}
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>

      <div className="second-part">
        <div className="image-box2  ">
          {/* Image */}
          <img
            src={API_IMG + backdrop_path}
            alt="Placeholder"
            height={500}
            width={800}
          />
        </div>
      </div>
    </div>

    // <div>
    //   <Row>
    //     <Row>
    //       <Col>
    //         <img
    //           src={API_IMG + poster_path}
    //           alt="Placeholder"
    //           height={200}
    //           width={150}
    //         />
    //       </Col>
    //

    //       <Row>
    //         <h2>Overview</h2>
    //         <h5>{overview}</h5>
    //       </Row>
    //     </Row>
    //     <Col>
    //       <img
    //         src={API_IMG + backdrop_path}
    //         alt="Placeholder"
    //         height={300}
    //         width={300}
    //       />
    //     </Col>
    //   </Row>
    // </div>
  );
}

export default Container;
