import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output('onFilter') filtro: EventEmitter<string> = new EventEmitter()
  constructor(private navService: NavbarService) { }

  ngOnInit(): void {
  }

  buscar(filtro: string) {
    const text = filtro.trim()
    // Desde el template solo se llama cuando este el key.enter y click boton buscar
    // if (text.length > 0) {
    console.log(text)
    this.filtro.emit(text)
    this.navService.emit(text)
    // }
  }
}
