import { Component, NgModule, OnInit } from '@angular/core';
import { Aparelho } from '../models/aparelhos-component';
import { ActivatedRoute } from '@angular/router';
import { AparelhoService } from '../service/aparelho.service';
import { FormGroup, FormControl,NgForm  } from '@angular/forms';
@Component({
  selector: 'app-aparelho-detail',
  templateUrl: './aparelho-detail.component.html',
  styleUrls: ['./aparelho-detail.component.css']
})
export class AparelhoDetailComponent implements OnInit {
  form1: FormGroup;
  
  aparelho ={} as Aparelho;
  prontoCheck :boolean
  constructor(private route: ActivatedRoute,private aparelhoService:AparelhoService) { }

  async ngOnInit() {
    
    const id =Number(this.route.snapshot.paramMap.get('id'))
    this.aparelho.id = id;
    this.aparelho = await this.aparelhoService.getAparelho(this.aparelho).toPromise()
    console.log("olha aqui -> "+this.aparelho.pronto)
    if(this.aparelho.pronto==='PRONTO'){
      this.prontoCheck = true    
    }else{
      this.aparelho.pronto='NAO_PRONTO'
      this.prontoCheck = false
    }
    this.form1 = new FormGroup({
      
      nome: new FormControl(''),      
      modelo: new FormControl(''),
      serial: new FormControl(''),
      defeito_obs: new FormControl(''),
      email: new FormControl(''),
      pronto:new FormControl(this.prontoCheck)
    })
  }

  async doEdit(form1:NgModule){
    this.prontoCheck=!this.prontoCheck;
    if(this.prontoCheck){
      this.prontoCheck = true    
      this.aparelho.pronto = 'PRONTO'
    }else{
      this.prontoCheck = false
      this.aparelho.pronto = 'NAO_PRONTO'
    }
    this.aparelho = await this.aparelhoService.postAparelho(this.aparelho).toPromise()
    alert("Aparelho editado com sucesso! - >"+this.aparelho.pronto)
  }



}
