import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbuminfoComponent } from './albuminfo.component';

describe('AlbuminfoComponent', () => {
  let component: AlbuminfoComponent;
  let fixture: ComponentFixture<AlbuminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbuminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbuminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
