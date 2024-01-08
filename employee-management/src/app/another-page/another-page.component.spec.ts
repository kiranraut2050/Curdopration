import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPageComponent } from './another-page.component';

describe('AnotherPageComponent', () => {
  let component: AnotherPageComponent;
  let fixture: ComponentFixture<AnotherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
