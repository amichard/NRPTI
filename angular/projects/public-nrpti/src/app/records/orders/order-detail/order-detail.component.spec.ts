import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrderDetailComponent } from './order-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub } from '../../../../../../common/src/app/spec/spec-utils';
import { GlobalModule } from 'nrpti-angular-components';
import { CommonModule } from '../../../../../../common/src/app/common.module';
import { ProjectLinkPipe } from '../../../pipes/project-link.pipe';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;

  const activedRouteStub = new ActivatedRouteStub();
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        GlobalModule,
        CommonModule,
        HttpClientTestingModule
      ],
      declarations: [OrderDetailComponent, ProjectLinkPipe],
      providers: [
        { provide: ActivatedRoute, useValue: activedRouteStub },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
