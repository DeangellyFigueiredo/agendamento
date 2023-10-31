import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';
  @Input() buttonEnabled: boolean = true;
  @Input() display = false;

  onReservar() {
    this.displayService.displayChange.emit(true);
  }

  constructor(private displayService: DisplayService) {}

  ngOnInit(): void {
    this.display = this.displayService.display;
  }
}
