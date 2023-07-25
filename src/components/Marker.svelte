<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { mapboxgl, key } from '$lib/mapbox/config';

	const { getMap } = getContext<{ getMap: () => mapboxgl.Map }>(key);
	const map = getMap();

	export let lat: number;
	export let lng: number;
	export let popup = true;
	export let label = 'Marker';

	let marker: mapboxgl.Marker;
	let element: HTMLDivElement;
	let elementPopup: HTMLDivElement;

	onMount(() => {
		marker = new mapboxgl.Marker({ element, anchor: 'bottom' });
		if (popup) {
			const popupEl = new mapboxgl.Popup({ offset: 30, closeButton: false });
			if (elementPopup.hasChildNodes()) {
				popupEl.setDOMContent(elementPopup);
			} else {
				popupEl.setText(label);
			}

			marker.setPopup(popupEl);
		}
		marker.setLngLat({ lng, lat }).addTo(map);

		if (!element.hasChildNodes()) element.remove();

		return () => marker.remove();
	});
</script>

<div bind:this={element}>
	<slot />
</div>

<div bind:this={elementPopup}>
	<slot name="popup" />
</div>
