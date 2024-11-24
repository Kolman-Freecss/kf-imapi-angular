import { Injectable, inject, signal } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const CONFIG_STATE = makeStateKey<Record<string, any>>('app-config');

@Injectable({ providedIn: 'root' })
export class CacheService {
  private transferState = inject(TransferState);

  // Reactive signal for configuration state
  private configSignal = signal<Record<string, any>>({});

  constructor() {
    // Hydration: Restore state if available
    const cachedConfig = this.transferState.get(CONFIG_STATE, null);
    if (cachedConfig) {
      this.configSignal.set(cachedConfig);
    }
  }

  getConfig(key: string): any {
    return this.configSignal()[key];
  }

  setConfig(key: string, value: any): void {
    const currentConfig = this.configSignal();
    this.configSignal.set({ ...currentConfig, [key]: value });

    // Actualizar el TransferState para que persista
    this.transferState.set(CONFIG_STATE, this.configSignal());
  }

  getAllConfig(): Record<string, any> {
    return this.configSignal();
  }

  clearConfig(): void {
    this.configSignal.set({});
    this.transferState.remove(CONFIG_STATE);
  }
}
