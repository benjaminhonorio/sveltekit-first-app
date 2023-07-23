import { env } from '$env/dynamic/public';
import { createClient } from '@sanity/client';
import type { Marker } from '../types/marker.type';
import type { Place } from '../types/place.type';
import type { Route } from '../types/route.type';

export const client = createClient({
	projectId: env.PUBLIC_SANITY_PROJECT_ID,
	dataset: env.PUBLIC_SANITY_DATASET,
	apiVersion: env.PUBLIC_SANITY_API_VERSION,
	useCdn: true
});

export const getMarkers = (): Promise<Marker[]> => {
	return client.fetch(
		`
      *[_type == "place"]
      { 
        _id, 
        title, 
        "featured_image": images[0].asset->{ _id, url, title, altText, "lqip": metadata.lqip },
        "slug": slug.current, 
        "route": route->{ _id, name, "icon_url": icon.asset->url, "hex_color": color.hex }, 
        "coordinates": coordinates{ lat, lng },
        "description": description[0].children[0].text 
      }
    `
	);
};

export const getPlace = (slug: string): Promise<Place> => {
	return client.fetch(
		`
      *[_type == "place" && slug.current == "${slug}"][0]
      {
        _id,
        "slug": slug.current,
        title,
        location,
        description,
        "images": images[].asset->{ _id, url, title, altText },
        directions,
        "services": services[]{ label, value },
        near_cities,
        "route": route->{ _id, name, "icon_url": icon.asset->url, "hex_color": color.hex },
        "coordinates": coordinates{ lat, lng }
      }
    `
	);
};

export const getRoutes = async (): Promise<Route[]> => {
	return client.fetch(
		`
      *[_type == "route"] | order(dateTime(_updatedAt) desc) 
      {
        _id,
        name,
        "icon_url": icon.asset->url,
        "hex_color": color.hex
      }
    `
	);
};
