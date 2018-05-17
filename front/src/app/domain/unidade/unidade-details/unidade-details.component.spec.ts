import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeDetailsComponent } from './unidade-details.component';

describe('UnidadeDetailsComponent', () => {
  let component: UnidadeDetailsComponent;
  let fixture: ComponentFixture<UnidadeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
