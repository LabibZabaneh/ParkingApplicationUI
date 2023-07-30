import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  userImage = 'assets/users.svg'
  availableImage = 'assets/available.svg'
  occupiedImage = 'assets/occupied.svg'
  calendarImage = 'assets/calendar.svg'
  reportImage = 'assets/report.svg'
  contentPage = 'dashboard'

  constructor (private parkingLotService: DataServiceService){}
  
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
