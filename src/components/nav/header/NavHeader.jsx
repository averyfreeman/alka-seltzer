import {
	Circle,
	Container,
	HStack,
	Square,
	useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import {
	faUserCog,
	faHouseUser,
	faSeedling,
	faIdCard,
	faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import NavButton from 'components/nav/header/NavButton';
import NavColorSwitchButton from 'components/nav/header/NavColorSwitchButton';

// TODO: add tooltips for menu buttons

export default function MenuHeader(props) {
	const bgColor = useColorModeValue('gray.700', 'gray.600');
	const homeBgColor = useColorModeValue('gray.400', 'gray.800');
	const circleBgColor = useColorModeValue('gray.500', 'black');
	return (
		<Container
			bgColor={bgColor}
			m={0}
			minW="100vw"
			// keep vertical
		>
			<HStack
				align="center"
				direction="row"
				height="4rem"
				justify="space-between"
				maxW="95%"
			>
				<NavLink to="/home">
					<Square
						bg={homeBgColor}
						ml={0}
						p={3}
						borderTop="3px solid #666"
						borderRight="3px solid #333"
						borderBottom="3px solid #333"
						borderLeft="3px solid #666"
						boxShadow="2px 2px 4px #333"
						height="4rem"
						opacity="0.9"
						_hover={{
							opacity: 1,
							transform: 'scale(1.001)',
						}}
						sx={{
							transition: 'all 0.2s ease',
						}}
					>
						<Circle bg={circleBgColor} height="4rem" width="4rem">
							<FontAwesomeIcon icon={faHouseUser} size="3x" />
						</Circle>
					</Square>
				</NavLink>
				<NavButton
					className="cute-font"
					fontSize="2xl"
					icon={<FontAwesomeIcon icon={faUserCog} size="2x" />}
					label="About"
					ml={{ base: 0, md: 2 }}
					to="/about"
					width={{ base: '5rem', lg: '10rem' }}
				/>
				<NavButton
					className="cute-font"
					fontSize="2xl"
					icon={<FontAwesomeIcon icon={faMobileAlt} size="2x" />}
					label="Projects"
					ml={0}
					to="/projects"
					width={{ base: '5rem', lg: '10rem' }}
				/>
				<NavButton
					className="cute-font"
					fontSize="2xl"
					icon={<FontAwesomeIcon icon={faSeedling} size="2x" />}
					label="Garden"
					ml={{ base: 0, md: 2 }}
					to="/garden"
					width={{ base: '5rem', lg: '10rem' }}
				/>
				<NavButton
					className="cute-font"
					fontSize="2xl"
					icon={<FontAwesomeIcon icon={faIdCard} size="2x" />}
					label="Resume"
					ml={{ base: 0, md: 2 }}
					to="/resume"
					width={{ base: '5rem', lg: '10rem' }}
				/>
				<NavColorSwitchButton
					className="cute-font"
					fontSize="2xl"
					label="Mode"
					ml={{ base: 0, md: 4 }}
				/>
			</HStack>
		</Container>
	);
}
