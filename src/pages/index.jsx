import { Fragment } from 'react';
import { Box, Image, VStack, useColorModeValue } from '@chakra-ui/react';
import { Container } from 'components/formatting/Container';
import PageChangeAnimator from 'components/animated/PageChangeAnimator';
import RatingStars from 'components/functional/RatingStars';
import QuoteButton from 'components/contact-form/QuoteButton';
// import OfferAlertModal from 'pageComponents/OfferAlertModal';
import HomeCards from 'components/cards/HomeCards';
import HomeBanner from 'components/stationary/HomeBanner';
import Recaptcha from 'util/recaptcha/ReactComponent';
// import RequestArrow from 'pageElements/RequestArrow';

// const questionIcon = <FontAwesomeIcon icon={faQuestionCircle} size="2x" />;

export default function Home(props) {
	// const { offerModalDisplayed, setOfferModalDisplayed } = props;
	const bgColor = useColorModeValue('gray.500', 'gray.800');
	const headerColor = useColorModeValue('blue.600', 'yellow.500');
	const subHeaderColor = useColorModeValue('blue.300', 'yellow.300');

	console.dir(Recaptcha);

	return (
		<Fragment>
			<PageChangeAnimator>
				<Container height="100vh">
					<Box
						// minH="100vh"
						p={0}
						as="main"
						backgroundAttachment="fill"
						backgroundImage="url('/Next/contents/images/3200x1800.png')"
						backgroundPosition="bottom"
						backgroundRepeat="no-repeat"
						backgroundSize="cover"
						textAlign="center"
					>
						<HomeBanner
							// bgColor={bgColor}
							bgColor={bgColor}
							// bgColor="rgba(25, 25, 25, .7)"
							className="carter-one"
							color={headerColor}
							titleSize={{ base: '6xl', sm: '7xl', md: '8xl', xl: '9xl' }}
							subTitleSize={{ base: '4xl', sm: '5xl', md: '7xl', xl: '9xl' }}
							subColor={subHeaderColor}
							title="Have VS Code,"
							subTitle="Will work from home"
						/>

						<Image
							borderRadius="full"
							border="5px solid #666"
							name="Web Developer Icon"
							height={{
								base: '5rem',
								sm: '6rem',
								md: '6.5rem',
								lg: '9rem',
								'2xl': '16rem',
							}}
							opacity={0.6}
							width={{
								base: '5rem',
								sm: '6rem',
								md: '6.5rem',
								lg: '9rem',
								'2xl': '16rem',
							}}
							src="/webDeveloperIcon.png"
							position="absolute"
							top={{ base: '4.2rem', lg: '3.8rem' }}
							left={{
								base: 0,
								sm: 0,
								lg: '3rem',
								'2xl': '9rem',
							}}
							zIndex="0"
						/>
						<Image src="toad.png" width={120} height={120} />
						<VStack
							direction="column"
							spacing="8"
							alignItems="center"
							justifyContent="center"
						>
							{/* <Hero>Avery Freeman</Hero> */}
							{/* <TagLine
								border="1px solid green"
								br="lg"
								className="architects-daughter"
								darkBg="green.600"
								lightBg="green.300"
								fontSize={{ base: 'lg', sm: '2xl', md: '3xl' }}
								p={10}
								bgOpacity="0.8"
							>
								Avery Freeman
							</TagLine>
							<Box label="spacer" height="6rem" minW="100%" opacity="0" /> */}
							{/* 

          <ExternalLinkToast />

          <OfferAlertModal
            offerModalDisplayed={offerModalDisplayed}
            setOfferModalDisplayed={setOfferModalDisplayed}
          />

				*/}
							<HomeCards />
							<RatingStars
								bgColor={bgColor}
								fontSize="lg"
								heading="fake rating meter"
							/>
							{/*
          <TagLine
            br="xl"
            className="cursive"
            darkBg="gray.600"
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lightBg="gray.300"
            p={5}
          ></TagLine>

          <Box label="spacer" height="4rem" minW="100%" opacity="0" />

          <Box backgroundColor={bgColor} borderRadius="lg">
            <RequestArrow className="carter-one" m={5} p={3}>
              Have a question? Please use the button on the right
            </RequestArrow>
          </Box>
                  */}
							<QuoteButton />
						</VStack>
						{/*
						 */}
					</Box>
				</Container>
			</PageChangeAnimator>
		</Fragment>
	);
}
