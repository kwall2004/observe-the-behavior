import { InjectionToken, Provider } from '@angular/core';
import { DynamicContentMappingType } from './dynamic-content.interfaces';

export const DYNAMIC_CONTENT_MAPPINGS = new InjectionToken<DynamicContentMappingType>(`DYNAMIC_CONTENT_MAPPINGS`);
