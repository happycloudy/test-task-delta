import {Inter} from 'next/font/google'
import StyledComponentsRegistry from '@/registries/styledComponentsRegistry';
import './globals.css'
import './reset.css'
import {Providers} from '@/app/shared/Providers/Providers';

const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'Catalog',
	description: 'Games catalog'
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
		<body className={inter.className}>
		<StyledComponentsRegistry>
			<Providers>
				{children}
			</Providers>
		</StyledComponentsRegistry>
		</body>
		</html>
	)
}
