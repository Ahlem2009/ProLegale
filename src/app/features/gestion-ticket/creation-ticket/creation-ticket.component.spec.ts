import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTicketComponent } from './creation-ticket.component';

describe('CreationTicketComponent', () => {
  let component: CreationTicketComponent;
  let fixture: ComponentFixture<CreationTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
