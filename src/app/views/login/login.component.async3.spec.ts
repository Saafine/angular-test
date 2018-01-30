import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component (async 3): Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement; // reference to element

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance; // get an actual instance of the component, AuthService injected automatically
    authService = TestBed.get(AuthService);
    el = fixture.debugElement.query(By.css('a'));
  });

  /**
   * fakeAsync keeps track off all pending promises in its body
   * Drawbacks: doesnt track xhr/http requests
   */
  it('Button label', fakeAsync(() => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    const spy = spyOn(authService, 'asyncIsAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();

    // block execution of code until all promises all resolved
    tick();

    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  }));
});

