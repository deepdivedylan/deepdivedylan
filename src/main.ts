import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {enableProdMode} from '@angular/core';

if(process.env.ENV === "live") {
	enableProdMode();
}
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);