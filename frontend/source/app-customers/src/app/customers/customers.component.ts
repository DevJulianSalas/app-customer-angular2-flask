import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';


//


// se crea un componente que sirve para mostrar los clientes
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [DataService]
})


//OnInit cuando el componente se inicia se ejcuta lo de abaoj
export class CustomersComponent implements OnInit {
  array_users:string[] = ["Julian", "Ricardo", "Daniel"]; 
  values:string;
  private customers : any;
  mode = 'Observable';
  
  constructor(private dataservice: DataService){}

  // Init, cargar componente antes que el servicio
  ngOnInit(){ this.getCustomers();}

  /*Get customers from file json*/  
  getCustomers(){
    this.dataservice.fetchCustomers()
                    .subscribe(data => this.customers=data)
  }
  

  onKey(event:any){
    this.values = event.target.value;
    if (this.array_users.some(elem => elem == this.values)){
      alert("Usuario encontrado" + this.values)
    }
    else{
      this.values="None"
    }
    
  }
}