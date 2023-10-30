import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {
  status = 'LIVRE';
  currentTime = '11:00';
  currentDate = '11 de outubro de 2023';
  nextSchedule = '11 de outubro de 2023 | 14:00';
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
