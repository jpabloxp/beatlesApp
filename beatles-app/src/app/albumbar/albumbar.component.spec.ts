import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumbarComponent } from './albumbar.component';

describe('AlbumbarComponent', () => {
  let component: AlbumbarComponent;
  let fixture: ComponentFixture<AlbumbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
