import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

/**
 * interacting with component's view
 */
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockAuthService extends AuthService {
}

/**
 * Angular Test Bed
 * 1. Allows to test the interaction of a directive or component with it's template
 * 2. Allows to test change detection
 * 3. Allows to test and use Angulars Dependency Injections
 * 4. Allows to test the ngModule configuration we use in our application
 * 5. Allows to test user interaction via click & input fields
 */

describe('Component (testbed 1): Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let componentService: AuthService;
  let el: DebugElement; // reference to element

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    /**
     * Set, add, remove properties available. You can replace, add or remove specific providers.
     * in this example AuthService is replaced with MockAuthService
     */
    TestBed.overrideComponent(LoginComponent, { set: { providers: [{ provide: AuthService, useClass: MockAuthService }] } });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance; // get an actual instance of the component, AuthService injected automatically
    authService = TestBed.get(AuthService);
    componentService = fixture.debugElement.injector.get(AuthService);


    el = fixture.debugElement.query(By.css('a'));
  });

  /**
   * Alternative way of injecting services
   * (@Inject) should work as well
   */
  it('Service injected via inject(...) and TestBed.get(...) should be equal', () => {
    inject([AuthService], (injectService: AuthService) => {
      expect(injectService).toBe(authService);
    });
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', () => {
    inject([AuthService], () => {
      expect(componentService instanceof MockAuthService).toBeTruthy();
    });
  });

  /**
   * Skipped to due replacing original authService
   */
  xit('needsLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  xit('needsLogin returns true when the user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });


  /**
   * This applies to login.component2.html
   */
  // it('login button hidden when the user is authenticated', () => {
  //   expect(el.nativeElement.textContent.trim()).toBe(''); // when the component loads, its shows neither logout nor login
  //   fixture.detectChanges(); // trigger change detection
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');
  //   spyOn(authService, 'isAuthenticated').and.returnValue(true);
  //   fixture.detectChanges();
  //   expect(el.nativeElement.textContent.trim()).toBe('Logout');
  // });
});

