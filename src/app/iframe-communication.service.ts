import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class IframeCommunicationService {
	constructor(private router: Router) {}

	public addEventListener() {
		window.addEventListener(
			'message',
			this.handleIframeEventListener.bind(this)
		);
	}

	private handleIframeEventListener(event) {

		if (event.data.type === 'webpackOk') {
			// console.log('Well, webpack is ok...');
		}

		if (event.data.type === 'navigation') {
			this.router.navigate([event.data.route], {});
		}
		if (event.data.type === 'theme') {
			document.firstElementChild.setAttribute('class', event.data.theme);
		}
	}
}
