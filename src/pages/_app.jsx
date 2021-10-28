import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
// import { useRouter } from 'next/router'
import theme from '../theme';
import '../styles/global.css';

function handleExitComplete() {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0 });
	}
}

function MyApp({ Component, pageProps, router }) {
	// const router = useRouter() // use if above not working
	// console.dir(router.route);
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Layout>
					<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</Layout>
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
