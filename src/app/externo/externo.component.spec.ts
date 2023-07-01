import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternoComponent } from './externo.component';

describe('ExternoComponent', () => {
  let component: ExternoComponent;
  let fixture: ComponentFixture<ExternoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternoComponent]
    });
    fixture = TestBed.createComponent(ExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
