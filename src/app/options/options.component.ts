import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent {
  display = false;
  status = 'LIVRE';
  currentTime = '11:00';
  currentDate = '11 de outubro de 2023';
  nextSchedule = '11 de outubro de 2023 | 14:00';
}
