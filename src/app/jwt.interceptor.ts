import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  //Dependency injection at class level
  //constructor dependency injection is not possible in function based interceptors
  // There are three types of dependency injection in Angular
  // 1. Constructor dependency injection
  // 2. Method dependency injection
  // 3. Property dependency injection
  
  const auth = inject(AuthService);  // method dependency injection
  const token = auth.getToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req).pipe(
    tap((event: any) => {
      // Capture token from login API response
      if (event?.body?.token) {
        auth.setToken(event.body.token);
      }
    })
  );
};



//CEO: customer centric approach
//CTO: technology strategy
//CIO: information management


//Solution Architect:

//Solution Provider:
// FullStack Application Developer, Database Administrator, DevOps Engineer
// Quality Assurance Engineer, UI/UX Designer


//Fullstack Application Developer

//dont love your code, love your customer

//Solid Principles

//Single Responsibility Principle
//Open/Closed Principle
//liskov Substitution Principle
//Interface Segregation Principle
//Dependency Inversion Principle

//KISS Principle 
//(Keep It Simple Stupid)

//DRY Principle
//(Don't Repeat Yourself)

//YAGNI Principle
//(You Aren't Gonna Need It)

//Hollywood Principle
//(Don't call us, we'll call you)


//Separation of Concerns
//Dependency Injection


//Responsibility of authenticating user is handled by AuthApi---calling rest api
//Responsibility of managing JWT token is handled by AuthService---dealing with local storage
//Responsibility of adding JWT token to request headers is handled by this interceptor