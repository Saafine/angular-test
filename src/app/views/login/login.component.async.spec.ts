import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component (async 1): Login', () => {
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

  it('Button label', (done) => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    const spy = spyOn(authService, 'asyncIsAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();

    /**
     * Handling async spies
     */
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      done();
    });
  });
});

