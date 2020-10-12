import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import tree from '../../../../../../tree.json';
import { Location } from '@angular/common';

@Component({
    selector: 'slides',
    templateUrl: './slides-listing.component.html'
})
export class SlidesListingComponent implements OnInit {
    public selectedNode;
    public route: string;

    constructor(location: Location, router: Router, ) {
        router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.traverseTree(tree[0], location.path().replace(/%20/g, ' ')); // replaces escaped space gotten from browser
                if (location.path() !== '') {
                    this.route = location.path();
                } else {
                    this.route = 'slides';
                }
            }
        });
    }
    traverseTree(n, path) {
        const node = n;
        if ('/slides/' + node.state === path) {
            this.selectedNode = [node];
            return this.selectedNode;
        } else if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                this.traverseTree(node.children[i], path);
            }
        }
    }
    ngOnInit() { }
}
