import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { MainService } from './services/main.service';
import { TopicsService } from './services/topics.service';
import { PostsService } from './services/posts.service';
import { StorageService } from './services/storage.service';
import { ArticlesService } from './services/articles.service';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports:      [
      BrowserModule,
      DashboardModule,
      SidebarModule,
      NavbarModule,
      FooterModule,
      RouterModule.forRoot([]),
      HttpModule,
      Ng2AutoCompleteModule
    ],
    declarations: [ AppComponent, DashboardComponent ],
    providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
      MainService,
      TopicsService,
      PostsService,
      StorageService,
      ArticlesService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
