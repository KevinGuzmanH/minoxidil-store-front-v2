import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailToConfirmComponent } from './send-email-to-confirm.component';

describe('SendEmailToConfirmComponent', () => {
  let component: SendEmailToConfirmComponent;
  let fixture: ComponentFixture<SendEmailToConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendEmailToConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailToConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
