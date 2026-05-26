import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { signal } from '@angular/core';
import { of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideEnvironmentNgxMask } from 'ngx-mask';

import { AdminLogsComponent } from './admin-logs.component';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';

describe('AdminLogsComponent', () => {
  let component: AdminLogsComponent;
  let fixture: ComponentFixture<AdminLogsComponent>;

  beforeEach(async () => {
    const mockAuthService = {
      currentUser: signal({ id: '1', name: 'Admin', email: 'admin@example.com', role: 'Admin' }),
      hasRole: jest.fn().mockReturnValue(true)
    };

    const mockUserService = {
      getMe: jest.fn().mockReturnValue(of({ id: '1', name: 'Admin', email: 'admin@example.com' })),
      getPlatformUsers: jest.fn().mockReturnValue(of([])),
      updateMe: jest.fn().mockReturnValue(of({}))
    };

    await TestBed.configureTestingModule({
      imports: [AdminLogsComponent, TranslateModule.forRoot(), NoopAnimationsModule],
      providers: [
        { provide: HttpClient, useValue: { get: jest.fn().mockReturnValue(of([])) } },
        { provide: Router, useValue: { navigate: jest.fn() } },
        { provide: MatDialog, useValue: { open: jest.fn().mockReturnValue({ afterClosed: () => of(false) }) } },
        { provide: MatSnackBar, useValue: { open: jest.fn() } },
        { provide: AuthService, useValue: mockAuthService },
        { provide: UserService, useValue: mockUserService },
        provideEnvironmentNgxMask()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
