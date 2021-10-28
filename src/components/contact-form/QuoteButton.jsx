/* eslint-disable no-unused-vars */
import React from 'react';
import {
	Box,
	IconButton,
	Tooltip,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
// import QuestionBubble from '../assets/vectors/QuestionBubble';
import QuoteRequestModal from 'components/contact-form/QuoteRequestModal';
import QuoteRequestForm from 'components/contact-form/QuoteRequestForm';
import QuoteRequestHeader from 'components/contact-form/QuoteRequestHeader';

const QuoteButton = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const outerHeight = props.height * 7;
	const outerWidth = props.width * 7;

	// const bgColor = useColorModeValue('gray.400', 'gray.800');
	// const circleBgColor = useColorModeValue('gray.500', 'black');
	const textColor = useColorModeValue('black', 'gray.200');

	return (
		<Box>
			<Box
				border="3px solid black"
				borderRadius="full"
				bottom={5}
				boxShadow="2px 2px 8px #333"
				opacity={0.7}
				position="fixed"
				right={7}
				zIndex={3}
				transform="scale(0.97)"
				transition="all 0.3s ease"
				_hover={{
					opacity: 1,
					transform: 'scale(1.03)',
				}}
			>
				{isOpen && (
					<QuoteRequestModal
						footer={`Thanks for contacting me!`}
						header={<QuoteRequestHeader textColor={textColor} />}
						isOpen={isOpen}
						onClose={onClose}
						preserveScrollBarGap={true}
					>
						<QuoteRequestForm textColor={textColor} />
					</QuoteRequestModal>
				)}

				<Tooltip
					hasArrow
					aria-label="leave a message"
					bg="purple.500"
					borderRadius="full"
					boxShadow="4px 4px 12px black"
					color="white"
					fontSize={{ base: '1rem', md: '1.2rem' }}
					fontWeight="700
					"
					label={`leave a message`}
					placement="left-start"
					sx={{
						WebkitTextStrokeWidth: '0.2px',
						WebkitTextStrokeColor: 'rgba(55, 55, 55, 1)',
					}}
					textShadow="1px 1px 3px black"
				>
					<IconButton
						aria-label="leave a message (after the tone)"
						borderRadius="full"
						colorScheme="blue"
						height={`${outerHeight}px`}
						onClick={onOpen}
						opacity="inherit"
						padding={3}
						width={`${outerWidth}px`}
						transform="inherit"
					>
						<FontAwesomeIcon
							icon={faAt}
							transform={{
								height: props.height,
								width: props.width,
								// rotate: -180,
							}}
							size="3x"
						/>
						{/* <QuestionBubble height={props.height} width={props.width} /> */}
						{/* <ESign height={props.height} width={props.width} /> */}
					</IconButton>
				</Tooltip>
			</Box>
		</Box>
	);
};

export default QuoteButton;
