import { Pipe, PipeTransform } from '@angular/core';

import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as localeFR from 'date-fns/locale/fr';

@Pipe({
  name: 'dateDistance'
})
export class DateDistancePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return distanceInWordsToNow(value, { locale: localeFR });
  }

}
