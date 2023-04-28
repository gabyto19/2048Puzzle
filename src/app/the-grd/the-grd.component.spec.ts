import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGrdComponent } from './the-grd.component';

describe('TheGrdComponent', () => {
  let component: TheGrdComponent;
  let fixture: ComponentFixture<TheGrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheGrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheGrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
