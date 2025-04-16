import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStageIngComponent } from './add-stage-ing.component';

describe('AddStageIngComponent', () => {
  let component: AddStageIngComponent;
  let fixture: ComponentFixture<AddStageIngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStageIngComponent]
    });
    fixture = TestBed.createComponent(AddStageIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
