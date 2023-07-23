export type Coordinates = {
	lat: number;
	lng: number;
};

export type DescriptionEntity = {
	_key: string;
	_type: string;
	children: ChildrenEntity[] | null;
	markDefs?: null[] | null;
	style: string;
};

export type ChildrenEntity = {
	_key: string;
	_type: string;
	marks?: null[] | null;
	text: string;
};

export type Image = {
	_id: string;
	altText: string;
	title: string;
	url: string;
	lqip?: string;
};

export type Service = {
	label: string;
	value: 'hotel' | 'restaurant' | 'sshh';
};

export type FormFieldOption = { label?: string; value: string | number };
