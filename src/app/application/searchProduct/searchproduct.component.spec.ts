import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductComponent } from './searchproduct.component';

describe('ProductListComponent', () => {
  let component: SearchProductComponent;
  let fixture: ComponentFixture<SearchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
