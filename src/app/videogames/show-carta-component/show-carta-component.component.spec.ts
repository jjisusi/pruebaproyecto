import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCartaComponentComponent } from './show-carta-component.component';

describe('ShowCartaComponentComponent', () => {
  let component: ShowCartaComponentComponent;
  let fixture: ComponentFixture<ShowCartaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCartaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCartaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
