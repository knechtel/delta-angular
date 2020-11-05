import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../models/cliente-component'
import { ClienteService } from '../service/cliente.service';
import { Aparelho } from '../models/aparelhos-component';
import { AparelhoService } from '../service/aparelho.service';
import { ClienteForm } from '../models/cliente-form-component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-os-detail',
  templateUrl: './list-os-detail.component.html',
  styleUrls: ['./list-os-detail.component.css']
})
export class ListOsDetailComponent implements OnInit {
  cliente :Cliente;
  clientelist:Cliente[]
  aparelho= {} as Aparelho[]
  clienteForm= {}as ClienteForm;
  constructor(private route: ActivatedRoute,
              private clienteService:ClienteService,
              private aparelhoService:AparelhoService,
              private router: Router) { }

  ngOnInit(): void {
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.get().subscribe(res=>{
    this.clientelist = res;
    this.cliente=this.clientelist.find(cliente => cliente.id === id);
    console.log("valor de id"+id);
    this.clienteForm.id=this.cliente.id
    this.aparelhoService.getAparelhosByCliente(this.clienteForm).subscribe(res=>{
      this.aparelho=res;
      
    });

    

 })

  }

  navegateToMain  = function (){
  
    console.log("aqui aqui aqui .....");
  //  this.router.navigateByUrl('list');
   //return "../../list";
  }
  

}
