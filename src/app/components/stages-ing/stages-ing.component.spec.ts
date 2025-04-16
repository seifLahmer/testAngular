import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesIngComponent } from './stages-ing.component';

describe('StagesIngComponent', () => {
  let component: StagesIngComponent;
  let fixture: ComponentFixture<StagesIngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagesIngComponent]
    });
    fixture = TestBed.createComponent(StagesIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
