import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnserHomeComponent } from './qnser-home.component';

describe('QnserHomeComponent', () => {
  let component: QnserHomeComponent;
  let fixture: ComponentFixture<QnserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
