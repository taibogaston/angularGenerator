import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTableExampleComponent } from './principal-table-example.component';

describe('PrincipalTableExampleComponent', () => {
  let component: PrincipalTableExampleComponent;
  let fixture: ComponentFixture<PrincipalTableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalTableExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
