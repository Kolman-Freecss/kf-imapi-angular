import { Injectable, signal } from '@angular/core';
import { of, delay, throwError } from 'rxjs';

/**
 * Service to manage authentication
 * It uses RxJS signals to store the current access token
 * // TODO: Currently uses mock data with RxJS to emulate an API
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  // Reactive signal to store the current token
  private accessToken = signal<string | null>(null);

  // Mock data to simulate users from an API
  private mockUsers = [
    { username: 'user1', password: 'password1', token: 'mockToken1' },
    { username: 'user2', password: 'password2', token: 'mockToken2' },
  ];

  /**
   * Simulates login with credentials
   * @param username Username
   * @param password Password
   * @returns Simulated observable with the token or an error
   */
  login(username: string, password: string) {
    const user = this.mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.accessToken.set(user.token); // Store token in signal
      return of({ token: user.token }).pipe(delay(1000)); // Simulate API response with delay
    } else {
      return throwError(() => new Error('Invalid credentials')).pipe(delay(1000));
    }
  }

  /**
   * Retrieves the current access token
   * @returns The access token or null if unauthenticated
   */
  getAccessToken(): string | null {
    return this.accessToken();
  }

  /**
   * Simulates a logout process
   * @returns Simulated observable for logout
   */
  logout() {
    this.accessToken.set(null); // Clear token
    return of(null).pipe(delay(500)); // Simulate API response with delay
  }

  /**
   * Checks if the user is authenticated
   * @returns `true` if a valid token exists, otherwise `false`
   */
  isAuthenticated(): boolean {
    return !!this.accessToken();
  }
}
