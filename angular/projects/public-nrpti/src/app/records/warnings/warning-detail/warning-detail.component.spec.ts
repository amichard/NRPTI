import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WarningDetailComponent } from './warning-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub } from '../../../../../../common/src/app/spec/spec-utils';
import { GlobalModule } from 'nrpti-angular-components';
import { CommonModule } from '../../../../../../common/src/app/common.module';
import { ProjectLinkPipe } from '../../../pipes/project-link.pipe';

describe('WarningDetailComponent', () => {
  let component: WarningDetailComponent;
  let fixture: ComponentFixture<WarningDetailComponent>;

  const activedRouteStub = new ActivatedRouteStub();
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [GlobalModule, HttpClientTestingModule, CommonModule],
      declarations: [WarningDetailComponent, ProjectLinkPipe],
      providers: [
        { provide: ActivatedRoute, useValue: activedRouteStub },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
