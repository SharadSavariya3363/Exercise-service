import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  inputArray:any = [];
  displayDataEntryFields:any;

  dataEntryForm:FormGroup;


  constructor(private dataService : DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataEntryForm = new FormGroup({    //form validation 
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'address': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
    })
  }

  onSubmit(){    //function push data(inputFields) into an array and sends to dataService
    this.inputArray.push(this.dataEntryForm.value);   //push data into an array
    this.dataService.setData(this.inputArray);    //send data to the dataService
    this.router.navigate(['/data-display'])   //navigate to data-display page 
  }
  
}
