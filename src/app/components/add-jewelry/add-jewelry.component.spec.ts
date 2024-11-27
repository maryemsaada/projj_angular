import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJewelryComponent } from './add-jewelry.component';

describe('AddJewelryComponent', () => {
  let component: AddJewelryComponent;
  let fixture: ComponentFixture<AddJewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJewelryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
