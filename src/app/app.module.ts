import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SlidesModule } from './slides/slides.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		SlidesModule,
		HttpClientModule,
		HotkeyModule.forRoot(),
		NgbModule,
	],
	declarations: [
		AppComponent,
		WelcomeComponent,
	],
	entryComponents: [],
	exports: [
		NgbModule
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
