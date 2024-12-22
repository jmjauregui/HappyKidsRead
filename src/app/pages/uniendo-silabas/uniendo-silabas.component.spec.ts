import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniendoSilabasComponent } from './uniendo-silabas.component';

describe('UniendoSilabasComponent', () => {
  let component: UniendoSilabasComponent;
  let fixture: ComponentFixture<UniendoSilabasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniendoSilabasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniendoSilabasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
