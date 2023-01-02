import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherConversionsComponent } from './other-conversions.component';

describe('OtherConversionsComponent', () => {
  let component: OtherConversionsComponent;
  let fixture: ComponentFixture<OtherConversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherConversionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
