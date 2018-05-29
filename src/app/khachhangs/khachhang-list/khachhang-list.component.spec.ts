import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangListComponent } from './khachhang-list.component';

describe('KhachhangListComponent', () => {
  let component: KhachhangListComponent;
  let fixture: ComponentFixture<KhachhangListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhachhangListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachhangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
