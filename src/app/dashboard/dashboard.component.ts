import { Component } from '@angular/core';
import {DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  contentPage = 'dashboard'

  constructor (private parkingLotService: DataServiceService){}

  changeContentPage(page: string): void {
    this.contentPage = page
  }
}
