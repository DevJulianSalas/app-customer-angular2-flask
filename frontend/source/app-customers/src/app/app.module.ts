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
import { ModalComponent } from './shared/modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';






// DECORADOR para cargar los componentes 
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FilterPipe,
    FooterComponent,
    ModalComponent,
    
    
    // MyNewComponentComponent,
    // SharedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2PaginationModule,
    BootstrapModalModule,
    NgbModule.forRoot(),
    AlertModule.forRoot()  
  ],
  entryComponents:[ModalComponent],  // sirve para añadir dinamicamente componentes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
