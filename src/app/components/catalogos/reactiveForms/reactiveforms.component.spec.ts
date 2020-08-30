import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForms } from './reactiveforms.component';

describe('CatalogosComponent', () => {
  let component: ReactiveForms;
  let fixture: ComponentFixture<ReactiveForms>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForms ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
