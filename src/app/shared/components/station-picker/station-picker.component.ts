import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { StationModel, WorldRegionModel } from '../../../core/models';


interface RowsOptions {
	stations: StationModel[];
	columnLength: number;
	columnCount: number;
}


@Component({
	selector: 'app-station-picker',
	templateUrl: './station-picker.component.html',
	styleUrls: ['./station-picker.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationPickerComponent {
	@Input() set stations(stations: StationModel[]) {
		this._stations = [...stations].sort((a: StationModel, b: StationModel) => {
			const x = a.shortName.toLowerCase();
			const y = b.shortName.toLowerCase();
			return x < y ? -1 : x > y ? 1 : 0;
		});
		this.setRows(this._stations);
	}
	@Input() worldRegions: WorldRegionModel;

	@Output() selected = new EventEmitter<StationModel>();

	rows: StationModel[][];
	filter: string;

	private _stations: StationModel[];

	setFilter(filter: string): void {
		this.filter = filter;
		filter !== null ? this.setRows(this._stations.filter(station => this.worldRegions[filter].includes(station.stationCode))) : this.setRows(this._stations);
	}

	private setRows(stations: StationModel[]) {
		const columnCount = 4;
		this.rows = this.fillRows([], {
			stations,
			columnLength: Math.ceil(stations.length / columnCount),
			columnCount
		});
	}

	private fillRows(rows: StationModel[][], options: RowsOptions): StationModel[][] {
		if (options.stations.length <= (rows.length * options.columnCount)) {
			return rows;
		}

		return this.fillRows(rows.concat([this.fillRow([], rows.length, options)]), options);
	}

	private fillRow(row: StationModel[], stationIndex: number, options: RowsOptions): StationModel[] {
		if (row.length === options.columnCount || options.stations.length <= stationIndex) {
			return row;
		}

		return this.fillRow(row.concat(options.stations[stationIndex]), stationIndex + options.columnLength, options);
	}
}
