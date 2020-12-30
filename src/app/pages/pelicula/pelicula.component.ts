import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoMovie, Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  movie: InfoMovie

  constructor(private movieService: MovieService, private routerActive: ActivatedRoute) { }


  ngOnInit(): void {
    const { id } = this.routerActive.snapshot.params
    this.movieService.byId(id).subscribe(data => {
      this.movie = data
    }, e => console.log(e))
  }

}
