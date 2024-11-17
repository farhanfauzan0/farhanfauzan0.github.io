import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/projek/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const AssetsProject = {
	DF: a('DF.png'),
	HR: a('HR.png'),
	MGM: a('MGM.png'),
	Slik: a('Slik.png'),
	Ticket: a('Ticket.png'),
	UMS: a('UMS.png'),
	Sams: a('SAMS.png'),
};

export default AssetsProject;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
