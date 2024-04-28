import { Component, OnInit } from '@angular/core';
import { CafeService } from '../../services/cafe.service';
import { Cafe } from '../../models/cafe.model';

@Component({
  selector: 'app-listar-cafes',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css']
})
export class ListarCafesComponent implements OnInit {
  cafes: Cafe[] = [];

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes: Cafe[]) => {
      this.cafes = cafes;
    });
  }
}
