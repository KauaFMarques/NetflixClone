import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../type/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  heroMovie: Movie | null = null;
  popular: Movie[]    = [];
  topRated: Movie[]   = [];
  nowPlaying: Movie[] = [];
  trending: Movie[]   = [];
  imageBase = 'https://image.tmdb.org/t/p';
  loading = true;

  constructor(private tmdb: TmdbService, private router: Router) {}

  ngOnInit() { this.loadAll(); }

  loadAll() {
    this.tmdb.getTrending().subscribe((res: any) => {
      this.trending  = res.results;
      this.heroMovie = res.results[Math.floor(Math.random() * 5)];
    });
    this.tmdb.getPopular().subscribe((res: any) => {
      this.popular = res.results;
      this.loading = false;
    });
    this.tmdb.getTopRated().subscribe((res: any) => { this.topRated = res.results; });
    this.tmdb.getNowPlaying().subscribe((res: any) => { this.nowPlaying = res.results; });
  }

  abrirDetalhe(id: number) {
    this.router.navigate(['/tabs/home/detail', id]);
  }

  getPoster(path: string, size = 'w342') {
    if (!path) return 'assets/img/placeholder.jpg';
    return `${this.imageBase}/${size}${path}`;
  }
  getBackdrop(path: string) {
    if (!path) return '';
    return `${this.imageBase}/w780${path}`;
  }
  getStars(vote: number): string {
    const stars = Math.round(vote / 2);
    return '★'.repeat(stars) + '☆'.repeat(5 - stars);
  }
}