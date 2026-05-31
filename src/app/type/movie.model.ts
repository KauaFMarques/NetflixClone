export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}