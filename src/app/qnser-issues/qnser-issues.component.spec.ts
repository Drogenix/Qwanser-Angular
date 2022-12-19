import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnserIssuesComponent } from './qnser-issues.component';

describe('QnserIssuesComponent', () => {
  let component: QnserIssuesComponent;
  let fixture: ComponentFixture<QnserIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnserIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnserIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
