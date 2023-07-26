import { getPlace } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const place = await getPlace(params.slug);
	return {
		place
	};
}) as PageServerLoad;
