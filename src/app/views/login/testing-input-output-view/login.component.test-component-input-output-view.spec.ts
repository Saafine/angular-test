import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginComponent, User } from '../login.component';
import { AuthService } from '../../../services/auth.service';


/**
 * Testing Login component: input(), output() and view
 */
describe('Component: Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(() => {
    /**
     * Bootstrapping component
     */
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    /**
     * Element references
     */
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });

  /**
   * Testing Input()
   */
  xit('Setting enabled to false disables submit button', () => {
    component.enabled = false;
    fixture.detectChanges(); // run change detection
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  /**
   * Testing Output()
   */
  xit('Entering email and password emits loggedIn event', () => {
    let user: User;

    loginEl.nativeElement.value = 'test@example.com';
    passwordEl.nativeElement.value = '123456';

    /**
     * Event emitter (component.loggedIn) is an observable we can subscribe to
     */
    component.loggedIn.subscribe(value => user = value);

    /**
     * Trigger click event
     */
    submitEl.triggerEventHandler('click', null);


    expect(user.email).toBe('test@example.com');
    expect(user.password).toBe('123456');
  });
});

