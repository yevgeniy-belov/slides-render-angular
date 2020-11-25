import { Component, HostListener } from '@angular/core';
import { IframeCommunicationService } from './iframe-communication.service';
// import { HotkeysService, Hotkey } from 'angular2-hotkeys';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    @HostListener('document:keydown.shift.f') toggleFullscreen(event: KeyboardEvent) {
        window.top.postMessage('shift+f', '*');
    }
    constructor(
        private iframeSvc: IframeCommunicationService,
        // private _hotkeysService: HotkeysService
    ) {
        iframeSvc.addEventListener();

        // this._hotkeysService.add(
        // 	new Hotkey('ctrl+shift+/', (event: KeyboardEvent): boolean => {
        // 		window.top.postMessage('ctrl+shift+/', '*');
        // 		return false;
        // 	})
        // );

        // this._hotkeysService.add(
        // 	new Hotkey('ctrl+alt+l', (event: KeyboardEvent): boolean => {
        // 		window.top.postMessage('ctrl+alt+l', '*');
        // 		return false;
        // 	})
        // );

        // this._hotkeysService.add(
        // 	new Hotkey('ctrl+/', (event: KeyboardEvent): boolean => {
        // 		window.top.postMessage('ctrl+/', '*');
        // 		return false;
        // 	})
        // );

        // this._hotkeysService.add(
        // 	new Hotkey('ctrl+alt+b', (event: KeyboardEvent): boolean => {
        // 		window.top.postMessage('ctrl+alt+b', '*');
        // 		return false;
        // 	})
        // );

        // this._hotkeysService.add(
        // 	new Hotkey('shift+f', (event: KeyboardEvent): boolean => {
        // 		window.top.postMessage('shift+f', '*');
        // 		return false;
        // 	})
        // );

        // this._hotkeysService.add(
        // 	new Hotkey('escape', (event: KeyboardEvent): boolean => {
        // 		window.top.postMessage('escape', '*');
        // 		return false;
        // 	})
        // );
    }
}
