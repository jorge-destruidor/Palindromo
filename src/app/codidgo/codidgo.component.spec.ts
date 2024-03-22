import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodidgoComponent } from './codidgo.component';

describe('CodidgoComponent', () => {
  let component: CodidgoComponent;
  let fixture: ComponentFixture<CodidgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodidgoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodidgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
