"use strict";
// import { DashboardComponent } from './dashboard.component';
var home_component_1 = require('./home/home.component');
var clubs_component_1 = require('./connect/clubs/clubs.component');
var meetings_component_1 = require('./connect/meetings/meetings.component');
var people_component_1 = require('./connect/people/people.component');
var setups_component_1 = require('./setups/setups.component');
var forums_component_1 = require('./discuss/forums/forums.component');
var blogs_component_1 = require('./discuss/blogs/blogs.component');
var articles_component_1 = require('./learn/articles/articles.component');
var videos_component_1 = require('./learn/videos/videos.component');
//
exports.MODULE_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'connect/clubs', component: clubs_component_1.ClubsComponent },
    { path: 'connect/meetings', component: meetings_component_1.MeetingsComponent },
    { path: 'connect/people', component: people_component_1.PeopleComponent },
    { path: 'setups', component: setups_component_1.SetupsComponent },
    { path: 'discuss/forums', component: forums_component_1.ForumsComponent },
    { path: 'discuss/blogs', component: blogs_component_1.BlogsComponent },
    { path: 'learn/articles', component: articles_component_1.ArticlesComponent },
    { path: 'learn/videos', component: videos_component_1.VideosComponent },
];
//
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    clubs_component_1.ClubsComponent,
    meetings_component_1.MeetingsComponent,
    people_component_1.PeopleComponent,
    setups_component_1.SetupsComponent,
    forums_component_1.ForumsComponent,
    blogs_component_1.BlogsComponent,
    articles_component_1.ArticlesComponent,
    videos_component_1.VideosComponent
];
//# sourceMappingURL=dashboard.routes.js.map