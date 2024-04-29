import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./css/App.css";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import UpcomingMovies from "./pages/UpcomingMovies";
import ResultsPage from "./pages/ResultsPage";
import SingleMovieDetail from "./pages/SingleMovieDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/movie/:id" element={<SingleMovieDetail />} />
      </Routes>
    </Router>
  );
}
