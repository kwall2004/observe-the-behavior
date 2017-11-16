import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'journeysWithFares'
})
export class JourneysWithFaresPipe implements PipeTransform {

  transform(allJourneys: object[]): any {
    return allJourneys.filter(journey => Object.keys(journey['fares']).length > 0);
  }

}
