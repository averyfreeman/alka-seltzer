import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { randomFont } from 'lib/randomFont';
import PageChangeAnimator from 'components/PageChangeAnimator';
import AboutBottomButtons from 'pageComponents/AboutBottomButtons';
import OfferAlertModal from 'pageComponents/OfferAlertModal';
import BackdropSpacing from 'pageElements/BackdropSpacing';
import DarkDivider from 'pageElements/DarkDivider';
import Footer from 'pageElements/Footer';
import Paper from 'pageElements/Paper';
import HeaderWHeadshot from 'pageElements/HeaderWHeadshot';
import LightDivider from 'pageElements/LightDivider';
// import MediaObject from 'pageComponents/MediaObject';
import Paragraph from 'pageElements/Paragraph';
import RequestArrow from 'pageElements/RequestArrow';
import SecondaryHeader from 'pageElements/SecondaryHeader';

const About = props => {
  const { offerModalDisplayed, setOfferModalDisplayed } = props;
  /* eslint-disable no-unused-vars */
  let location = useLocation();
  return (
    <PageChangeAnimator>
      <BackdropSpacing>
        <OfferAlertModal
          offerModalDisplayed={offerModalDisplayed}
          setOfferModalDisplayed={setOfferModalDisplayed}
        />

        <Paper>
          <HeaderWHeadshot label="Avery Freeman" />
          <Box
            label="spacer"
            height={{ base: '1rem', md: '3rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>aka Gandalf the Unix Greybeard</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          {/* <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            I'm Avery, and I like computers. I build servers, and websites, and
            bash scripts and stuff.
          </Paragraph> */}
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            The single most important invention since the transistor has been
            the hypervisor.
          </Paragraph>
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            And cheese. Cheese is new, right?
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Bloviation:</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            ...a style of empty, pompous, political speech which originated in
            Ohio and was used by US President Warren G. Harding, who described
            it as "the art of speaking for as long as the occasion warrants, and
            saying nothing"
          </Paragraph>
          {/* <MediaObject
            image="/driving-cropped.jpg"
            // <Image
            //   alignSelf="right"
            //   alt="Business meeting"
            //   borderRadius="lg"
            //   float="right"
            //   h={{ base: '7rem', sm: '9rem', md: '11rem', lg: '13rem' }}
            //   fit="contain"
            //   ml={5}
            //   src="/signing-dark.jpg"
            // />
          >
            <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
              Here, have some pirate ipsum:
            </Paragraph>
            <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
              Ahoy, prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper chantey doubloon starboard grog black jack gangway
              rutters.
            </Paragraph>
            <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
              Deadlights jack lad schooner scallywag dance the hempen jig
              carouser broadside cable strike colors. Bring a spring upon her
              cable holystone blow the man down spanker Shiver me timbers to go
              on account lookout wherry doubloon chase.
            </Paragraph>
            <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
              Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet
              transom heave to. Trysail Sail ho Corsair red ensign hulk smartly
              boom jib rum gangway. Case shot Shiver me timbers gangplank crack
              Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke
              jib scourge of the seven seas boatswain schooner gaff booty Jack
              Tar transom spirits.
            </Paragraph>
          </MediaObject> */}
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Always Cheesing</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }} textAlign="start">
            <Image
              alignSelf="flex-start"
              alt="On the move"
              borderRadius="lg"
              float="left"
              h={{ base: '7rem', sm: '9rem', md: '11rem', lg: '13rem' }}
              fit="contain"
              mr={5}
              src="/aerial-car-forest-cropped.jpg"
            />
            words words words words words words words words words words words
            words words words words words words words words words words words
            words words words
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Other Interests</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            When I'm not helping people attest to their signature, I enjoy
            entertaining, travel, and music.
          </Paragraph>
          <Flex direction="column" align="center" justify="center">
            <Image
              alt="Qualified homebuyers"
              borderRadius="lg"
              height="50%"
              objectFit="cover"
              src="/qualified-homebuyers.png"
              width="60%"
            />
            <Text
              // className="carter-one"
              // className={fontCycler(fontsArr, i)}
              className={randomFont}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              p={5}
            >
              Ready to give me a call?
            </Text>
          </Flex>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>More Info</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <AboutBottomButtons colorProfile="blue" />
          <Box
            label="spacer"
            height={{ base: '2rem', md: '4rem' }}
            minW="100%"
            opacity="0"
          />
          <RequestArrow className="carter-one" m={5} p={3}>
            If you have any questions, please visit{' '}
            <Box as="span" color="#1d6eb9">
              <Link to="/contact">my contact page</Link>
            </Box>{' '}
            or use the Quote Request Button
          </RequestArrow>
        </Paper>
        <Footer />
      </BackdropSpacing>
    </PageChangeAnimator>
  );
};

export default About;
