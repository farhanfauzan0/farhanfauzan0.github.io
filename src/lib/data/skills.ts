import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'peachpuff',
		description:
			'',
		logo: Assets.NodeJs,
		name: 'NodeJS',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description:
			'',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'go',
		color: 'blue',
		description:
			'',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description:
			'',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			'',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'VB.Net',
		color: 'oldlace',
		description:
			'',
		logo: Assets.VBnet,
		name: 'VB.Net',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'oldlace',
		description:
			'',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'blue',
		description:
			'',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'royalblue',
		description:
			'',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'electron',
		color: 'seashell',
		description: '',
		logo: Assets.Electron,
		name: 'Electron Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description: '',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'codeigniter',
		color: 'red',
		description: '',
		logo: Assets.CI,
		name: 'Codeigniter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'gin',
		color: 'salmon',
		description: '',
		logo: Assets.Gin,
		name: 'Gin',
		category: 'framework'
	}),
	defineSkill({
		slug: 'fastapi',
		color: 'palevioletred',
		description: '',
		logo: Assets.Unknown,
		name: 'FastApi',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'olivedrab',
		description: '',
		logo: Assets.Unknown,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'oldlace',
		description: '',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'echo',
		color: 'oldlace',
		description: '',
		logo: Assets.Unknown,
		name: 'Echo',
		category: 'framework'
	}),
	defineSkill({
		slug: 'psql',
		color: 'orangered',
		description: '',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mssql',
		color: 'palegreen',
		description: '',
		logo: Assets.Sqlserver,
		name: 'SQL Server',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'powderblue',
		description: '',
		logo: Assets.Mysql,
		name: 'Mysql',
		category: 'db'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'navy',
		description: '',
		logo: Assets.Oracle,
		name: 'Oracle',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'mediumturquoise',
		description: '',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'docker',
		color: 'navy',
		description: '',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'navy',
		description: '',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'CI-CD',
		color: 'mintcream',
		description: '',
		logo: Assets.Unknown,
		name: 'CI-CD',
		category: 'devops'
	}),
	defineSkill({
		slug: 'Gitlab',
		color: 'mintcream',
		description: '',
		logo: Assets.Gitlab,
		name: 'Gitlab',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Github',
		color: 'limegreen',
		description: '',
		logo: Assets.Github,
		name: 'Github',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Vscode',
		color: 'navy',
		description: '',
		logo: Assets.Vscode,
		name: 'VSCode',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Postman',
		color: 'orange',
		description: '',
		logo: Assets.Postman,
		name: 'Postman',
		category: 'devtools'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
