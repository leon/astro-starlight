import { defineVitestConfig } from '../test-config';

export default defineVitestConfig({
	title: 'Sort Test Ascending',
	sidebar: [
		{
			label: 'Guides',
			autogenerate: { directory: 'guides', sort: 'asc' },
		},
	],
});