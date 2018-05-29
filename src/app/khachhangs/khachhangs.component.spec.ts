import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangsComponent } from './khachhangs.component';

describe('KhachhangsComponent', () => {
  let component: KhachhangsComponent;
  let fixture: ComponentFixture<KhachhangsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhachhangsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachhangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
