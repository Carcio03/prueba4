import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMasonryModule } from 'ngx-masonry';

describe('MasonrryComponent', () => {
  let component: NgxMasonryModule;
  let fixture: ComponentFixture<NgxMasonryModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMasonryModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMasonryModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
