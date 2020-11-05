import { Component, NgModule, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente-component';
import { Aparelho } from '../models/aparelhos-component';
import { ClienteService } from '../service/cliente.service';
import { FormGroup, FormControl,NgForm  } from '@angular/forms';
@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {
  cliente = {} as Cliente;
  clientelist:Cliente[]
  aparelho= {} as Aparelho[]
  form1: FormGroup;
  link = true
  flagId = 0;
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.form1 = new FormGroup({
      nome: new FormControl(''),
      endereco: new FormControl(''),
      email: new FormControl(''),
      cpf: new FormControl(''),
      telefone: new FormControl('')
    })

  }


  async doCreate(form1:NgModule){
    this.cliente = await this.clienteService.postCliente(this.cliente).toPromise();
    if(this.cliente.id>0){
        this.link=false;
        alert("Insira um aparelho para ordem de serviço")
    }
  }

}
