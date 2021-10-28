import {
	Box,
	// Image,
	// Stack,
	Text,
} from '@chakra-ui/react';

import PageChangeAnimator from '../components/PageChangeAnimator';
import OfferAlertModal from '../pageComponents/OfferAlertModal';
import ContactTable from '../pageComponents/ContactTable';
import BackdropSpacing from '../pageElements/BackdropSpacing';
import DarkDivider from '../pageElements/DarkDivider';
import Footer from '../pageElements/Footer';
import Header from '../pageElements/Header';
import LightDivider from '../pageElements/LightDivider';
import Paper from '../pageElements/Paper';
import RequestArrow from '../pageElements/RequestArrow';
import SecondaryHeader from '../pageElements/SecondaryHeader';

const colorProfile = 'blue';

export default function Resume(props) {
	// const { offerModalDisplayed, setOfferModalDisplayed } = props;
	return (
		<div>
			<Box>
				<Text>
					This is the Resume page
					{/* 
		<PageChangeAnimator>
			<BackdropSpacing>
				<OfferAlertModal
					offerModalDisplayed={offerModalDisplayed}
					setOfferModalDisplayed={setOfferModalDisplayed}
				/>

				<Paper>
					<Header>Contact Linda</Header>
					<Box
						label="spacer"
						height={{ base: '1rem', md: '3rem' }}
						minW="100%"
						opacity="0"
					/>
					<DarkDivider />

					<Stack align="center" direction="column" flex={1} justify="center">
						<Image height="60%" width="60%" src="/rotary-cell-phone.png" />
					</Stack>

					<SecondaryHeader>Contact Info</SecondaryHeader>
					<LightDivider />
					<Box
						label="spacer"
						height={{ base: '0.4rem', md: '1.2rem' }}
						minW="100%"
						opacity="0"
					/>
					<Stack direction={{ base: 'row', sm: 'column' }} align="center">
						<ContactTable colorProfile={colorProfile} />
					</Stack>
					<Box
						label="spacer"
						height={{ base: '0.4rem', md: '1.2rem' }}
						minW="100%"
						opacity="0"
					/>
					<DarkDivider />
					<Box label="spacer" height="4rem" minW="100%" opacity="0" />

					<RequestArrow className="carter-one" m={5} p={3}>
						...or use the Quote Request Button
					</RequestArrow>
				</Paper>
				<Footer />
			</BackdropSpacing>
		</PageChangeAnimator>
     */}
				</Text>
			</Box>
		</div>
	);
}
