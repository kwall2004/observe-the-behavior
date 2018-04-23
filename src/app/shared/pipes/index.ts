import { ValuesPipe } from './values.pipe';
import { CentsPipe } from './cents.pipe';
import { DollarsPipe } from './dollars.pipe';
import { PaxTypePipe } from './pax-type.pipe';
import { ToDatePipe } from './to-date.pipe';
import { KeysPipe } from './keys.pipe';
import { TravelDocumentPipe } from './travel-document.pipe';
import { SsrPricePipe } from './ssr-price.pipe';
import { UtcDatePipe } from './utc-date.pipe';
import { SsrPassengerPipe } from './ssr-passenger.pipe';
import { StationNamePipe } from './station-name.pipe';
import { SegmentPipe } from './segment.pipe';

export const pipes: any[] = [
	ValuesPipe,
	KeysPipe,
	CentsPipe,
	DollarsPipe,
	PaxTypePipe,
	ToDatePipe,
	TravelDocumentPipe,
	SsrPricePipe,
	UtcDatePipe,
	SsrPassengerPipe,
	StationNamePipe,
	SegmentPipe
];
