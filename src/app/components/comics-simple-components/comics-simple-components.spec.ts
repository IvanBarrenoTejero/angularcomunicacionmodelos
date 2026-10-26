import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsSimpleComponents } from './comics-simple-components';

describe('ComicsSimpleComponents', () => {
  let component: ComicsSimpleComponents;
  let fixture: ComponentFixture<ComicsSimpleComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsSimpleComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsSimpleComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
