type NavItem = {
	icon: string
	label: string
	url: string
}
type AuthRedirect = {
	[key: string]: string
}

export const disnav = [
	// {
	// 	icon: 'fa6-solid:star',
	// 	label: 'Roadmaps',
	// 	url: 'https://roadmaps.sh/',
	// },
	{ icon: 'fa6-solid:star', label: 'Roadmaps', url: 'https://roadmaps.sh' },
	{ icon: 'fa6-solid:book', label: 'Books', url: '/' },
	{ icon: 'fa6-solid:calendar-days', label: 'Timetable', url: '/' },
	
] as const

export const authRedirect = {
	signIn: '/api/auth/signin?error=SessionRequired',
	accessDenied: '/api/auth/error?error=AccessDenied',
} as const
