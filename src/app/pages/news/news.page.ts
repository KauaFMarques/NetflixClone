import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: false
})
export class NewsPage implements OnInit {

  resultados: any[] = [];
  populares: any[]  = [];
  buscando = false;
  semResultados = false;
  imageBase = 'https://image.tmdb.org/t/p';

  constructor(private tmdb: TmdbService, private router: Router) {}

  ngOnInit() {
    // Carrega filmes populares como sugestão inicial
    this.tmdb.getPopular().subscribe((res: any) => {
      this.populares = res.results;
    });
  }

  buscar(evento: any) {
    const termo = evento.target.value?.trim();

    if (!termo || termo.length < 2) {
      this.resultados  = [];
      this.semResultados = false;
      return;
    }

    this.buscando = true;
    this.tmdb.searchMovies(termo).subscribe((res: any) => {
      this.buscando    = false;
      this.resultados  = res.results;
      this.semResultados = res.results.length === 0;
    });
  }

  limpar() {
    this.resultados    = [];
    this.semResultados = false;
  }

  abrirDetalhe(id: number) {
    this.router.navigate(['/tabs/home/detail', id]);
  }

  getPoster(path: string) {
    return path
      ? `${this.imageBase}/w342${path}`
      : 'assets/img/placeholder.jpg';
  }

  getAno(data: string) {
    return data ? data.slice(0, 4) : '—';
  }
}