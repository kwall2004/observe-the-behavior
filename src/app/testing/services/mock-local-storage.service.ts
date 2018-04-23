import { Injectable } from '@angular/core';

@Injectable()
export class MockLocalStorageService {
	storage = {};

	getItem(key: string) {
		return this.storage[key];
	}

	setItem(key: string, value: string) {
		return this.storage[key] = value;
	}

	removeItem(key: string) {
		return delete this.storage[key];
	}
}
