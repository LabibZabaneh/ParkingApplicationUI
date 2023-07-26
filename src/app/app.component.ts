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
  constructor (private parkingLotService: DataServiceService){}

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
}
