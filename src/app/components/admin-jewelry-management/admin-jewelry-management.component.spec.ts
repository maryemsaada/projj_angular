import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJewelryManagementComponent } from './admin-jewelry-management.component';

describe('AdminJewelryManagementComponent', () => {
  let component: AdminJewelryManagementComponent;
  let fixture: ComponentFixture<AdminJewelryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminJewelryManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJewelryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
