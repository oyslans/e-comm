import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/employee';
import { DataService } from 'src/services/data.service';
import { FirstComponent } from 'src/first-component/first.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit{
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getEmployee();
  }
  mobiles:any
  employee = new Employee();

  // Get employees records
  getEmployee() {
    this.dataService.getAllProducts().subscribe((result) => {
      this.mobiles = result
      console.log(this.mobiles)
    });
  }

  // Used for redirecting pages
  // addItemAndNavigate() {
  //   this.router.navigate(['']);
  // }

  // Insert data to database
  insertData() {
    this.dataService.insertValues(this.employee).subscribe((result) => {
      this.getEmployee();
    });
  }

}
