import 'reflect-metadata';
import { Component } from '@angular/core';
import { Bookmarks } from '../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { BookmarksDetails } from '../bookmark-details/bookmark-details';


import template from './bookmarks-list.html';

@Component({
    selector: 'bookmarks-list',
    template,
    directives: [ROUTER_DIRECTIVES]
})

export class BookmarksList {
    bookmarks: Mongo.Cursor<Object>;

    constructor() {
        this.bookmarks = Bookmarks.find();
    }

    removeBookmark (bookmark) {
        Bookmarks.remove(bookmark._id)
    }

}

