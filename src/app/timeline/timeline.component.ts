import { Component, OnInit } from '@angular/core';

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
    var currentHour = 18/* now.getHours(); */
    var currentMinute = 0/* now.getMinutes() */;
    var timeDifference = currentHour - 8;
    
    
    var newPosition = ((timeDifference % 12) * 60) + currentMinute ; 
    var teste = timeDifference%12
    console.log(newPosition, teste)

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
  /* console.log(newPosition); */

 if(reservation && titleReserved){
  reservation.style.top = newPosition + 'px';
  titleReserved.innerText = `${currentHour}:${currentMinute} - teste`
 }
  
}

  createOptions() {
    this.rooms.forEach((item, index)=>{
      var selectBox = document.getElementById('selectRooms')
      var options = document.createElement('option')
      options.innerText = 'Sala '+item
      options.value = `${index}`
      selectBox?.appendChild(options)
    })
}

  ngOnInit(): void {
    this.moveStyledSelector() 
    this.createOptions()
    setInterval(this.moveStyledSelector,1000)
    setInterval(this.moveStyledReserved, 1000)
  }
}


