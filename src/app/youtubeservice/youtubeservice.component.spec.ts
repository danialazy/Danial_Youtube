import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeserviceComponent } from './youtubeservice.component';

describe('YoutubeserviceComponent', () => {
  let component: YoutubeserviceComponent;
  let fixture: ComponentFixture<YoutubeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
