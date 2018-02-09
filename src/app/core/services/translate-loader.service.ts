import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
// import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';


/** Generate loader for given prefixes. */
export function translateLoader(http: HttpClient, prefixs: string[]) {

	const config = new Array<{ prefix: string, suffix: string }>();
	// config.push({ prefix: './assets/i18n/shared/', suffix: '.json' });

	prefixs.map(prefix => config.push({ prefix: './assets/i18n/' + prefix + '/', suffix: '.json' }));

	return new MultiTranslateHttpLoader(http, config);
}

/** Loader for multiple HTTP loaders. */
export class MultiTranslateHttpLoader implements TranslateLoader {
	constructor(private http: HttpClient,
		public resources: { prefix: string, suffix: string }[] = [{
			prefix: '/assets/i18n/',
			suffix: '.json'
		}]) { }

	/**
	 * Gets the translations from the server
	 * @param lang
	 * @returns {any}
	 */
	public getTranslation(lang: string): any {
		return forkJoin(this.resources.map(config => {
			return this.http.get(`${config.prefix}${lang}${config.suffix}`);
		})).map(response => {
			return response.reduce((a, b) => {
				return {...a, b};
			});
		});
	}
}
