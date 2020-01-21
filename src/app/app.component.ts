import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weekday';
  sumDay = '';
  day = 0;
  sumYear = 0;
  month = 0;
  monthCharacter = '';
  monthArray = [
                { month : '01' , value : 1 },
                { month : '02' , value : 2 },
                { month : '03' , value : 3 },
                { month : '04' , value : 4 },
                { month : '05' , value : 5 },
                { month : '06' , value : 6 },
                { month : '07' , value : 7 },
                { month : '08' , value : 8 },
                { month : '09' , value : 9 },
                { month : '10' , value : 10 },
                { month : '11' , value : 11},
                { month : '12' , value : 12 },
              ];
  monthCharacterArray = [
                {month : 1 , value : 'Jan' },
                {month : 2 , value : 'Feb' },
                {month : 3 , value : 'March'},
                {month : 4 , value : 'Apr'},
                {month : 5 , value : 'May'},
                {month : 6 , value : 'June'},
                {month : 7 , value : 'July'},
                {month : 8 , value : 'Aug'},
                {month : 9 , value : 'Sep'},
                {month : 10 , value : 'Oct'},
                {month : 11 , value : 'Nov'},
                {month : 12 , value : 'Dec'},
                ]
  countYear = 0;

  getDayinYear(year) {
    if (year % 4 === 0 && ((year % 100 !== 0) || (year % 400 === 0))) {
      this.day += 366;
    } else {
      this.day += 365;
    }
  }

  getDayinyearSelected(year, monthSelected, daySelected) {
    if (year % 4 === 0 && ((year % 100 !== 0) || (year % 400 === 0))) {
      for (var month = 1; month <= monthSelected; month++) {
        if (month === monthSelected) {
          this.day += daySelected;
        } else {
          this.getMonthInLeapYear(month);
        }
      }
    } else {
      for (var month = 1; month <= monthSelected; month++) {
        if (month === monthSelected) {
          this.day += daySelected;
        } else {
          this.getmonthInYear(month);
        }
      }
    }
  }


  getMonthInLeapYear(month){
    switch (month) {
      case 1:
        this.day += 31;
        break;
      case 2:
        this.day += 29;
        break;
      case 3:
        this.day += 31;
        break;
      case 4:
        this.day += 30;
        break;
      case 5:
        this.day += 31;
        break;
      case 6:
        this.day += 30;
        break;
      case 7:
        this.day += 31;
        break;
      case 8:
        this.day += 31;
        break;
      case 9:
        this.day += 30;
        break;
      case 10:
        this.day += 31;
        break;
      case 11:
        this.day += 30;
        break;
      case 12:
        this.day += 31;
        break;
    }
  }

  getmonthInYear(month){
    switch (month) {
      case 1:
        this.day += 31;
        break;
      case 2:
        this.day += 28;
        break;
      case 3:
        this.day += 31;
        break;
      case 4:
        this.day += 30;
        break;
      case 5:
        this.day += 31;
        break;
      case 6:
        this.day += 30;
        break;
      case 7:
        this.day += 31;
        break;
      case 8:
        this.day += 31;
        break;
      case 9:
        this.day += 30;
        break;
      case 10:
        this.day += 31;
        break;
      case 11:
        this.day += 30;
        break;
      case 12:
        this.day += 31;
        break;
    }
  }

  findDate(date) {
    const dateArray = date.split('-');
    this.monthArray.map(rs=>{
      if(dateArray[1] === rs.month){
        this.month = rs.value;
      }
    })
    for (var year = 1900; year <= +dateArray[0]; year++) {
      if (year === +dateArray[0]) {
        this.getDayinyearSelected(year, +this.month, +dateArray[2]);
      } else {
        this.getDayinYear(year);
      }
    }
    this.monthCharacterArray.map(rs=>{
      if(this.month === rs.month){
        this.monthCharacter = rs.value;
      }
    })
    
    switch (this.day%7) {
      case 0:
        this.sumDay = `${this.monthCharacter} , ${dateArray[2]}, ${dateArray[0]} is Sunday`;
        break;
      case 1:
        this.sumDay = `${this.monthCharacter} , ${dateArray[2]}, ${dateArray[0]} is MonDay`;
        break;
      case 2:
        this.sumDay = `${this.monthCharacter} , ${dateArray[2]}, ${dateArray[0]} is ThuesDay`;
        break;
      case 3:
        this.sumDay = `${this.monthCharacter} , ${dateArray[2]}, ${dateArray[0]} is WednesDay`;
        break;
      case 4:
        this.sumDay = `${this.monthCharacter} , ${dateArray[2]}, ${dateArray[0]} is ThursDay`;
        break;
      case 5:
        this.sumDay = `${this.monthCharacter} , ${dateArray[2]}, ${dateArray[0]} is FriDay`;
        break;
      case 6:
        this.sumDay = `${this.monthCharacter} , ${dateArray[2]}, ${dateArray[0]} is SaturDay`;
        break;
    }
    this.sumYear = 0;
    this.day = 0;

    // console.log(date);
  }
}
