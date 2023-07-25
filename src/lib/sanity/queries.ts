import type { Marker } from '../../types/marker.type';
import type { Place } from '../../types/place.type';
import type { Route } from '../../types/route.type';
import { client } from './client';

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
