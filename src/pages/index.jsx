import { Fragment } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import {
	Box,
	//   Button,
	//   Heading,
	//   HStack,
	Image,
	// Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react';
import { Container } from 'components/formatting/Container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import LoadingAnim from '../components/LoadingAnim';
// import PageChangeAnimator from '../components/PageChangeAnimator';
// import RatingStars from '../components/RatingStars';
// import TagLine from '../components/TagLine';
// import OfferAlertModal from '../pageComponents/OfferAlertModal';
import HomeCards from 'components/cards/HomeCards';
import HomeBanner from 'components/stationary/HomeBanner';
// import RequestArrow from '../pageElements/RequestArrow';

// const questionIcon = <FontAwesomeIcon icon={faQuestionCircle} size="2x" />;

export default function Home(props) {
	// const { offerModalDisplayed, setOfferModalDisplayed } = props;
	const bgColor = useColorModeValue('gray.400', 'gray.800');

	return (
		<Fragment>
			<Container height="100vh">
				<HomeBanner
					// bgColor={bgColor}
					bgColor="gray.700"
					className="josefin-sans"
					color="yellow.400"
					subColor="blue.400"
					title="Avery Freeman"
					subTitle="Web Developer"
				/>

				<Image
					borderRadius="full"
					border="5px solid #666"
					name="Web Developer Icon"
					height={{
						base: '4rem',
						sm: '6rem',
						md: '10rem',
						lg: '12rem',
						'2xl': '14rem',
					}}
					opacity={0.6}
					width={{
						base: '4rem',
						sm: '6rem',
						md: '10rem',
						lg: '12rem',
						'2xl': '14rem',
					}}
					src="/webDeveloperIcon.png"
					// fallbackSrc="/nna-certified.png"
					position="absolute"
					top={{ base: 0, lg: 0 }}
					left={{
						base: 0,
						sm: 0,
						lg: 0,
						'2xl': 0,
					}}
					zIndex="1"
				/>
				{/* <PageChangeAnimator> */}
				<Box label="spacer" height="6rem" minW="100%" opacity="0" />
				<VStack
					direction="column"
					spacing="8"
					alignItems="center"
					justifyContent="center"
				>
					{/* 



          <TagLine
            border="1px solid green"
            br="lg"
            className="courier"
            darkBg="green.600"
            lightBg="green.300"
            fontSize={{ base: 'lg', sm: '2xl', md: '3xl' }}
            p={10}
            bgOpacity="0.8"
          >
            (also nuts about gardening)
          </TagLine>

          <ExternalLinkToast />

          <OfferAlertModal
            offerModalDisplayed={offerModalDisplayed}
            setOfferModalDisplayed={setOfferModalDisplayed}
          />

          <RatingStars bgColor={bgColor} fontSize="lg" />
          */}
					<HomeCards />
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
				</VStack>
				{/* 
      </PageChangeAnimator> 
      */}
			</Container>
		</Fragment>
	);
}
