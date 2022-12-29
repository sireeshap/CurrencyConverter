import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurToGbpComponent } from './eur-to-gbp.component';

describe('EurToGbpComponent', () => {
  let component: EurToGbpComponent;
  let fixture: ComponentFixture<EurToGbpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EurToGbpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EurToGbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
