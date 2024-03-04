/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GilgameshComponent } from './gilgamesh.component';

describe('GilgameshComponent', () => {
  let component: GilgameshComponent;
  let fixture: ComponentFixture<GilgameshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GilgameshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GilgameshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
