import type { Coordinates, DescriptionEntity, Image, Service } from './base-entities.type';
import type { Route } from './route.type';

export type Place = {
	_id: string;
	title: string;
	coordinates: Coordinates;
	description: DescriptionEntity[];
	directions: string;
	images: Image[];
	location: string;
	near_cities: string[];
	route: Route;
	services: Service[];
	slug: string;
};
