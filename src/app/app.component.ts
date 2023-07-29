import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-new';
  parkingdata!: any[]
  lotId!: string
  name!: string
  carNumber!: string
  startDate!: string
  endDate!: string
  userImage = 'assets/user-3.svg'
  availableImage = 'assets/available-3.svg'
  occupiedImage = 'assets/occupied-3.svg'
  calendarImage = 'assets/calendar-3.svg'
  reportImage = 'assets/report-3.svg'
  contentPage = 'dashboard'
  backgroundColors = ['#7D7463', '#dabb83', '#A8A196', '#dabb83','#A8A196']

  constructor (private parkingLotService: DataServiceService){}

  ngOnInit(): void {
    this.loadParkingdata()
    console.log(this.parkingdata);
    
}

loadParkingdata(){
  this.parkingLotService.getParkingData().subscribe(data => {
    this.parkingdata = data
  })
}

addParkingData(){
   this.parkingLotService.addParkingData(this.lotId, this.name, this.carNumber, this.startDate, this.endDate).subscribe((data => {
    this.parkingdata = data
    console.log(this.parkingdata);
  }))
}

deleteParkingData(){
  if(this.lotId === undefined || this.lotId === null){

  } else {
  this.parkingLotService.deleteParkingData(this.lotId).subscribe((data => {
    this.parkingdata = data
  }))
}
}

getParkingDataLength(){
  return this.parkingdata ? this.parkingdata.length : 0
}

changeUserURL(newURL: string): void {
  this.userImage = newURL;
}

changeAvailableURL(newURL: string): void {
  this.availableImage = newURL;
}

changeOccupiedURL(newURL: string): void {
  this.occupiedImage = newURL;
}

changeCalendarURL(newURL: string): void {
  this.calendarImage = newURL;
}

changeReportURL(newURL: string): void {
  this.reportImage = newURL;
}

changeContentPage(page: string): void {
  this.contentPage = page
}
}
