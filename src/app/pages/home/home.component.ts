import { MovieService } from 'src/app/services/movie.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = []
  public movieSlidshow: Movie[] = []
  private currentPage = 1
  private loadingMovies = false

  constructor(private peliculaService: MovieService, private navService: NavbarService, private router: Router) { }


  ngOnInit(): void {
    this.peliculaService.getCartelera()
      .subscribe(peliculas => {
        this.movies = peliculas.results
        this.movieSlidshow = peliculas.results.slice(0, 10)
      }, e => console.log(e))
    this.navService.onFilter.on("filter", (data: string) => {
      this.filter(data)
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.loadingMovies) { return }
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)
    if (pos > max) {
      this.loadingMovies = true
      this.currentPage += 1
      this.peliculaService.getCartelera(this.currentPage)
        .subscribe(peliculas => {
          this.movies.push(...peliculas.results)
          this.loadingMovies = false
        }, e => console.log(e))
    }
  }

  filter(filtro: string) {
    this.currentPage = 1
    this.loadingMovies = true
    this.peliculaService.search(filtro, this.currentPage)
      .subscribe(peliculas => {
        this.movies = peliculas.results
        this.loadingMovies = false
      }, e => console.log(e))
  }

  goMovie(movie: Movie) {
    this.router.navigate(['movie', movie.id])
  }



}
