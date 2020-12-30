import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import Swiper from 'swiper';


@Component({
  selector: 'app-slidshow',
  templateUrl: './slidshow.component.html',
  styleUrls: ['./slidshow.component.css']
})
export class SlidshowComponent implements OnInit, AfterViewInit {
  public mySwiper: Swiper
  @Input() movies: Movie

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', { loop: true })
  }
  onSlicePrev() {
    this.mySwiper.slidePrev()
  }
  onSliceNext() {
    this.mySwiper.slideNext()
  }

  ngOnInit(): void {
  }

}
