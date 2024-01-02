import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFormComponent } from 'src/app/add-form/add-form.component';
import { DataService } from 'src/services/data.service';
import { RemoveEmployeeService } from 'src/services/remove-employee.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  constructor(private dataService: RemoveEmployeeService) {}
  mobiles:any
  @Input() valueFromParent:any

  id: any;



  removeValue(id:any){
    this.dataService.removeValue(id)
  }
}
