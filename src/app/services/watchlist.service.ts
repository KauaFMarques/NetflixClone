import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../type/movie.model';

const STORAGE_KEY = 'watchlist';

@Injectable({ providedIn: 'root' })
export class WatchlistService {

  private items$ = new BehaviorSubject<Movie[]>(this.load());

  // Observable que qualquer página pode assinar
  readonly watchlist$ = this.items$.asObservable();

  // ─── Leitura ───────────────────────────────────────────────────────────────

  getAll(): Movie[] {
    return this.items$.getValue();
  }

  has(movieId: number): boolean {
    return this.items$.getValue().some(m => m.id === movieId);
  }

  // ─── Escrita ───────────────────────────────────────────────────────────────

  toggle(movie: Movie): boolean {
    const current = this.items$.getValue();
    const exists  = current.some(m => m.id === movie.id);
    const updated = exists
      ? current.filter(m => m.id !== movie.id)
      : [movie, ...current];
    this.save(updated);
    return !exists; // retorna true se foi adicionado
  }

  add(movie: Movie): void {
    if (!this.has(movie.id)) {
      const updated = [movie, ...this.items$.getValue()];
      this.save(updated);
    }
  }

  remove(movieId: number): void {
    const updated = this.items$.getValue().filter(m => m.id !== movieId);
    this.save(updated);
  }

  clear(): void {
    this.save([]);
  }

  // ─── localStorage ──────────────────────────────────────────────────────────

  private load(): Movie[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private save(movies: Movie[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
      this.items$.next(movies);
    } catch (e) {
      console.error('WatchlistService: erro ao salvar', e);
    }
  }
}
