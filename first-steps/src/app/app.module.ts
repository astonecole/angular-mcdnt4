import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { CommentComponent } from './comment/comment.component';
import { DateDistancePipe } from './pipes/date-distance.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CommentInputComponent,
    CommentComponent,
    DateDistancePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
