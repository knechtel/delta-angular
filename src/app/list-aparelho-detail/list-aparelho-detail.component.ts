import { Component, OnInit } from '@angular/core';
import { AparelhoService } from '../service/aparelho.service'
import { Aparelho } from '../models/aparelhos-component'

@Component({
  selector: 'app-list-aparelho-detail',
  templateUrl: './list-aparelho-detail.component.html',
  styleUrls: ['./list-aparelho-detail.component.css']
})
export class ListAparelhoDetailComponent implements OnInit {
  listAparelho:Aparelho [];
  constructor(private aparelhoService:AparelhoService) { }

  ngOnInit(): void {
    this.aparelhoService.get().subscribe(res =>{
      this.listAparelho = res;
      console.log(res)
    })
  }

}
