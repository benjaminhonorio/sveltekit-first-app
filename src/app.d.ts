// See https://kit.svelte.dev/docs/types#app

import type { Marker } from './types/marker.type';
import type { Route } from './types/route.type';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			routes: Route[];
			markers: Marker[];
		}
		// interface Platform {}
	}
}

export {};
