import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AlertModule } from 'ng2-bootstrap';
import { FilterPipe } from './shared/filter.pipe';
import {Ng2PaginationModule} from 'ng2-pagination';
import { FooterComponent } from './shared/footer/footer.component';



// DECORADOR para cargar los componentes 
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FilterPipe,
    FooterComponent
    // MyNewComponentComponent,
    // SharedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2PaginationModule,
    
    AlertModule.forRoot()  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
