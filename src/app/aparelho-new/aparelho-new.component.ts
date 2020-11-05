import { Component, OnInit } from '@angular/core';
import { Aparelho } from '../models/aparelhos-component';
import { ActivatedRoute } from '@angular/router';
import { AparelhoService } from '../service/aparelho.service'
import { FormGroup, FormControl,NgForm  } from '@angular/forms';
@Component({
  selector: 'app-aparelho-new',
  templateUrl: './aparelho-new.component.html',
  styleUrls: ['./aparelho-new.component.css']
})
export class AparelhoNewComponent implements OnInit {
  aparelho={} as Aparelho;
  form1: FormGroup;
  prontoCheck = false
  constructor(private route: ActivatedRoute,private aparelhoService:AparelhoService) { }

  ngOnInit(): void {
 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.aparelho.idCliente =id;
    this.form1 = new FormGroup({
      nome: new FormControl(''),
      modelo: new FormControl(''),
      serial: new FormControl(''),
      obs: new FormControl(''),
      valor: new FormControl(''),
      defeito_obs:new FormControl(''),
      prontoCheck:new FormControl('')
    })

  }
  doSave(form1:NgForm){
    if(this.prontoCheck.valueOf)
      this.aparelho.pronto=  'PRONTO'
    else 
      this.aparelho.pronto=  'NAO_PRONTO'
    this.aparelhoService.postAparelho(this.aparelho).subscribe(()=>{

    });
    this.aparelho.nome='';
    this.aparelho.modelo='';
    this.aparelho.serial='';
    this.aparelho.defeito_obs='';
    this.aparelho.valor=0;
    this.prontoCheck= false
  }

}
