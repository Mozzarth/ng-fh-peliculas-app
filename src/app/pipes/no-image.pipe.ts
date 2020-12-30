import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImageMovieDb'
})
export class NoImagePipe implements PipeTransform {

  transform(path: string): unknown {
    const pathImage = "https://image.tmdb.org/t/p/w500"
    if (path) { return pathImage + path }
    return './assets/no-image.jpg';
  }

}
