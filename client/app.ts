import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { BookmarksList } from './components/bookmarks-list/bookmarks-list';
import { BookmarksForm } from './components/bookmark-form/bookmark-form';
import { BookmarksDetails } from './components/bookmark-details/bookmark-details';
import { Bookmarks } from '../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { LoginButtons } from 'angular2-meteor-accounts-ui';

import template from './app.html';
 
@Component({
  selector: 'app',
  template,
  directives: [LoginButtons, ROUTER_DIRECTIVES, BookmarksList, BookmarksForm]
})

class Webmarks { }

const routes: RouterConfig = [
  { path: '',              	component: BookmarksList },
  { path: 'bookmark/:bookmarkId',	component: BookmarksDetails }
];
 
const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
 
bootstrap(Webmarks, [APP_ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);