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
import { EditArticleComponent } from './components/edit-article/edit-article.component';

import { VideosComponent } from './learn/videos/videos.component';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ProfileComponent } from './users/profile/profile.component';

import { ClubComponent } from './connect/clubs/club/club.component';
import { AddClubComponent } from './connect/clubs/add-club/add-club.component';

import { AddEditComponent } from './setups/add-edit/add-edit.component';
import { SetupDetailComponent } from './setups/setup-detail/setup-detail.component';

import { ManageClubsComponent } from './admin/manage-clubs/manage-clubs.component';
import { ManageSetupsComponent } from './admin/manage-setups/manage-setups.component';
import { ManageForumsComponent } from './admin/manage-forums/manage-forums.component';
import { ManageArticlesComponent } from './admin/manage-articles/manage-articles.component';
import { AboutComponent } from './about/about.component';

import { VIewTopicComponent } from './components/view-topic/view-topic.component';
import { ClubMembersListComponent } from './components/club-members-list/club-members-list.component';

import { ClubDetailComponent } from './connect/clubs/club-detail/club-detail.component';

//
export const MODULE_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },

  { path: 'connect/clubs', component: ClubsComponent},
  { path: 'connect/meetings', component: MeetingsComponent},
  { path: 'connect/people', component: PeopleComponent},

  { path: 'setups', component: SetupsComponent},
  { path: 'setups/add/:index', component: AddEditComponent},
  { path: 'setups/view', component: SetupDetailComponent},

  { path: 'discuss/forums', component: ForumsComponent},
  { path: 'discuss/forums/topic/:id', component: VIewTopicComponent},
  { path: 'discuss/blogs', component: BlogsComponent},

  { path: 'learn/articles', component: ArticlesComponent },
  { path: 'learn/videos', component: VideosComponent },

  { path: 'users/login', component: LoginComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'admin/clubs', component: ManageClubsComponent },
  { path: 'admin/clubs/userslist/:id', component: ClubMembersListComponent },
  { path: 'admin/setups', component: ManageSetupsComponent },
  { path: 'admin/forums', component: ManageForumsComponent },
  { path: 'about', component: AboutComponent },

  { path: 'connect/clubs/club/:id', component: ClubDetailComponent },

  { path: 'admin/articles', component: ManageArticlesComponent },
  { path: 'admin/articles/edit/:id', component: EditArticleComponent },

  { path: '**', redirectTo: 'home' },
];

//
export const MODULE_COMPONENTS = [
    HomeComponent,

    ClubsComponent,
    ClubComponent,
    AddClubComponent,
    MeetingsComponent,
    PeopleComponent,

    SetupsComponent,

    ForumsComponent,
    BlogsComponent,

    ArticlesComponent,
    VideosComponent,

    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ManageClubsComponent,
    AboutComponent
];
