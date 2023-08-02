import { Component } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent {
  parkingdata!: any[]
  insertParkingId!: string
  insertName!: string
  insertStartDate!: string
  insertEndDate!: string
  insertPhone!: string
  insertEmail!: string
  insertCarBrand!: string
  insertCarNumber!: string

  constructor (private parkingLotService: DataServiceService){}

  addParkingData() {
    this.parkingLotService.addParkingData(this.insertParkingId, this.insertName, this.insertCarNumber, this.insertStartDate, this.insertEndDate, this.insertPhone, this.insertEmail, this.insertCarBrand).subscribe(data => {
      this.parkingdata = data
    })
  }

  openInsertPopup(modalName: string){
    const modal = document.getElementById(modalName)
    modal!.style.display = "flex";
  }

  openViewPopup(){}

  openEditPopup(){}

  closePopup(modelName: string){
    const modal = document.getElementById(modelName);
    modal!.style.display = "none";
    this.insertParkingId =''
    this.insertName = ''
    this.insertStartDate = ''
    this.insertEndDate = ''
    this.insertPhone = ''
    this.insertCarBrand = ''
    this.insertEmail = ''
    this.insertCarNumber = ''
  }
}
