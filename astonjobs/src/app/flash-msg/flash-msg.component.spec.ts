import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashMsgComponent } from './flash-msg.component';

describe('FlashMsgComponent', () => {
  let component: FlashMsgComponent;
  let fixture: ComponentFixture<FlashMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
