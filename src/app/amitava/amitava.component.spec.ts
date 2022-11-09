import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmitavaComponent } from './amitava.component';

describe('AmitavaComponent', () => {
  let component: AmitavaComponent;
  let fixture: ComponentFixture<AmitavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmitavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmitavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
