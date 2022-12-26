import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpContentComponent } from './pdp-content.component';

describe('PdpContentComponent', () => {
  let component: PdpContentComponent;
  let fixture: ComponentFixture<PdpContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
