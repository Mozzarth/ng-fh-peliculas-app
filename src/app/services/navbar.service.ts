import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  public readonly onFilter: EventEmitter = new EventEmitter()
  constructor() { }

  emit(filter: string) {
    this.onFilter.emit("filter", filter)
  }
}
