import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie, MovieResponse, MovieDetail, Video } from '../type/movie.model';

@Injectable({ providedIn: 'root' })
export class TmdbService {

  private base = environment.tmdbBaseUrl;
  private key  = environment.tmdbApiKey;
  private lang = 'language=pt-BR';

  constructor(private http: HttpClient) {}

  private url(path: string, extra = '') {
    return `${this.base}${path}?api_key=${this.key}&${this.lang}${extra}`;
  }

  getPopular(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.url('/movie/popular'));
  }

  getTopRated(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.url('/movie/top_rated'));
  }

  getNowPlaying(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.url('/movie/now_playing'));
  }

  getTrending(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.url('/trending/movie/week'));
  }

  getMovieDetail(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(this.url(`/movie/${id}`));
  }

  getMovieVideos(id: number): Observable<{ results: Video[] }> {
    return this.http.get<{ results: Video[] }>(this.url(`/movie/${id}/videos`));
  }

  searchMovies(query: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      this.url('/search/movie', `&query=${encodeURIComponent(query)}`)
    );
  }

  getByGenre(genreId: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      this.url('/discover/movie', `&with_genres=${genreId}`)
    );
  }
}