import Link from 'next/link';
import { Fragment } from 'react';
import { Circle, Square, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

// TODO: add tooltips for menu buttons

export default function NavHeadHomeBtn(props) {
	const circleBgColor = useColorModeValue('gray.500', 'black');

	const bgColor = useColorModeValue('gray.400', 'gray.800');
	const textColor = useColorModeValue('black', 'gray.200');
	return (
		<Fragment>
			<Link href="/home">
				<Square
					bgColor={bgColor}
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
					<Circle
						bg={circleBgColor}
						height="4rem"
						width="4rem"
						color={textColor}
					>
						<FontAwesomeIcon icon={faHouseUser} size="3x" />
					</Circle>
				</Square>
			</Link>
		</Fragment>
	);
}
