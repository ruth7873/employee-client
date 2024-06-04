import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import { ConfigService } from "./services/config.service";
import { provideRouter } from "@angular/router";
import { provideClientHydration } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";
import { AppService } from "./app.service";


export function initializeConfig(configService: ConfigService) {
  return () => configService.loadConfig();
}
export const appConfig: ApplicationConfig = {
  providers: [ConfigService, 
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      deps: [ConfigService],
      multi: true,
    },
    provideRouter(routes), provideClientHydration(), provideAnimations(), provideHttpClient(), AppService]
};