import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnOnboardingComponent } from './gn-onboarding.component';

describe('GnOnboardingComponent', () => {
  let component: GnOnboardingComponent;
  let fixture: ComponentFixture<GnOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GnOnboardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GnOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
