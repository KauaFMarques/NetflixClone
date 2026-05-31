import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../type/movie.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
  standalone: false
})
export class GamesPage implements OnInit {

  // ─── Keywords reais do TMDB para filmes de games ──────────────────────────
  // 41645 = "based-on-video-game"  → Sonic, Mortal Kombat, Uncharted, etc.
  // 282   = "video-game"           → filmes com gameplay como tema central
  // 294546= "video-games"          → cultura gamer, documentários, etc.
  // Usamos pipe (|) = OR entre keywords para máximo de resultados

  featuredMovie:    Movie | null = null;
  basedOnGameMovies: Movie[] = [];   // keyword 41645 – adaptações diretas
  videoGameMovies:   Movie[] = [];   // keyword 282   – temática de games
  gameCultureMovies: Movie[] = [];   // keyword 294546 – cultura gamer

  readonly imageBase = 'https://image.tmdb.org/t/p';
  isLoading = true;

  // Chips de sub-categoria
  categories = [
    { key: 'all',     label: 'Todos' },
    { key: 'based',   label: 'Adaptações' },
    { key: 'themed',  label: 'Temática Gamer' },
    { key: 'culture', label: 'Cultura Gamer' },
  ];
  activeCategory = 'all';
  filteredGrid: Movie[] = [];

  constructor(
    private tmdb: TmdbService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.isLoading = true;
    try {
      const [based, themed, culture] = await Promise.all([
        this.tmdb.getByKeywords('41645').toPromise(),
        this.tmdb.getByKeywords('282').toPromise(),
        this.tmdb.getByKeywords('294546').toPromise(),
      ]);

      this.basedOnGameMovies  = (based   as any)?.results ?? [];
      this.videoGameMovies    = (themed  as any)?.results ?? [];
      this.gameCultureMovies  = (culture as any)?.results ?? [];

      // Hero: primeiro item com backdrop entre as adaptações diretas
      this.featuredMovie =
        this.basedOnGameMovies.find(m => m.backdrop_path) ??
        this.basedOnGameMovies[0] ??
        null;

      this.applyFilter('all');
    } finally {
      this.isLoading = false;
    }
  }

  applyFilter(key: string) {
    this.activeCategory = key;

    let source: Movie[];
    switch (key) {
      case 'based':   source = this.basedOnGameMovies;  break;
      case 'themed':  source = this.videoGameMovies;    break;
      case 'culture': source = this.gameCultureMovies;  break;
      default:
        source = [
          ...this.basedOnGameMovies,
          ...this.videoGameMovies,
          ...this.gameCultureMovies,
        ];
    }

    // Deduplica por id
    const seen = new Set<number>();
    this.filteredGrid = source.filter(m => {
      if (seen.has(m.id)) return false;
      seen.add(m.id);
      return true;
    });
  }

  getPoster(path: string | null | undefined, size = 'w342') {
    return path ? `${this.imageBase}/${size}${path}` : 'assets/placeholder.png';
  }

  getBackdrop(path: string | null | undefined, size = 'w1280') {
    return path ? `${this.imageBase}/${size}${path}` : null;
  }

  getCategoryLabel(key: string): string {
    return this.categories.find(c => c.key === key)?.label ?? 'Todos';
  }

  goToDetail(id: number) {
    this.router.navigate(['/tabs/home/detail', id]);
  }
}