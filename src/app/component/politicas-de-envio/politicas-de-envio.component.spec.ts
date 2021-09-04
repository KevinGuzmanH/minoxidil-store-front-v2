import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasDeEnvioComponent } from './politicas-de-envio.component';

describe('PoliticasDeEnvioComponent', () => {
  let component: PoliticasDeEnvioComponent;
  let fixture: ComponentFixture<PoliticasDeEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasDeEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasDeEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
