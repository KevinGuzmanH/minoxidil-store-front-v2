import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarPwdFinalComponent } from './recuperar-pwd-final.component';

describe('RecuperarPwdFinalComponent', () => {
  let component: RecuperarPwdFinalComponent;
  let fixture: ComponentFixture<RecuperarPwdFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarPwdFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarPwdFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
