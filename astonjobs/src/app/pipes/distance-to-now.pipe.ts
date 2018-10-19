import { Pipe, PipeTransform } from '@angular/core';

import * as distanceInWordToNow from 'date-fns/distance_in_words_to_now';
import * as localeFR from 'date-fns/locale/fr';

@Pipe({
  name: 'distanceToNow'
})
export class DistanceToNowPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return distanceInWordToNow(value, { locale: localeFR });
  }
}
