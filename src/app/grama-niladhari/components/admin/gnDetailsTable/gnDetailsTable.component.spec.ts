/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GnDetailsTableComponent } from './gnDetailsTable.component';

describe('GnDetailsTableComponent', () => {
  let component: GnDetailsTableComponent;
  let fixture: ComponentFixture<GnDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
