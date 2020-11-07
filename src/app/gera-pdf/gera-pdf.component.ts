import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { saveAs } from 'file-saver';
import { FormGroup, FormControl,NgForm  } from '@angular/forms';
@Component({
  selector: 'app-gera-pdf',
  templateUrl: './gera-pdf.component.html',
  styleUrls: ['./gera-pdf.component.css']
})
export class GeraPdfComponent implements OnInit {
  id =0;
  form1: FormGroup;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form1 = new FormGroup({
      id: new FormControl('')}
      )
  }

  doDownload(form1:NgForm){
    var body = new HttpParams();
    body.set('id', '148')
    console.log("chama funcao = "+this.id)
  var mediaType = 'application/pdf';
  var params = {id:this.id};
    this.http.post("http://ec2-18-231-107-181.sa-east-1.compute.amazonaws.com:8080/geraRelatorio?"+"id="+this.id,{body}, { responseType: 'blob' }).subscribe(
        (response) => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'test.pdf');
        },
        
    );
  }
}
