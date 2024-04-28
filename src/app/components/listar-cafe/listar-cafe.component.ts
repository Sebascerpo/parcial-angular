import { Component, OnInit } from '@angular/core';
import { CafeService } from '../../services/cafe.service';
import { Cafe } from '../../models/cafe.model';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-listar-cafes',
  standalone:true,
  imports:[CommonModule,TableModule],
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css']
})
export class ListarCafesComponent implements OnInit {
  cafes: Cafe[] = [];
  cantidadOrigen: number = 0;
  cantidadBlend: number = 0;

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes: Cafe[]) => {
      this.cafes = cafes;
      // Calcular cantidad de cafés de origen y cafés blend
      this.cantidadOrigen = this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
      this.cantidadBlend = this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
    });
  }
}
