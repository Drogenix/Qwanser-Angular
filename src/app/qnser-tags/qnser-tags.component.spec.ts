import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnserTagsComponent } from './qnser-tags.component';

describe('QnserTagsComponent', () => {
  let component: QnserTagsComponent;
  let fixture: ComponentFixture<QnserTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnserTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnserTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
