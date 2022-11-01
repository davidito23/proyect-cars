import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGeneralComponent } from './page-general.component';

describe('PageComponent', () => {
  let component: PageGeneralComponent;
  let fixture: ComponentFixture<PageGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
