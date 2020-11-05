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
  constructor(private route: ActivatedRoute,private aparelhoService:AparelhoService) { }

  ngOnInit(): void {
    this.form1 = new FormGroup({
      
      nome: new FormControl(''),      
      modelo: new FormControl(''),
      serial: new FormControl(''),
      defeito_obs: new FormControl(''),
      email: new FormControl(''),
    })
    const id =Number(this.route.snapshot.paramMap.get('id'))
    this.aparelho.id = id;
    this.aparelhoService.getAparelho(this.aparelho).subscribe( res =>{
      this.aparelho = res;
    })
  }

  doEdit(form1:NgModule){
    this.aparelhoService.postAparelho(this.aparelho).subscribe(
     res=> {this.aparelho=res}
    )
    alert("Aparelho editado com sucesso!")
  }

}
