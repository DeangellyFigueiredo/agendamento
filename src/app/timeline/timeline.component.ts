import { Component, OnInit } from '@angular/core';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit{
  rooms = ['Tambaqui', 'Jaraqui', 'Candiru'];
  
  moveStyledSelector() {
    var styledSelector = document.getElementById('styledSelector');
    var circleOfHours = document.getElementById('circleOfHours')
    var now = new Date();
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    var timeDifference = currentHour - 8;
    
    var newPosition = ((timeDifference % 12) * 60) + currentMinute ; 

    if(styledSelector && circleOfHours){
      styledSelector.style.top = newPosition + 'px';
      circleOfHours.innerText = `${currentHour}:${currentMinute}`
    }
}
  moveStyledReserved () {
  var reservation = document.getElementById('StyledReserved')
  var titleReserved = document.getElementById('titleReserved')
  var currentHour = 9;
  var currentMinute = 0;
  var timeDifference = currentHour - 8;


  var newPosition = ((timeDifference % 12) * 60) + currentMinute; // Obtém o resto da divisão por 12 para as horas e adiciona os minutos

 if(reservation && titleReserved){
  reservation.style.top = newPosition + 'px';
  titleReserved.innerText = `${currentHour}:${currentMinute} - teste`
 }
  
}

  createOptionsSelect() {
    this.rooms.forEach((item, index)=>{
      var selectBox = document.getElementById('selectRooms')
      var options = document.createElement('option')
      options.innerText = 'Sala '+item
      options.value = `${index}`
      selectBox?.appendChild(options)
    })
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
    this.createOptionsSelect()
    this.calendar()
    setInterval(this.moveStyledSelector,1000)
    setInterval(this.moveStyledReserved, 1000)
  }
}


