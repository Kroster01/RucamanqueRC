import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationJugadorComponent } from './navigation.component';

describe('NavigationJugadorComponent', () => {
  let component: NavigationJugadorComponent;
  let fixture: ComponentFixture<NavigationJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
