import type { Coordinates, Image } from './base-entities.type';
import type { Route } from './route.type';

export type Marker = {
	_id: string;
	coordinates: Coordinates;
	description: string;
	featured_image: Image;
	title: string;
	route: Route;
	slug: string;
};
