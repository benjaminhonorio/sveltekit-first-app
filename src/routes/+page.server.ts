import { getMarkers, getRoutes } from '$lib/sanity';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const results = await Promise.allSettled([getMarkers(), getRoutes()]);
	const markers = results[0].status === 'fulfilled' ? results[0].value : [];
	const routes = results[1].status === 'fulfilled' ? results[1].value : [];
	return {
		routes,
		markers
	};
}) as PageServerLoad;
