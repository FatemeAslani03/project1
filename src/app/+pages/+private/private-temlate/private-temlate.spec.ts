import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTemlate } from './private-temlate';

describe('PrivateTemlate', () => {
  let component: PrivateTemlate;
  let fixture: ComponentFixture<PrivateTemlate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateTemlate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateTemlate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
