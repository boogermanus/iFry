import { Pipe, PipeTransform } from '@angular/core';
import { ICooking } from '../interfaces/icooking';

@Pipe({
  name: 'cooking',
  standalone: true
})
export class CookingPipe implements PipeTransform {

  transform(value: ICooking[], filterBy: string): ICooking[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : '';
    return filterBy ? value.filter((item: ICooking) => 
    item.ingredient.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
  }

}
