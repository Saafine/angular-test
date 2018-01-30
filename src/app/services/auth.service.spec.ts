import { AuthService } from './auth.service';

/**
 * Testing services
 */
describe('Service: test', () => {
  let service: AuthService;

  /**
   * Create new instance of a service before each test
   */
  beforeEach(() => {
    service = new AuthService();
  });

  /**
   * Clear the instance after each test run
   */
  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });

});