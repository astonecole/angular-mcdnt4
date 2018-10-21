import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatBadgeModule,
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './jobs/add/add.component';
import { ListComponent } from './jobs/list/list.component';
import { DetailsComponent } from './jobs/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsService } from './services/jobs.service';
import { DistanceToNowPipe } from './pipes/distance-to-now.pipe';
import { BoxShadowDirective } from './directives/box-shadow.directive';
import { TransclusionComponent } from './transclusion/transclusion.component';
import { FlashMsgComponent } from './flash-msg/flash-msg.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: ListComponent },
  { path: 'jobs/add', component: AddComponent },
  { path: 'jobs/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    DetailsComponent,
    DistanceToNowPipe,
    BoxShadowDirective,
    TransclusionComponent,
    FlashMsgComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
