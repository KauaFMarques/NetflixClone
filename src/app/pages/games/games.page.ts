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

  // IDs de gêneros relevantes no TMDB
  // 12 = Adventure, 28 = Action, 35 = Comedy, 878 = Sci-Fi, 10751 = Family
  // Para filmes com temática de games/esportes eletrônicos usamos:
  // 28 (Action), 12 (Adventure), 878 (Science Fiction), 10751 (Family)
  // + keyword de "video game" (id 10526 no TMDB)

  featuredMovie: Movie | null = null;
  actionMovies: Movie[] = [];
  adventureMovies: Movie[] = [];
  scifiMovies: Movie[] = [];
  familyMovies: Movie[] = [];

  readonly imageBase = 'https://image.tmdb.org/t/p';

  isLoading = true;

  // Gêneros exibidos como chips filtrável
  genres = [
    { id: null,  label: 'Todos' },
    { id: 28,    label: 'Ação' },
    { id: 12,    label: 'Aventura' },
    { id: 878,   label: 'Ficção Científica' },
    { id: 10751, label: 'Família' },
  ];
  activeGenreId: number | null = null;
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
      const [action, adventure, scifi, family] = await Promise.all([
        this.tmdb.getByGenre(28).toPromise(),
        this.tmdb.getByGenre(12).toPromise(),
        this.tmdb.getByGenre(878).toPromise(),
        this.tmdb.getByGenre(10751).toPromise(),
      ]);

      this.actionMovies    = (action    as any)?.results ?? [];
      this.adventureMovies = (adventure as any)?.results ?? [];
      this.scifiMovies     = (scifi     as any)?.results ?? [];
      this.familyMovies    = (family    as any)?.results ?? [];

      // Hero: primeiro item de ação com backdrop
      this.featuredMovie = this.actionMovies.find(m => m.backdrop_path) ?? this.actionMovies[0] ?? null;

      this.applyFilter(null);
    } finally {
      this.isLoading = false;
    }
  }

  applyFilter(genreId: number | null) {
    this.activeGenreId = genreId;
    const all = [
      ...this.actionMovies,
      ...this.adventureMovies,
      ...this.scifiMovies,
      ...this.familyMovies,
    ];
    // Deduplica por id
    const seen = new Set<number>();
    const unique = all.filter(m => {
      if (seen.has(m.id)) return false;
      seen.add(m.id);
      return true;
    });

    if (genreId === null) {
      this.filteredGrid = unique;
    } else {
      this.filteredGrid = unique.filter(m =>
        m.genre_ids?.includes(genreId)
      );
    }
  }

  getPoster(path: string | null | undefined, size = 'w342') {
    return path ? `${this.imageBase}/${size}${path}` : 'assets/placeholder.png';
  }

  getBackdrop(path: string | null | undefined, size = 'w1280') {
    return path ? `${this.imageBase}/${size}${path}` : null;
  }

  getGenreLabel(id: number | null): string {
    return this.genres.find(g => g.id === id)?.label ?? 'Todos os Títulos';
  }

  goToDetail(id: number) {
    this.router.navigate(['/tabs/home/detail', id]);
  }
}