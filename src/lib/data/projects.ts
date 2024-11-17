import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import AssetsProject from './assetsproject';

export const items: Array<Project> = [
	{
		slug: 'sams',
		color: '#5e95e3',
		description:
			'application for managing all company process. including HR, Operation, Finance, Accounting, Warehouse, Procurement, HSE, Memo, and others.',
		shortDescription:
			'application for managing all company process. including HR, Operation, Finance, Accounting, Warehouse, Procurement, HSE, Memo, and others.',
		links: [{label: 'links', 'to': 'https://ranjisams.com/'}],
		logo: Assets.Unknown,
		name: 'Shorebase Activities Management System',
		period: {
			from: new Date()
		},
		skills: getSkills('reactjs', 'Gitlab','kubernetes','CI-CD','psql', 'html', 'js', 'docker','tailwind'),
		type: 'Web Apps',
		screenshots: [
			{
				label: 'Screen 1',
                src: AssetsProject.Sams
			}
		]
	},{
		slug: 'mgm',
		color: '#5e95e3',
		description:
			'application for managing prize savings. includes registration, approval, parameters, reports.',
		shortDescription:
			'application for managing prize savings. includes registration, approval, parameters, reports.',
		links: [],
		logo: Assets.Unknown,
		name: 'MGM Apps',
		period: {
			from: new Date()
		},
		skills: getSkills('laravel','go','js','mssql', 'Gitlab', 'CI-CD'),
		type: 'Web Apps',
		screenshots: [
			{
				label: 'Screen 1',
                src: AssetsProject.MGM
			}
		]
	},
	{
		slug: 'ums',
		color: '#5e95e3',
		description:
			'application for managing users in the company, including user data, roles, permissions, apps, and others.',
		shortDescription:
			'application for managing users in the company, including user data, roles, permissions, apps, and others.',
		links: [],
		logo: Assets.Unknown,
		name: 'UMS (User Management System)',
		period: {
			from: new Date()
		},
		skills: getSkills('laravel', 'js', 'mssql', 'kubernetes', 'docker', 'CI-CD', 'Gitlab'),
		type: 'Web Apps',
		screenshots: [
			{
				label: 'screen 1',
				src: AssetsProject.UMS
			},
		]
	},
	{
		slug: 'slik',
		color: '#5e95e3',
		description:
			'application for checking customer data with slik OJK, to determine customer eligibility.',
		shortDescription:
			'application for checking customer data with slik OJK, to determine customer eligibility.',
		links: [],
		logo: Assets.Unknown,
		name: 'Slik Checking',
		period: {
			from: new Date()
		},
		skills: getSkills('laravel', 'js', 'mssql', 'kubernetes', 'docker', 'CI-CD', 'Gitlab'),
		type: 'Web Apps',
		screenshots: [
			{
				label: 'screen 1',
				src: AssetsProject.Slik
			},
		]
	},
	{
		slug: 'ticket',
		color: '#5e95e3',
		description:
			'application for managing ticket.',
		shortDescription:
			'application for managing ticket.',
		links: [],
		logo: Assets.Unknown,
		name: 'Ticket Helpdesk',
		period: {
			from: new Date()
		},
		skills: getSkills('laravel', 'js', 'mssql', 'kubernetes', 'docker', 'CI-CD', 'Gitlab'),
		type: 'Web Apps',
		screenshots: [
			{
				label: 'screen 1',
				src: AssetsProject.Ticket
			},
		]
	},
	{
		slug: 'hr',
		color: '#5e95e3',
		description:
			'application for managing employee financing',
		shortDescription:
			'application for managing employee financing',
		links: [],
		logo: Assets.Unknown,
		name: 'HR Modul',
		period: {
			from: new Date()
		},
		skills: getSkills('laravel', 'js', 'mssql', 'kubernetes', 'docker', 'CI-CD', 'Gitlab'),
		type: 'Web Apps',
		screenshots: [
			{
				label: 'screen 1',
				src: AssetsProject.HR
			},
		]
	},
	{
		slug: 'middleware-bifast',
		color: '#5e95e3',
		description:
			'This system is to meet the needs of managing bi-fast transactions, including log transactions.',
		shortDescription:
			'This system is to meet the needs of managing bi-fast transactions, including log transactions.',
		links: [],
		logo: Assets.Unknown,
		name: 'Middleware BIFAST',
		period: {
			from: new Date()
		},
		skills: getSkills('go', 'Gitlab','kubernetes','redis','mssql'),
		type: 'Middleware System',
		screenshots: []
	},
	{
		slug: 'middleware-indomaret',
		color: '#5e95e3',
		description:
			'This system is to meet the need for financing payments with Indomaret payment points.',
		shortDescription:
			'This system is to meet the need for financing payments with Indomaret payment points.',
		links: [],
		logo: Assets.Unknown,
		name: 'Middleware Indomaret Payment Point',
		period: {
			from: new Date()
		},
		skills: getSkills('go', 'Gitlab','kubernetes','redis','mssql'),
		type: 'Middleware System',
		screenshots: []
	},
	{
		slug: 'backend-scv',
		color: '#5e95e3',
		description:
			'This system is backend for managing reports to LPS (Lembaga Penjamin Simpanan).',
		shortDescription:
			'This system is backend for managing reports to LPS (Lembaga Penjamin Simpanan).',
		links: [],
		logo: Assets.Unknown,
		name: 'Backend Single Customer View',
		period: {
			from: new Date()
		},
		skills: getSkills('go', 'Gitlab','kubernetes','redis','mssql'),
		type: 'Backend',
		screenshots: []
	},{
		slug: 'df',
		color: '#5e95e3',
		description:
			'application for data encryption.',
		shortDescription:
			'application for data encryption.',
		links: [],
		logo: Assets.Unknown,
		name: 'DF Encrypter',
		period: {
			from: new Date()
		},
		skills: getSkills('electron', 'js', 'nodejs'),
		type: 'Desktop Apps',
		screenshots: [
			{
				label: 'screen 1',
				src: AssetsProject.DF
			},
		]
	},
];

export const title = 'Projects';
