import {  Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  displayData:any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.displayData =  this.dataService.getData();   //fetch data from dataService
    // console.log(this.displayData);
    
  }

}
