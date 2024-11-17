import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Indonesia',
		logo: Assets.Unknown,
		name: '',
		organization: '',
		period: { from: new Date(2015, 9, 1), to: new Date(2019, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'VB .NET', 'C++', 'Java', 'English']
	},
	
];

export const title = 'Education';
