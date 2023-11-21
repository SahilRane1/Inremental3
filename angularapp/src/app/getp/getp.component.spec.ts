import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpComponent } from './getp.component';

describe('GetpComponent', () => {
  let component: GetpComponent;
  let fixture: ComponentFixture<GetpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
