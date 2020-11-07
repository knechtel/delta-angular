import { Component, NgModule, OnInit } from '@angular/core';
import { Aparelho } from '../models/aparelhos-component';
import { ActivatedRoute } from '@angular/router';
import { AparelhoService } from '../service/aparelho.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
@Component({
  selector: 'app-aparelho-detail',
  templateUrl: './aparelho-detail.component.html',
  styleUrls: ['./aparelho-detail.component.css']
})
export class AparelhoDetailComponent implements OnInit {
  form: FormGroup;
  aparelho = {} as Aparelho;
  prontoCheck: boolean;
  entregueCheck: boolean;
  aparelhoEntregue:boolean =false;
  controleCheckBoxEntregue:boolean =false;

  constructor(private route: ActivatedRoute, private aparelhoService: AparelhoService) { }

  async ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.aparelho.id = id;
    this.aparelho = await this.aparelhoService.getAparelho(this.aparelho).toPromise()

    if (this.aparelho.pronto === this.PRONTO) {
      this.aparelho.pronto = this.PRONTO
      this.prontoCheck = true;
    } else {
      this.aparelho.pronto = this.NAO_PRONTO
      this.prontoCheck = false;
    }
    if (this.aparelho.entregue === this.ENTRGUE) {
      this.aparelho.entregue = this.ENTRGUE
      this.entregueCheck = true;
    } else {
      this.aparelho.entregue = this.NAO_ENTRGUE
      this.entregueCheck = false;
    }
    if (this.aparelho.entregue === this.ENTRGUE) {
      this.aparelhoEntregue = true
      this.controleCheckBoxEntregue = true;
    }else{
      this.aparelhoEntregue=false;
      this.controleCheckBoxEntregue=false
    }

    this.form = new FormGroup({

      nome: new FormControl(''),
      modelo: new FormControl(''),
      serial: new FormControl(''),
      defeito_obs: new FormControl(''),
      email: new FormControl(''),
      pronto: new FormControl(this.prontoCheck),
      valor: new FormControl(''),
      entregue: new FormControl(this.entregueCheck)
    })

    console.log("valor a visualizar - > "+this.controleCheckBoxEntregue);
  }

  async doEdit(form1: NgModule) {

    this.aparelho = await this.aparelhoService.postAparelho(this.aparelho).toPromise()
    alert("Aparelho editado com sucesso! - >" + this.aparelho.pronto + " valor de aparelho entregue " + this.aparelho.entregue)
  }
  eventCheckEntregue(event) {
    if (event.checked) {
      this.aparelho.entregue = this.ENTRGUE
      this.entregueCheck = true;
    } else {
      this.aparelho.entregue = this.NAO_ENTRGUE
      this.entregueCheck = false;
    }
  }
  eventCheckPronto(event) {
    if (event.checked) {
      this.aparelho.pronto = this.PRONTO
      this.prontoCheck = true;
    } else {
      this.aparelho.pronto = this.NAO_PRONTO
      this.prontoCheck = false;
    }
  }


  private NAO_ENTRGUE = 'NAO_ENTRGUE'
  private ENTRGUE = 'ENTREGUE'
  private PRONTO = 'PRONTO'
  private NAO_PRONTO = 'NAO_PRONTO'
}
