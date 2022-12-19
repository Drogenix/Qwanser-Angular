import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnserUserComponent } from './qnser-user.component';

describe('QnserUserComponent', () => {
  let component: QnserUserComponent;
  let fixture: ComponentFixture<QnserUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnserUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnserUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
