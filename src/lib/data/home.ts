import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Portofolio';

export const name = 'Farhan';

export const lastName = 'Fauzan';

export const description =
	'A highly experienced and results-driven IT Developer with over 5 years of expertise in building scalable, high-performance applications. Adept at both front-end and back-end development, I have a strong track record of designing, developing, and deploying web, desktop and some middleware applications using a wide range of programming languages and modern technologies. Known for delivering clean, efficient code and optimizing software performance to meet both business and user needs.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/farhanfauzan0' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/farhan-fauzan'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'farhanfauzan119@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/farhan7171'
	}
];

export const skills = getSkills('js', 'nodejs', 'php', 'go', 'python', 'cpp', 'dart');
