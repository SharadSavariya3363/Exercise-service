import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  entryData:any
  
  setData(data: any){    //get data from data-entry page
    this.entryData = data;
  }

  getData(){    //return data of data-entry page
    return this.entryData;
  }
  
}
