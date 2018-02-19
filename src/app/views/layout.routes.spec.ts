import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login/login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { layoutRoutes } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(layoutRoutes), FormsModule, ReactiveFormsModule],
      declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(LayoutComponent);
    router.initialNavigation();
  });

  // it('navigate to "" redirects you to /login', fakeAsync(() => {
  //   router.navigate(['/login']);
  //   tick();
  //   expect(location.path()).toBe('/login');
  // }));

  it('navigate to "login" takes you to /inscription', () => {
    router.navigate(['login']).then(() => {
      expect(location.path()).toBe('/login');
    });
  });
});
