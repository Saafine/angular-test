import { LoginComponent } from '../login.component';
import { AuthService } from '../../../services/auth.service';

/**
 * MockedAuthService extends AuthService and overwrites isAuthenticated() method to make it
 * easier to perform isolated tests on login component
 */
class MockedAuthService extends AuthService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('Component (isolated test 2): Login', () => {
  let component: LoginComponent;
  let service: MockedAuthService;

  beforeEach(() => {
    service = new MockedAuthService();

    /**
     * Inject MockAuthService into LoginComponent
     */
    component = new LoginComponent(service, null);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  xit('needsLogin returns false when the user is not authenticated', () => {
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  xit('needsLogin returns true when the user is authenticated', () => {
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });
});

