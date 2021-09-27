import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenOneComponent } from './scen-one.component';

describe('ScenOneComponent', () => {
  let component: ScenOneComponent;
  let fixture: ComponentFixture<ScenOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
