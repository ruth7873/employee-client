import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Config;
  constructor(private http: HttpClient) {
    this.loadConfig();
  }
  loadConfig() {
    this.http.get('./assets/config.json').subscribe((config :any)=> {
      this.config = config;
    })
  }
  get Config() {
    return this.config;
  }
}
export interface Config {
  apiUrl: string
}