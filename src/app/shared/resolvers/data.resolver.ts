import {ResolveFn} from '@angular/router';

export const dataResolver: ResolveFn<boolean> = (route, state) => {
  // Here we can perform any asynchronous logic, like fetching data from a service
  return true; // This can be an Observable, Promise, or just a boolean value
};
