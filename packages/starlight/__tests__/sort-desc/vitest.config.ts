import { defineVitestConfig } from '../test-config';

export default defineVitestConfig({
	title: 'Sort Test Descending',
	sidebar: [
		{
			label: 'Guides',
			autogenerate: { directory: 'guides', sort: 'desc' },
		},
	],
});