import {
	Box,
	Circle,
	IconButton,
	Square,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { cloudMoonIcon, cloudSunIcon } from 'components/nav/ColorSwitchIcons';

const NavColorSwitchButton = ({ fontSize, icon, label, ml, to, ...rest }) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	// const text = useColorModeValue('Dark', 'Light');
	const SwitchIcon = useColorModeValue(cloudMoonIcon, cloudSunIcon);
	const bgColor = useColorModeValue('gray.400', 'gray.800');
	const circleBgColor = useColorModeValue('gray.500', 'black');
	const textColor = useColorModeValue('black', 'gray.200');
	console.log(text);
	return (
		<Box>
			<Square
				flex="1"
				direction="row"
				alignItems="center"
				justify="center"
				bgColor={bgColor}
				borderTop="3px solid #666"
				borderRight="3px solid #333"
				borderBottom="3px solid #333"
				borderLeft="3px solid #666"
				boxShadow="2px 2px 4px #333"
				height="3.5rem"
				width={{ base: '4rem', lg: '10rem' }}
				opacity="0.9"
				_hover={{
					cursor: 'pointer',
					transform: 'scale(1.005)',
					opacity: 1,
				}}
				sx={{
					transition: 'all 0.2s ease',
				}}
				onClick={toggleColorMode}
				{...rest}
			>
				<Circle bg={circleBgColor} height="3.1rem" width="3.1rem">
					<IconButton
						size={{ base: 'sm', md: 'md' }}
						fontSize={{ base: '3xl', md: '5xl' }}
						aria-label={`Switch to ${text} mode`}
						variant="ghost"
						color={textColor}
						icon={<SwitchIcon />}
					/>
				</Circle>
				<Text
					color={textColor}
					display={{ base: 'none', lg: 'inline-block' }}
					fontSize={fontSize}
					ml={ml}
				>
					{' '}
					{text}
				</Text>
			</Square>
		</Box>
	);
};

export default NavColorSwitchButton;
