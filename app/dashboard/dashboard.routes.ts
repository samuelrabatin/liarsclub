import { Route, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { ClubsComponent } from './connect/clubs/clubs.component';
import { MeetingsComponent } from './connect/meetings/meetings.component';
import { PeopleComponent } from './connect/people/people.component';

import { SetupsComponent } from './setups/setups.component';

import { ForumsComponent } from './discuss/forums/forums.component';
import { BlogsComponent } from './discuss/blogs/blogs.component';

import { ArticlesComponent } from './learn/articles/articles.component';
import { VideosComponent } from './learn/videos/videos.component';

//
export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: 'connect/clubs', component: ClubsComponent},
    { path: 'connect/meetings', component: MeetingsComponent},
    { path: 'connect/people', component: PeopleComponent},

    { path: 'setups', component: SetupsComponent},

    { path: 'discuss/forums', component: ForumsComponent},
    { path: 'discuss/blogs', component: BlogsComponent},

    { path: 'learn/articles', component: ArticlesComponent },
    { path: 'learn/videos', component: VideosComponent },
]
//
export const MODULE_COMPONENTS = [
    HomeComponent,

    ClubsComponent,
    MeetingsComponent,
    PeopleComponent,

    SetupsComponent,

    ForumsComponent,
    BlogsComponent,

    ArticlesComponent,
    VideosComponent
]
