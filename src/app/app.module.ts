import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { ShareModule } from '@ngx-share/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TetrisComponent } from './tetris/tetris.component';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';
import { DialogService } from './services/dialog.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { ScoreListComponent } from './score-list/score-list.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ShareModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    TetrisComponent,
    GameOverDialogComponent,
    ScoreListComponent
  ],
  providers: [
    DialogService,
  ],
  entryComponents: [
    GameOverDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
