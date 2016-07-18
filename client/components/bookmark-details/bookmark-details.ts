import 'reflect-metadata';
import { Component, NgZone  } from '@angular/core';
import { Bookmarks } from '../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Tracker } from 'meteor/tracker';



import template from './bookmark-details.html';

@Component({
    selector: 'bookmark-details',
    directives: [ROUTER_DIRECTIVES],
    template
})

export class BookmarksDetails {
    bookmarkId;
    bookmark: Bookmark;

    constructor(
        private route: ActivatedRoute, 
        private ngZone: NgZone,
        private router:Router) {
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

    updateBookmark (bookmark) {
        Bookmarks.update(bookmark._id, {
            $set: {
                title: bookmark.title,
                url: bookmark.url,
                category: bookmark.category
            }
        })
        this.router.navigate(['']);
    }

}