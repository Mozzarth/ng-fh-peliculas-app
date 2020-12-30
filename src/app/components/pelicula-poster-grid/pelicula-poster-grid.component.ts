import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-pelicula-poster-grid',
  templateUrl: './pelicula-poster-grid.component.html',
  styleUrls: ['./pelicula-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {
  @Output() onMovie = new EventEmitter<Movie>()
  @Input() movie: Movie
  constructor() { }

  ngOnInit(): void {
  }

  sendMovie() {
    this.onMovie.emit(this.movie)
  }

}
