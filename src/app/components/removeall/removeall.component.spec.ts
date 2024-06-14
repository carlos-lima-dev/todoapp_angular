import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveallComponent } from './removeall.component';

describe('RemoveallComponent', () => {
  let component: RemoveallComponent;
  let fixture: ComponentFixture<RemoveallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
