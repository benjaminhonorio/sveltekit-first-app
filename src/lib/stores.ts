import { writable } from 'svelte/store';

export const selectedRoutes = writable<Set<string>>(new Set());
