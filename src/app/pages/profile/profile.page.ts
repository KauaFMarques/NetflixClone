import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WatchlistService } from '../../services/watchlist.service';
import { Movie } from '../../type/movie.model';

const PROFILE_KEY = 'user_profile';

interface UserProfile {
  name: string;
  avatarIndex: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit, OnDestroy {

  readonly imageBase = 'https://image.tmdb.org/t/p';

  // ─── Perfil ───────────────────────────────────────────────────────────────
  profile: UserProfile = { name: 'Visitante', avatarIndex: 0 };
  isEditing = false;
  editName  = '';

  // Avatares: emojis como "foto" — simples e sem dependência externa
  avatars = ['🎬','🎮','🎭','🦁','🐉','👾','🤖','🧙','🦸','🎃'];

  // ─── Watchlist ────────────────────────────────────────────────────────────
  watchlist: Movie[] = [];
  private sub!: Subscription;

  constructor(
    private watchlistService: WatchlistService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProfile();
    this.sub = this.watchlistService.watchlist$.subscribe(
      list => this.watchlist = list
    );
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  // ─── Perfil: edição ───────────────────────────────────────────────────────

  private loadProfile() {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (raw) this.profile = JSON.parse(raw);
    } catch {}
  }

  private saveProfile() {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile));
  }

  startEdit() {
    this.editName  = this.profile.name;
    this.isEditing = true;
  }

  confirmEdit() {
    const trimmed = this.editName.trim();
    if (trimmed) this.profile.name = trimmed;
    this.isEditing = false;
    this.saveProfile();
  }

  cancelEdit() {
    this.isEditing = false;
  }

  selectAvatar(index: number) {
    this.profile.avatarIndex = index;
    this.saveProfile();
  }

  // ─── Watchlist ────────────────────────────────────────────────────────────

  removeFromWatchlist(movieId: number) {
    this.watchlistService.remove(movieId);
  }

  clearWatchlist() {
    this.watchlistService.clear();
  }

  goToDetail(id: number) {
    this.router.navigate(['/tabs/home/detail', id]);
  }

  getPoster(path: string | null | undefined) {
    return path ? `${this.imageBase}/w342${path}` : 'assets/placeholder.png';
  }

  // ─── Stats ────────────────────────────────────────────────────────────────

  get totalMovies() { return this.watchlist.length; }

  get avgRating() {
    if (!this.watchlist.length) return 0;
    const sum = this.watchlist.reduce((a, m) => a + (m.vote_average ?? 0), 0);
    return +(sum / this.watchlist.length).toFixed(1);
  }
}