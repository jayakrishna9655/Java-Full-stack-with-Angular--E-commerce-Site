import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductComponent } from './pruduct.component';

describe('PruductComponent', () => {
  let component: PruductComponent;
  let fixture: ComponentFixture<PruductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
