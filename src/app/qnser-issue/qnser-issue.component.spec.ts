import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnserIssueComponent } from './qnser-issue.component';

describe('QnserIssueComponent', () => {
  let component: QnserIssueComponent;
  let fixture: ComponentFixture<QnserIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnserIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnserIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
