import { LoginComponent } from '../login.component';
import { AuthService } from '../../../services/auth.service';


describe('Component (isolated test 2): Login', () => {
  let component: LoginComponent;
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponent(service, null);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  xit('needsLogin returns false when the user is not authenticated', () => {
    /**
     * Spy on the service's isAuthenticated function, and when its called, return false
     */
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();

    /**
     * Make sure isAuthenticated() was called
     */
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  xit('needsLogin returns true when the user is authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});

