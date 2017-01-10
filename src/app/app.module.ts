import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutes } from './app.routes';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';
import { GithubService } from './shared/services/github/github.service';
import { RepositoryCardComponent } from './shared/components/repository-card/repository-card.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { IssuesComponent } from './repositories/issues/issues.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    SearchBoxComponent,
    RepositoryCardComponent,
    RepositoriesComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    AppRoutes
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
