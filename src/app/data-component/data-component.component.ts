import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {
  parkingdata!: any[]
  oldParkingId!: string
  parkingId!: string
  name!:string
  carNumber!: string
  startDate!: string
  endDate!: string

  constructor (private parkingLotService: DataServiceService){}

  ngOnInit(): void {
      this.loadParkingdata()
  }
  
  loadParkingdata(){
    this.parkingLotService.getParkingData().subscribe(data => {
      this.parkingdata = data
    })
  }

  openPopup(pakingid :string, name: string, carNumber: string, startDate: string, endDate: string){ 
    this.oldParkingId = pakingid
    this.name = name
    this.carNumber = carNumber
    this.startDate = startDate
    this.endDate = endDate
    const modal = document.getElementById("myModal")
    modal!.style.display = "block"
  }

  closePopup(){
    const modal = document.getElementById("myModal");
    modal!.style.display = "none";
  }


  addParkingData(){
    this.parkingLotService.addParkingData(this.parkingId, this.name, this.carNumber, this.startDate, this.endDate).subscribe((data => {
    this.parkingdata = data
    this.closePopup()
  }))
  }

  deleteParkingData(){
    if(this.oldParkingId === undefined || this.oldParkingId === null){
    } else {
    this.parkingLotService.deleteParkingData(this.oldParkingId).subscribe((data => {
      this.parkingdata = data
    }))
    this.closePopup()
  }
  }

  editParkingData(){
    this.parkingLotService.editParkingData(this.oldParkingId, this.parkingId, this.name, this.carNumber, this.startDate, this.endDate).subscribe ((data => {
      this.parkingdata = data
    }))
    this.closePopup()
  }
}
