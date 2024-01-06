import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramaNiladhariComponent } from './grama-niladhari.component';

describe('GramaNiladhariComponent', () => {
  let component: GramaNiladhariComponent;
  let fixture: ComponentFixture<GramaNiladhariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GramaNiladhariComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GramaNiladhariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
