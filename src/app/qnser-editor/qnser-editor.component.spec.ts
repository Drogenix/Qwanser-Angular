import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnserEditorComponent } from './qnser-editor.component';

describe('QnserEditorComponent', () => {
  let component: QnserEditorComponent;
  let fixture: ComponentFixture<QnserEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnserEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnserEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
