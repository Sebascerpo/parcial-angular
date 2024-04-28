import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListarCafesComponent } from './components/listar-cafe/listar-cafe.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule,ListarCafesComponent,RouterOutlet,HttpClientModule,FooterComponent,TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial-angular';
}
