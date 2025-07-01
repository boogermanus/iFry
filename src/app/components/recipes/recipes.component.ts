import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {ICooking} from 'src/app/interfaces/icooking';
import {DataService} from 'src/app/services/data.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CookingPipe} from 'src/app/pipes/cooking.pipe';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-recipes',
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    CookingPipe,
    FormsModule,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {

  public data: ICooking[] = [];
  public filter: string = '';

  constructor(private readonly dataService: DataService) {
  }

  public ngOnInit(): void {
    this.dataService.getData()
      .subscribe({
        next: (data) => this.data = data.sort((a, b) => a.ingredient.localeCompare(b.ingredient))
      });
  }
}
