import { env } from '$env/dynamic/public';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = env.PUBLIC_MAPBOX_ACCESS_TOKEN;

const key = Symbol();

export { key, mapboxgl };
