import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { BookmarksList } from './components/bookmarks-list/bookmarks-list';
import { BookmarksForm } from './components/bookmark-form/bookmark-form';
import { Bookmarks } from '../collections/bookmarks';
import { Mongo } from 'meteor/mongo';

import template from './app.html';
 
@Component({
  selector: 'app',
  template,
  directives: [BookmarksList, BookmarksForm]
})
class Webmarks { }
 
bootstrap(Webmarks);