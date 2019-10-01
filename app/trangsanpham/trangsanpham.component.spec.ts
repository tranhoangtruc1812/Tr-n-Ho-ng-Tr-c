import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangsanphamComponent } from './trangsanpham.component';

describe('TrangsanphamComponent', () => {
  let component: TrangsanphamComponent;
  let fixture: ComponentFixture<TrangsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
