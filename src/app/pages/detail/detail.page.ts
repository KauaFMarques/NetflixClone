import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TmdbService } from '../../services/tmdb.service';
import { WatchlistService } from '../../services/watchlist.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage implements OnInit {

  movie: any = null;
  trailer: any = null;
  imageBase = 'https://image.tmdb.org/t/p';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private tmdb: TmdbService,
    private watchlist: WatchlistService 
  ) {}

  toggleWatchlist() {
    if (this.movie) {
      this.watchlist.toggle(this.movie);
    }
  }
  
  // Getter de conveniência para o template:
  get isInWatchlist(): boolean {
    return this.movie ? this.watchlist.has(this.movie.id) : false;
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tmdb.getMovieDetail(id).subscribe((movie: any) => {
      this.movie = movie;
      this.loading = false;
    });
    this.tmdb.getMovieVideos(id).subscribe((res: any) => {
      this.trailer = res.results.find(
        (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
      );
    });
  }

  getBackdrop(path: string) {
    return path ? `${this.imageBase}/w780${path}` : '';
  }

  getPoster(path: string) {
    return path ? `${this.imageBase}/w342${path}` : '';
  }

  abrirTrailer() {
    if (this.trailer) {
      window.open(`https://www.youtube.com/watch?v=${this.trailer.key}`, '_blank');
    }
  }

  voltar() { this.navCtrl.back(); }
}