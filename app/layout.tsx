import SideBar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModelProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import getSongsByUserID from '@/actions/getSongsByUserID';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Spotify Clone',
	description: 'Listen to Music',
};
export const revalidate = 0;

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const userSongs = await getSongsByUserID();
	return (
		<html lang='en'>
			<body className={font.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<SideBar songs={userSongs}>{children}</SideBar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
