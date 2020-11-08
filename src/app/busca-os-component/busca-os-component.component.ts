import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { FormGroup, FormControl,NgForm  } from '@angular/forms';
@Component({
  selector: 'app-busca-os-component',
  templateUrl: './busca-os-component.component.html',
  styleUrls: ['./busca-os-component.component.css']
})
export class BuscaOsComponentComponent implements OnInit {
  form1: FormGroup;
  id:number;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.form1 = new FormGroup({
      id: new FormControl('')}
      )
  }

  go(){
    this.route.navigate(['/os-detail/'+this.id]); 
  
  }
  
}
