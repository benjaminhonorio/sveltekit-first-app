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
	let elementPopUp: HTMLDivElement;

	onMount(() => {
		marker = new mapboxgl.Marker({
			...($$slots.default && { element }),
			anchor: 'bottom'
		});
		if (popup) {
			const popupEl = new mapboxgl.Popup({ offset: 30, closeButton: false });
			if (elementPopUp.hasChildNodes()) {
				popupEl.setDOMContent(elementPopUp);
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

<div bind:this={elementPopUp}>
	<slot name="popup" />
</div>
