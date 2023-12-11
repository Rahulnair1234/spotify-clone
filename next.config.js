/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// domains: ['mhoxhysecniuqjojpzsk.supabase.co'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mhoxhysecniuqjojpzsk.supabase.co',
			},
		],
	},
};

module.exports = nextConfig;
