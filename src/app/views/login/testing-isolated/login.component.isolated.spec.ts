import { LoginComponent } from '../login.component';

class MockedAuthService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('Component (isolated test): Login', () => {
  let component: LoginComponent;
  let service;

  beforeEach(() => {
    service = new MockedAuthService();
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

