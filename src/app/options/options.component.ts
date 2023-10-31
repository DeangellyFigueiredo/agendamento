import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {
  selectedHours = ['15min','40min', '30min', '1h', '1:30h', '3h', '2h', '4h']
  status = 'LIVRE';
  currentTime = '11:00';
  currentDate = '11 de outubro de 2023';
  nextSchedule = '11 de outubro de 2023 | 14:00';
  display = false;

  createCheckbox() {
    var checkboxContainer = document.getElementById('Options');

    this.selectedHours.forEach((hour)=> {
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = hour;
      checkbox.id = hour; 
  
      var label = document.createElement("label");
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(hour));

      if(checkboxContainer){
        checkboxContainer.appendChild(label);
      }
  });

  }

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
    this.createCheckbox()
  }
}
