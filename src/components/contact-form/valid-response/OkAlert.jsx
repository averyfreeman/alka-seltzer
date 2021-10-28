import React, { Fragment } from 'react';
import { Alert, AlertDescription, CloseButton } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeScaleYWrapper from 'components/animated/FadeScaleYWrapper';

export default function OkAlert(props) {
	return (
		<Fragment>
			<AnimatePresence key={props.errorKey}>
				<FadeScaleYWrapper duration={0.3}>
					<Alert
						borderRadius="lg"
						color={props.color}
						fontSize={{ base: 'lg', md: 'xl' }}
						{...props}
					>
						<FontAwesomeIcon
							color={props.iconColor}
							icon={props.icon}
							size={props.size}
						/>
						<AlertDescription color={props.color} ml={3}>
							{props.desc || 'OK!'}
						</AlertDescription>
						<CloseButton
							color={props.color}
							position="absolute"
							right="8px"
							top="8px"
							onClick={props.handleIsVisible}
						/>
					</Alert>
				</FadeScaleYWrapper>
			</AnimatePresence>
		</Fragment>
	);
}
