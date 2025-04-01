import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavvbarComponent } from './navvbar.component';

describe('NavvbarComponent', () => {
  let component: NavvbarComponent;
  let fixture: ComponentFixture<NavvbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavvbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
