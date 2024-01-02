import { Injectable } from '@angular/core';
import { DataService } from 'src/services/data.service';


@Injectable({
  providedIn: 'root',
})
export class RemoveEmployeeService {
  constructor(private newService:DataService){}

    removeValue(id: any) {
    this.newService.deleteValue(id).subscribe((result) => {
      
    });
  }


}
