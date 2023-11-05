import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {
  date = new Date()
  selectedHours = ['15min','40min', '30min', '1h', '1:30h', '3h', '2h', '4h']
  monhts = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  status = 'LIVRE';
  currentTime = `${this.date.getHours()}:${this.date.getMinutes()}`;
  currentDate = `${this.date.getDate()} de ${this.monhts[this.date.getMonth()]} de ${this.date.getFullYear()}`;
  nextSchedule = `${this.date.getDate()} de ${this.monhts[this.date.getMonth()]} de ${this.date.getFullYear()} | ${this.date.getHours()}:${this.date.getMinutes()}`;;
  display = false;

  onClick() {
    this.displayService.displayChange.emit(false);
  }

  constructor(private displayService: DisplayService) {
    this.displayService.displayChange.subscribe((value) => {
      this.display = value;
    });
  }

  ngOnInit(): void {
    this.display = this.displayService.display;
  }
  
}
