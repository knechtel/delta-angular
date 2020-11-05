import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingOsComponent } from './listing-os/listing-os.component';
import { ListOsDetailComponent } from './list-os-detail/list-os-detail.component';
import { ListAparelhoDetailComponent } from './list-aparelho-detail/list-aparelho-detail.component';
import { AparelhoDetailComponent } from './aparelho-detail/aparelho-detail.component';
import { AparelhoNewComponent } from './aparelho-new/aparelho-new.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { GeraPdfComponent } from './gera-pdf/gera-pdf.component';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    ListingOsComponent,
    ListOsDetailComponent,
    ListAparelhoDetailComponent,
    AparelhoDetailComponent,
    AparelhoNewComponent,
    NavBarComponent,
    AdicionarClienteComponent,
    GeraPdfComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
