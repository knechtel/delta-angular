import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOsDetailComponent } from './list-os-detail/list-os-detail.component';
import { ListingOsComponent} from './listing-os/listing-os.component'
import { ListAparelhoDetailComponent } from "./list-aparelho-detail/list-aparelho-detail.component"
import { AparelhoDetailComponent } from './aparelho-detail/aparelho-detail.component';
import { AparelhoNewComponent } from './aparelho-new/aparelho-new.component';
import { AparelhoService } from './service/aparelho.service';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { GeraPdfComponent } from './gera-pdf/gera-pdf.component';

const routes: Routes = [
  {path:'list',component:ListingOsComponent,pathMatch:'full' },
  {path:'adicionarCliente', component:AdicionarClienteComponent, pathMatch:'full'},
  {path:'geraPdf', component:GeraPdfComponent, pathMatch:'full'},
  {path:'os-detail/:id', component:ListOsDetailComponent},
  {path:'aparelho/:id', component:AparelhoDetailComponent },
  {path:'aparelho-new/:id', component:AparelhoNewComponent ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
