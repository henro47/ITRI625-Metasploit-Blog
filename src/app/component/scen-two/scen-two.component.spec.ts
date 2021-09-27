import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenTwoComponent } from './scen-two.component';

describe('ScenTwoComponent', () => {
  let component: ScenTwoComponent;
  let fixture: ComponentFixture<ScenTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
