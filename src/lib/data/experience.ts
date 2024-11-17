import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'panin-it-dev',
		company: 'PT. Bank Panin Dubai Syariah, Tbk.',
		description: `
		1. Fullstack developer
		2. Working with internal or external API
		3. Cryptocurrency projects on Golang
		4. Developing middleware Bi-Fast
		5. Developing middleware gateway for external vendor
		6. Laravel-based solutions for companies`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Office',
		period: { from: new Date('2020-11-01') },
		skills: getSkills('js','nodejs','php','go','python','css','html','bootstrap','tailwind','reactjs','electron','laravel',
		'codeigniter','gin','fastapi','flask','echo','psql','mssql','mysql','oracle','redis','docker','kubernetes','CI-CD',
		'Gitlab','Github','Vscode','Postman'),
		name: 'IT Developer',
		color: 'red',
		links: [{to: 'https://pdsb.co.id', label: 'Website'}],
		logo: Assets.Unknown,
		shortDescription: 'build software according to client needs..'
	},
	{
		slug: 'cropmedia-dev',
		company: 'Cropmedia',
		description: 'build applications according to client needs, testing and deploy',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date('2018-03-25'), to: new Date('2020-03-24')},
		skills: getSkills('html','php','mysql','laravel','python','VB.Net','Vscode','bootstrap','css','js','cpp','dart','flutter'),
		name: 'Software Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'build applications according to client needs, testing and deploy.'
	},
];

export const title = 'Experience';
