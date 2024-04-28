import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarCafesComponent } from './listar-cafe.component';
import { CafeService } from '../../services/cafe.service';
import { of } from 'rxjs';

describe('ListarCafesComponent', () => {
  let component: ListarCafesComponent;
  let fixture: ComponentFixture<ListarCafesComponent>;
  let cafeServiceSpy: jasmine.SpyObj<CafeService>;

  beforeEach(async () => {
    cafeServiceSpy = jasmine.createSpyObj('CafeService', ['getCafes']);

    await TestBed.configureTestingModule({
      declarations: [], // No declares el componente aquí
      providers: [
        { provide: CafeService, useValue: cafeServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch 3 cafes and display them in the table', () => {
    const mockCafes = [
      { nombre: 'Café 1', tipo: 'Café de Origen', region: 'Region 1' },
      { nombre: 'Café 2', tipo: 'Blend', region: 'Region 2' },
      { nombre: 'Café 3', tipo: 'Café de Origen', region: 'Region 3' },
    ];

    cafeServiceSpy.getCafes.and.returnValue(of(mockCafes));

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const tableRows = compiled.querySelectorAll('tbody tr');

    expect(tableRows.length).toBe(3); // Verifica que hay 3 filas en la tabla
  });
});
