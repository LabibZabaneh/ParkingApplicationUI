import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  getParkingData() :Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}`)
  }

  addParkingData(id: string, name: string, carNumber: string, startDate:string, endDate: string) :Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/addParking/${id}//${name}/${carNumber}/${startDate}/${endDate}`)
  }

  deleteParkingData(id :string) :Observable<any[]>{
    return this.http.delete<any[]>(`${this.baseUrl}/deleteParking/${id}`)
  }

  editParkingData(oldId :string, newId: string, name: string, carNumber: string, startDate:string, endDate: string) :Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/editParking/${newId}//${name}/${carNumber}/${startDate}/${endDate}`)
  }
}
