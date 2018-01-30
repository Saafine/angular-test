import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

describe('Component (unisolated test): Login', () => {
  let component: LoginComponent;
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('token');
    service = null;
    component = null;
  });

  it('needsLogin returns false when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('needsLogin returns true when the user is authenticated', () => {
    localStorage.setItem('token', '1234');
    expect(component.needsLogin()).toBeFalsy();
  });
});
