import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateobserverComponent } from './createobserver.component';

describe('CreateobserverComponent', () => {
  let component: CreateobserverComponent;
  let fixture: ComponentFixture<CreateobserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateobserverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateobserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
