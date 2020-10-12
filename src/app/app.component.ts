import { Component } from '@angular/core';
import { IframeCommunicationService } from './iframe-communication.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	constructor(
		private iframeCommunicationService: IframeCommunicationService
	) {
		iframeCommunicationService.addEventListener();
	}
}
