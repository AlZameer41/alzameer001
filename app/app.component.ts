import { Component } from '@angular/core'; 
import { MyserviceService } from './myservice.service';

@Component({ 
   selector: 'app-root', 
   templateUrl: './app.component.html', 
   styleUrls: ['./app.component.css']
})
export class AppComponent { 
   title = 'Angular 7 Project!'; 
   constructor(private myservice: MyserviceService) { } 
   ngOnInit() { } 
   onClickSubmit(data) {
      alert("Entered Email id : " + data.emailid); 
   }
}