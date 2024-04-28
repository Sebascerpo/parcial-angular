// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';
import { ListarCafesComponent } from './components/listar-cafe/listar-cafe.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListarCafesComponent,RouterLink
     // Añade routingComponents aquí en lugar de ListarCafesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
