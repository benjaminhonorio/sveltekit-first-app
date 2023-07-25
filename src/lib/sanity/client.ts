import { env } from '$env/dynamic/public';
import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: env.PUBLIC_SANITY_PROJECT_ID,
	dataset: env.PUBLIC_SANITY_DATASET,
	apiVersion: env.PUBLIC_SANITY_API_VERSION,
	useCdn: true
});
