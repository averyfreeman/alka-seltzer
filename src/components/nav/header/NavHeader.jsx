import Link from 'next/link';
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
import NavHeadHomeBtn from 'components/nav/header/NavHeadHomeBtn';
import NavHeadBtn from 'components/nav/header/NavHeadBtn';
import NavColorSwitchButton from 'components/nav/header/NavColorSwitchButton';

// TODO: add tooltips for menu buttons

export default function NavHeader(props) {
	const bgColor = useColorModeValue('gray.700', 'gray.600');
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
				<NavHeadHomeBtn />
				<NavHeadBtn
					className="cute-font"
					fontSize="2xl"
					icon={<FontAwesomeIcon icon={faUserCog} size="2x" />}
					label="About"
					ml={{ base: 0, md: 2 }}
					to="/about/page"
					width={{ base: '5rem', lg: '10rem' }}
				/>
				<NavHeadBtn
					className="cute-font"
					fontSize="2xl"
					icon={<FontAwesomeIcon icon={faMobileAlt} size="2x" />}
					label="Projects"
					ml={0}
					to="/projects/page"
					width={{ base: '5rem', lg: '10rem' }}
				/>
				<NavHeadBtn
					className="cute-font"
					fontSize="2xl"
					icon={<FontAwesomeIcon icon={faSeedling} size="2x" />}
					label="Blog"
					ml={{ base: 0, md: 2 }}
					to="/blog/page"
					width={{ base: '5rem', lg: '10rem' }}
				/>
				<NavHeadBtn
					className="cute-font"
					fontSize="2xl"
					icon={<FontAwesomeIcon icon={faIdCard} size="2x" />}
					label="Resume"
					ml={{ base: 0, md: 2 }}
					to="/resume/page"
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
