import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


/** Generate loader for given prefixes. */
export function translateLoader(http: HttpClient, prefixs: string[]) {

	if (!prefixs) {
		return;
	}

	const config = new Array<{ prefix: string, suffix: string }>();
	// todo loading shared modules shared translations for every module + lazy loaded module currently becuase of poor support for ngx translate.
	// before production see if issue has better solution via these resources
	// https://stackoverflow.com/questions/49127633/ngx-translate-merge-translation-file-of-different-modules
	// https://github.com/PowerhouseBV/gists/blob/master/angular/translate/inni-missing-translate-handler.ts
	// https://github.com/ngx-translate/core/issues/425
	config.push({ prefix: './assets/i18n/shared/', suffix: '.json' });

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
		// todo for some reason initilzing the app from a lazy loaded module causes this
		// to be called multiple times, once with null, so we are guarding against it until we find out why.
		if (lang === null) {
			return of({});
		}
		return forkJoin(this.resources.map(config => {
			return this.http.get(`${config.prefix}${lang}${config.suffix}`);
		}))
			.pipe(
				map(response => {
					return response.reduce((a, b) => {
						return { ...a, ...b };
					});
				})
			);
	}
}
