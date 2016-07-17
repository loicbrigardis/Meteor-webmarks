import 'reflect-metadata';
import { Component } from '@angular/core';
import { Bookmarks } from '../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';

import template from './bookmarks-list.html';

@Component({
    selector: 'bookmarks-list',
    template
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

