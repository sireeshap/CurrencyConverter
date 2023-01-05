import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurToUsdComponent } from './eur-to-usd.component';

describe('EurToUsdComponent', () => {
  let component: EurToUsdComponent;
  let fixture: ComponentFixture<EurToUsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EurToUsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EurToUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
