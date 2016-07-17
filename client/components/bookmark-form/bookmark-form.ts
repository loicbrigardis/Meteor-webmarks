import 'reflect-metadata';
import { Component } from '@angular/core';
import { Bookmarks } from '../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

import template from './bookmark-form.html';

@Component({
    selector: 'bookmark-form',
    template
})

export class BookmarksForm {
    bookmarkForm: ControlGroup;

    constructor(private _fb: FormBuilder) {
        this.bookmarkForm = _fb.group({
            title: ['', Validators.required],
            url: ['', Validators.required],
            category: ['', Validators.required]
        })
    }

    addBookmark(bookmark) {
        if (this.bookmarkForm.valid) {
            Bookmarks.insert({
                title: bookmark.title,
                url: bookmark.url,
                category: bookmark.category
            });
            this.bookmarkForm.controls['title'].updateValue('');
            this.bookmarkForm.controls['url'].updateValue('');
            this.bookmarkForm.controls['category'].updateValue('');
        }
    }
}
