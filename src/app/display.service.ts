import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  display = true;
  constructor() {}

  onClick() {
    this.display = !this.display;
  }

  displayChange = new EventEmitter<boolean>();
}
