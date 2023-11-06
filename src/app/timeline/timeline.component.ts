import { Component, OnInit } from '@angular/core';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit{
  rooms = ['Tambaqui', 'Jaraqui', 'Candiru'];
  reservations = [
    { name: 'Rserva 01',startHour:'8:0', endHour: '9:0' },
    { name: 'Rserva 02',startHour:'14:0', endHour: '14:0' },
  ]
  
  moveStyledSelector() {
    var styledSelector = document.getElementById('styledSelector');
    var circleOfHours = document.getElementById('circleOfHours');
    var selectorOfHours = document.getElementById('selectorOfHours')

    var now = new Date();
    var currentHour = now.getHours() ;
    var currentMinute = now.getMinutes();
    var totalMinutes = (currentHour - 8) * 60 + currentMinute +12;
    var validTime = currentHour <19 && currentHour >= 8
    
    var pixelsPerHour = 675 / 11; 
    var newPosition = (totalMinutes / 60) * pixelsPerHour;
    
    if(validTime && styledSelector && circleOfHours){
      styledSelector.style.top = newPosition + 'px';
      circleOfHours.innerText = `${currentHour}:${currentMinute}`;
    }else if(styledSelector && circleOfHours && selectorOfHours){
      styledSelector.style.display = 'hidden' 
      selectorOfHours.style.display = 'none'
      circleOfHours.style.width = '95%'
      circleOfHours.innerText = 'O período de reservas é de 8h até as 18h'
    }
  }

  moveStyledReserved() {
    var teste = [
      { name: 'Rserva 01',startHour:'8:0', endHour: '9:0' },
      { name: 'Rserva 02',startHour:'14:0', endHour: '14:59' },
    ]
    if(teste?.length > 0){
    teste.forEach((item, idx)=> {
    var reservation = document.getElementById(`${idx}`);
    var titleReserved = document.getElementById(`${idx}`);
    var startTime = item.startHour.split(':')
    var finisheTime = item.endHour.split(':')
    var startHour = Number(startTime[0]);
    var startMinute = Number(startTime[1]);
    var endHour = Number(finisheTime[0]);
    var endMinute = Number(finisheTime[1]);
    var startTotalMinutes = (startHour - 8) * 60 + startMinute + 15; 
    var endTotalMinutes = (endHour - 8) * 60 + endMinute + 15;
    
    var pixelsPerHour = 685 / 11;
    
    var newPosition = (startTotalMinutes / 60) * pixelsPerHour;
    var reservationHeight = ((endTotalMinutes - startTotalMinutes) / 60) * pixelsPerHour;
    
    if (reservation && titleReserved) {
        reservation.style.top = newPosition + 'px';
        reservation.style.height = reservationHeight + 'px';
        titleReserved.innerText = `${startHour}:${startMinute} até ${endHour}:${endMinute} - ${item.name}`;
    }
    })
  }
}
  calendar() {
    var monhts = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
    var DaysoftheWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    var day = document.getElementById('Day')
    var DayoftheWeek = document.getElementById('DayoftheWeek')
    var month = document.getElementById('month')
    var addDay = document.getElementById('addDay')
    var addMonth = document.getElementById('addMonth')
    var reduceMonth = document.getElementById('reduceMonth')
    var reduceDay = document.getElementById('reduceDay')
    var date = new Date()
    var newDay = date.getDate()
    var newMonths = monhts[date.getMonth()]
    var newDayWeek = DaysoftheWeek[date.getDay()]

    if(day && month && DayoftheWeek){
      day.innerText = `${newDay}`
      month.innerText = `${newMonths}`
      DayoftheWeek.innerText = `${newDayWeek}.`
    }

    function changeDay(key: number) {
      var day = document.getElementById('Day');
      var DayoftheWeek = document.getElementById('DayoftheWeek');
      var month = document.getElementById('month')
    
      var value = Number(day?.textContent);
      var monthValue = monhts.indexOf(`${month?.textContent}`);
      var yearValue = new Date().getFullYear();
      var NewDate = new Date(yearValue, monthValue, value);
      var date = addDays(NewDate, key);
      var newDayweek = DaysoftheWeek[date.getDay()];
      var newMonth = monhts[date.getMonth()]
    
      if (day && DayoftheWeek && month) {
        var newDay = date.getDate();
        day.innerText = `${newDay}`;
        DayoftheWeek.innerText = `${newDayweek}.`;
        month.innerText = `${newMonth}`
      }
    }

    function changeMonths(key:number){
      var month = document.getElementById('month');
      var day = document.getElementById('Day');
      var DayoftheWeek = document.getElementById('DayoftheWeek');

      var yearValue = new Date().getFullYear();
      
      var monthValue = monhts.indexOf(`${month?.textContent}`);
      
      var newMonthIndex = (monthValue + key) % 12;
      if (newMonthIndex < 0) {
        newMonthIndex += 12;
      }
      
      var newMonth = monhts[newMonthIndex];
      var newDate = new Date(yearValue, newMonthIndex, Number(day?.textContent) )
    
      if (month && DayoftheWeek) {
        month.innerText = `${newMonth}`;
        DayoftheWeek.innerText = `${DaysoftheWeek[newDate.getDay()]}.`
      }
    }

    if(addDay && reduceDay){
      addDay.addEventListener('click', ()=>changeDay(1));
      reduceDay.addEventListener('click', ()=> changeDay(-1))
    }
    if(addMonth && reduceMonth){
      addMonth.addEventListener('click',()=>changeMonths(1))
      reduceMonth.addEventListener('click', ()=> changeMonths(-1))
    }

  }

  ngOnInit(): void {
    this.moveStyledSelector()
    this.moveStyledReserved() 
    this.calendar()
    setInterval(this.moveStyledSelector,1000)
    setInterval(this.moveStyledReserved, 1000)
  }
}


