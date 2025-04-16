import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddStageIngComponent } from './components/add-stage-ing/add-stage-ing.component';
import { StagesIngComponent } from './components/stages-ing/stages-ing.component';
import { DetailsStageComponent } from './components/details-stage/details-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStageIngComponent,
    StagesIngComponent,
    DetailsStageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: StagesIngComponent },
      { path: 'add', component: AddStageIngComponent },
      { path: 'details/:id', component: DetailsStageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}