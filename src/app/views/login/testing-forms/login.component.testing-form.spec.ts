import { LoginComponent, User } from '../login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

describe('Login: Testing forms', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent],
      providers: [AuthService]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();

    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // email.setValue('test');
    // errors = email.errors || {};
    // expect(errors['pattern']).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('123456789');
    expect(component.form.valid).toBeTruthy();

    let user: User;
    component.loggedIn.subscribe(value => user = value);

    component.login('test', 'test');
    expect(user.email).toBe('test@test.com');
    expect(user.password).toBe('123456789');

  });

});
