import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailteamComponent } from './detailteam.component';

describe('DetailteamComponent', () => {
  let component: DetailteamComponent;
  let fixture: ComponentFixture<DetailteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
