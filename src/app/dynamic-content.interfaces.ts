import { Type } from '@angular/core';

export interface DynamicContentMappingType {
  [ key: string ]: Type<any>;
}
