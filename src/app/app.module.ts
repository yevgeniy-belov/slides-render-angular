import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SlidesModule } from './slides/slides.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		SlidesModule,
		HttpClientModule,
		NgbModule,
	],
	declarations: [
		AppComponent,
	],
	entryComponents: [],
	exports: [
		NgbModule
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
