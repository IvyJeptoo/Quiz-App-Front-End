import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultschoicesComponent } from './resultschoices.component';

describe('ResultschoicesComponent', () => {
  let component: ResultschoicesComponent;
  let fixture: ComponentFixture<ResultschoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultschoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultschoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
