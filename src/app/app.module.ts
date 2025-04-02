import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { IfryComponent } from './components/ifry/ifry.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { provideRouter, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IfryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    provideRouter([
      { path: 'recipes', component: RecipesComponent },
      { path: '**', component: IfryComponent, pathMatch: 'full' }
    ]),
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
