import 'reflect-metadata';
import { Component, NgZone  } from '@angular/core';
import { Bookmarks } from '../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { ActivatedRoute } from '@angular/router';
import { Tracker } from 'meteor/tracker';


import template from './bookmark-details.html';

@Component({
    selector: 'bookmark-details',
    template
})

export class BookmarksDetails {
    bookmarkId;
    bookmark: Object;

    constructor(private route: ActivatedRoute, private ngZone: NgZone) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.bookmarkId = params['bookmarkId'];          
            
            Tracker.autorun(() => {
                this.ngZone.run(() => {
                    this.bookmark = Bookmarks.findOne(this.bookmarkId);
                });
            });
        });
    }

}