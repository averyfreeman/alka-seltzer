import { Fragment } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import {
	//   Box,
	//   Button,
	//   Heading,
	//   HStack,
	//   Image,
	Text,
	//   VStack,
	//   useColorModeValue,
} from '@chakra-ui/react';
import Container from 'components/Container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import LoadingAnim from '../components/LoadingAnim';
// import PageChangeAnimator from '../components/PageChangeAnimator';
// import StarRatings from '../components/StarRatings';
// import TagLine from '../components/TagLine';
// import OfferAlertModal from '../pageComponents/OfferAlertModal';
// import HomeCards from '../pageComponents/HomeCards';
// import HomeBanner from '../pageElements/HomeBanner';
// import Footer from '../pageElements/Footer';
// import RequestArrow from '../pageElements/RequestArrow';

// const questionIcon = <FontAwesomeIcon icon={faQuestionCircle} size="2x" />;

export default function Home(props) {
	// const { offerModalDisplayed, setOfferModalDisplayed } = props;
	// const bgColor = useColorModeValue('gray.400', 'gray.800');

	return (
		<Fragment>
			<Container>
				<Text>This is the Home page</Text>
				{/* <PageChangeAnimator>
        <VStack
          direction="column"
          spacing="8"
          alignItems="center"
          justifyContent="center"
        >
          <Box label="spacer" height="6rem" minW="100%" opacity="0" />

          <Image
            // borderRadius="full"
            name="Web Developer Icon"
            height={{
              base: '3.43rem',
              sm: '5rem',
              md: '5.625rem',
              lg: '6rem',
              '2xl': '7.5rem',
            }}
            width={{
              base: '3.43rem',
              sm: '5rem',
              md: '5.625rem',
              lg: '6rem',
              '2xl': '7.5rem',
            }}
            src="/webDeveloperIcon.png"
            // fallbackSrc="/nna-certified.png"
            position="absolute"
            top={{ base: '80px', lg: '60px' }}
            left={{
              base: '20px',
              sm: '40px',
              lg: '120px',
              '2xl': '140px',
            }}
            zIndex="1"
          />

          <HomeBanner
            // bgColor={bgColor}
            bgColor="gray.700"
            className="josefin-sans"
            color="gray.300"
            subColor="gray.500"
            title="Avery Freeman"
            subTitle="Web Developer"
          />

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

          <StarRatings bgColor={bgColor} fontSize="lg" />

          <HomeCards />

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
        </VStack>
        <Footer />
      </PageChangeAnimator> 
      */}
			</Container>
		</Fragment>
	);
}
