import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { title } from "process";

const movieData: any = [
  {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    rank: 4,
  },
  {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    imdbID: "tt2975590",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    rank: 1,
  },
  {
    Title: "Batman",
    Year: "1989",
    imdbID: "tt0096895",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    rank: 5,
  },
  {
    Title: "Batman Returns",
    Year: "1992",
    imdbID: "tt0103776",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    rank: 4,
  },
  {
    Title: "Batman Forever",
    Year: "1995",
    imdbID: "tt0112462",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rank: 4,
  },
  {
    Title: "Batman & Robin",
    Year: "1997",
    imdbID: "tt0118688",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
    rank: 4,
  },
  {
    Title: "The Lego Batman Movie",
    Year: "2017",
    imdbID: "tt4116284",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    rank: 4,
  },
  {
    Title: "Batman: The Animated Series",
    Year: "1992–1995",
    imdbID: "tt0103359",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjFiNzk3NzctY2E0OS00NTVkLThlMDUtODVlNmRmZWI1ZjMzXkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_SX300.jpg",
    rank: 4,
  },
  {
    Title: "Batman: Under the Red Hood",
    Year: "2010",
    imdbID: "tt1569923",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    rank: 5,
  },
  {
    Title: "Batman: The Dark Knight Returns, Part 1",
    Year: "2012",
    imdbID: "tt2313197",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
    rank: 4,
  },
];

function App() {
  return (
    <div>
      <ALLMOVIES movies={movieData} />
    </div>
  );
}
interface MoviesData {
  movies: any;
}

function ALLMOVIES(props: MoviesData): any {
  const { movies } = props;
  const moviesCard = (
    <div>
      {movies.map((singleMovie: any): any => (
        <CREATESINGLECARD
          Title={singleMovie.Title}
          Year={singleMovie.Year}
          Poster={singleMovie.Poster}
          Rank={singleMovie.rank}
          Imdb={singleMovie.imdbID}
        />
      ))}
    </div>
  );

  return moviesCard;
}

interface CreateCard {
  Title: string;
  Year: string;
  Poster: string;
  Rank: any;
  Imdb: string;
}
function CREATESINGLECARD(props: CreateCard) {
  const { Title, Year, Poster, Rank, Imdb } = props;

  return (
    <div className="card" style={{ width: "18rem", display: "inline-block" }}>
      <img className="card-img-top" src={Poster} alt="Card image cap"></img>

      <div className="card-body">
        <h5 className="card-title">Name:{Title}</h5>
        <p>Year Created:{Year}</p>
        <p className="card-text">
          <React.Fragment>{rank(Rank)}</React.Fragment>
        </p>
        <a
          href={`https://www.imdb.com/title/${Imdb}`}
          className="btn btn-primary"
        >
          Visit On IMDB
        </a>
      </div>
    </div>
  );
}

interface RankNumber {
  rankNumber: number;
}

function rank(numberofStars: RankNumber): any {
  const { rankNumber } = numberofStars;
  switch (rankNumber) {
    case 1:
      return "⭐";

    case 2:
      return "⭐⭐";

    case 3:
      return "⭐⭐⭐";
    case 4:
      return "⭐⭐⭐⭐";
    case 5:
      return "⭐⭐⭐⭐⭐";
  }
}
export default App;
