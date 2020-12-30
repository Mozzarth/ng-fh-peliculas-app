import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlidshowComponent } from './slidshow/slidshow.component';
import { PeliculasPosterGridComponent } from './pelicula-poster-grid/pelicula-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavbarComponent, SlidshowComponent, PeliculasPosterGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
    FormsModule
  ],
  exports: [NavbarComponent, SlidshowComponent, PeliculasPosterGridComponent]
})
export class ComponentsModule { }
