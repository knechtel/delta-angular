import { Component, OnInit } from '@angular/core';
import { Cliente} from '../models/cliente-component'
import { ClienteService} from '../service/cliente.service' 

@Component({
  selector: 'app-listing-os',
  templateUrl: './listing-os.component.html',
  styleUrls: ['./listing-os.component.css']
})
export class ListingOsComponent implements OnInit {
  clienteList:Cliente[];
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.get().subscribe(res =>{
      this.clienteList = res;
      console.log(res)
    })
  }

}
