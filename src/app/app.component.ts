import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-new';
  parkingData!: any[]
  lotId!: string
  name!: string
  startDate!: string
  endDate!: string
  userImage = 'assets/user-0.svg'
  availableImage = 'assets/available-0.svg'
  occupiedImage = 'assets/occupied-0.svg'
  calendarImage = 'assets/calendar-0.svg'
  reportImage = 'assets/report-0.svg'
  contentPage = 'occupied'
  backgroundColors = ['#7D7463', '#dabb83', '#A8A196']
  insertParkingId! : string
  insertName!: string
  insertStartDate!: string
  insertEndDate!: string
  selectedId!: string
  selectedName!: string
  selectedStartDate!: string
  selectedEndDate!: string
  selectedPhone!: string
  selectedEmail!: string
  selectedCarBrand!: string
  selectedCarNumber!: string
  selectedBackgroundColor!: string
  tempId!: string
  tempName!: string
  tempStartDate!: string
  tempEndDate!: string


  constructor (private parkingLotService: DataServiceService){}

  ngOnInit(): void {
    this.loadParkingdata()
  }

loadParkingdata(){
  this.parkingLotService.getParkingData().subscribe(data => {
    this.parkingData = data
  })
}

addParkingData(){
   this.parkingLotService.addParkingData(this.insertParkingId, this.insertName, '123', this.insertStartDate, this.insertEndDate).subscribe((data => {
    this.parkingData = data
     this.closePopup("occupied-insert-Modal")
  }))
}

deleteParkingData(){
  if(this.lotId === undefined || this.lotId === null){

  } else {
  this.parkingLotService.deleteParkingData(this.lotId).subscribe((data => {
    this.parkingData = data
  }))
}
}

getParkingDataLength(){
  return this.parkingData ? this.parkingData.length : 0
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

openInsertPopup(modalName: string){
  const modal = document.getElementById(modalName)
  modal!.style.display = "flex";
}

  openViewPopup(modalName: string, id: string, name: string, startDate: string, endDate: string, color: number, phone: string, email: string, carBrand: string, carNumber: string){
    this.selectedId = id
    this.selectedName = name
    this.selectedStartDate = startDate
    this.selectedEndDate = endDate
    this.selectedPhone = phone
    this.selectedEmail = email
    this.selectedCarBrand = carBrand
    this.selectedCarNumber = carNumber
    this.selectedBackgroundColor = this.backgroundColors[color]
    const modal = document.getElementById(modalName)
    modal!.style.display = "block"
    this.tempId = this.selectedId
    this.tempName = this.selectedName
    this.tempStartDate = this.selectedStartDate
    this.tempEndDate = this.selectedEndDate
  }

closePopup(modelName: string){
  const modal = document.getElementById(modelName);
  modal!.style.display = "none";
}

applyEditPopup(){
  this.selectedId = this.tempId;
  this.selectedName = this.tempName;
  this.selectedStartDate = this.tempStartDate;
  this.selectedEndDate = this.tempEndDate
  this.tempId = '';
  this.tempName = '';
  this.tempStartDate = '';
  this.tempEndDate = '';
  this.closePopup('occupied-edit-Modal')
}
}
