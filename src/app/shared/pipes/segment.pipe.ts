import { Pipe, PipeTransform } from '@angular/core';
// returns a segment by key from segment array
@Pipe({ name: 'segment' })
export class SegmentPipe implements PipeTransform {
	transform(segments, segmentKey: string) {
		return segments.find(s => s.segmentKey === segmentKey);
	}
}
