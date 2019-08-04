import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDownloadDialogComponent } from './add-download-dialog.component';

describe('AddDownloadDialogComponent', () => {
  let component: AddDownloadDialogComponent;
  let fixture: ComponentFixture<AddDownloadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDownloadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDownloadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
