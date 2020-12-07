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
	private isDarkTheme(themeName) {
		let is = false;
		if (themeName.includes('dark')) {
			is = true;
		}
		return is;
	}

	private handleIframeEventListener(event) {

		if (event.data.type === 'webpackOk') {
			// console.log('Well, webpack is ok...');
		}

		if (event.data.type === 'navigation') {
			this.router.navigate([event.data.route], {});
		}
		if (event.data.type === 'theme') {
			let classes: string;
			classes = event.data.theme;
			if (this.isDarkTheme(classes)) {
				classes = classes + ' dark';
			}

			classes = `${classes} `;
			event.data.theme
			document.firstElementChild.setAttribute('class', classes);
		}

	}
}
