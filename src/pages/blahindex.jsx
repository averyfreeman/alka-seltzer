import { Fragment } from 'react';
import Link from 'next/link';
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Container from 'components/formatting/Container';
import Hero from 'components/stationary/Hero';
import { theme } from 'theme';
// import React, { Fragment, lazy, Suspense, useMemo, useState } from 'react';
// import { Box, ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
// import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import LoadingAnim from './components/LoadingAnim';
// import QuoteButton from './components/QuoteButton';
// import MenuDrawer from './pageComponents/MenuDrawer';
// import MenuHeader from './pageComponents/MenuHeader';
// import Home from './Home';
// const About = lazy(() => import('./pages/About'));
// const Garden = lazy(() => import('./pages/Garden'));
// const Projects = lazy(() => import('./pages/Projects'));
// const Resume = lazy(() => import('./pages/Resume'));

export default function index() {
	// const [offerModalDisplayed, setOfferModalDisplayed] = useState(false);
	return (
		<Fragment>
			{/* <ColorModeScript /> */}
			{/* <ChakraProvider theme={theme}> */}
			<Container>
				<Box>I am the entry point</Box>
				<Box>
					<Link href="/Home">Link to: Home</Link>
				</Box>
				{/* 
				<Box
					// minH="100vh"
					p={0}
					as="main"
					backgroundAttachment="cover"
					backgroundImage="url('/Next/contents/images/3200x1800.png')"
					backgroundPosition="bottom"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					textAlign="center"
				>
					<Box display={{ base: 'flex', sm: 'none' }}>
						<MenuDrawer justifySelf="flex-start" />
					</Box>

					<Box
						boxShadow="4px 4px 8px black"
						display={{ base: 'none', sm: 'block' }}
						left="0"
						position="fixed"
						textAlign="center"
						top="0"
						width="100vw"
						zIndex="2"
					>
						<MenuHeader />
					</Box>

					<QuoteButton height={10} width={10} />

					<AnimatePresence exitBeforeEnter initial={false}>
						<Switch location={location} key={location.pathname}>
							<Route
								path="/home"
								children={
									<Home
										offerModalDisplayed={offerModalDisplayed}
										setOfferModalDisplayed={setOfferModalDisplayed}
									/>
								}
							/>
							<Route
								path="/about"
								children={
									<Suspense
										fallback={
											<LoadingAnim
												stroke="blue"
												strokeWidth="1px"
												fill="cornflowerblue"
											/>
										}
									>
										<About
											offerModalDisplayed={offerModalDisplayed}
											setOfferModalDisplayed={setOfferModalDisplayed}
										/>
									</Suspense>
								}
							/>
							<Route
								path="/garden"
								children={
									<Suspense
										fallback={
											<LoadingAnim
												stroke="green"
												strokeWidth="1px"
												fill="darkgreen"
											/>
										}
									>
										<Garden
											offerModalDisplayed={offerModalDisplayed}
											setOfferModalDisplayed={setOfferModalDisplayed}
										/>
									</Suspense>
								}
							/>
							<Route
								path="/resume"
								children={
									<Suspense
										fallback={
											<LoadingAnim
												stroke="lightorange"
												strokeWidth="1px"
												fill="orange"
											/>
										}
									>
										<Resume
											offerModalDisplayed={offerModalDisplayed}
											setOfferModalDisplayed={setOfferModalDisplayed}
										/>
									</Suspense>
								}
							/>
							<Route
								path="/Projects"
								children={
									<Suspense
										fallback={
											<LoadingAnim
												stroke="mediumpurple"
												strokeWidth="1px"
												fill="blueviolet"
											/>
										}
									>
										<Projects
											offerModalDisplayed={offerModalDisplayed}
											setOfferModalDisplayed={setOfferModalDisplayed}
										/>
									</Suspense>
								}
							/>
							<Route path="/" children={<Redirect to="/home" />} />
							{process.env.NODE_ENV === 'development' && <DevelopmentPortion />}
						</Switch>
					</AnimatePresence>
				</Box>
			*/}
			</Container>
			{/* </ChakraProvider> */}
		</Fragment>
	);
}
