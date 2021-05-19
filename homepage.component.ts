import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  exForm!: FormGroup;
  
  constructor() {
   }

  ngOnInit() {
    this.exForm = new FormGroup({
      "radioGroup" : new FormControl(null, Validators.required)
    });
  
  }

  

}
