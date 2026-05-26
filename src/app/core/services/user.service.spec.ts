import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from '../../../environments/environment';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users and update signal', () => {
    const mockUsers = [{ id: '1', name: 'User Test' }];

    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers as any);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/users`);
    expect(request.request.method).toBe('GET');
    request.flush(mockUsers);

    expect(service.users()).toEqual(mockUsers as any);
  });

  it('should add a user and update signal', () => {
    const newUser = { id: '', name: 'Test', email: 'test@t.com', cpf: '000', phone: '123', phoneType: 'celular' as const };
    const createdUser = { ...newUser, id: '2' };

    service.addUser(newUser).subscribe(user => {
      expect(user).toEqual(createdUser as any);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/users`);
    expect(request.request.method).toBe('POST');
    request.flush(createdUser);

    const users = service.users();
    expect(users.find(u => u.name === 'Test')).toBeDefined();
  });
});
