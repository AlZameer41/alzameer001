import { BrowserModule } from ; 
import { NgModule } from ;
import { AppRoutingModule , RoutingComponent} from ; 
import { AppComponent } from ; 
import { NewCmpComponent } from ; 
import { ChangeTextDirective } from ; 
import { SqrtPipe } from ; 
import { MyserviceService } from ; 
import { HttpClientModule } from ; 
import { ScrollDispatchModule } from ; 
import { DragDropModule } from ; 
import { FormsModule } from ;

@NgModule({ 
   declarations: [
      SqrtPipe, 
      AppComponent, 
      NewCmpComponent, 
      ChangeTextDirective, 
      RoutingComponent 
   ],
   imports: [ 
      BrowserModule, 
      AppRoutingModule, 
      HttpClientModule, 
      ScrollDispatchModule, 
      DragDropModule, 
      FormsModule 
   ], 
   providers: [MyserviceService], 
   bootstrap: [AppComponent] 
}) 
export class AppModule { }