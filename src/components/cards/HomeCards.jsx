import React from 'react';
import { useEffect } from 'react';
import { SimpleGrid, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserCog,
	faIdCard,
	faMobileAlt,
	faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import HomeCard from 'components/cards/HomeCard';
import useDimensions from 'hooks/useDimensions';

const calcIconSize = (width, iconName) => {
	let iconSize = '';
	if (width > 575) {
		iconSize = '4x';
	} else iconSize = '3x';
	const icon = <FontAwesomeIcon icon={iconName} size={iconSize} />;
	return icon;
};
let stackIcon = '';
let mapIcon = '';
let plantIcon = '';
let resumeIcon = '';

export default function HomeCards(props) {
	const { height, width } = useDimensions();
	useEffect(() => {
		stackIcon = calcIconSize(width, faUserCog);
		mapIcon = calcIconSize(width, faMobileAlt);
		resumeIcon = calcIconSize(width, faIdCard);
		plantIcon = calcIconSize(width, faSeedling);
		console.log(height, width);
	}, [height, width]);

	return (
		<VStack>
			<SimpleGrid columns={{ base: 1, md: 2, '2xl': 4 }} spacing="5">
				<HomeCard
					title="About"
					desc="Who am I, and why am I doing this?"
					icon={stackIcon}
					href="/about"
				/>
				<HomeCard
					title="Projects"
					desc="What's this gardening app I keep hearing about?"
					icon={mapIcon}
					href="/projects"
				/>
				<HomeCard
					title="Garden Photos"
					desc="A ton of photos I took, in a masonry grid layout"
					icon={plantIcon}
					href="/garden"
				/>
				<HomeCard
					title="Resume"
					desc="A resume page I whipped up using React"
					icon={resumeIcon}
					href="/resume"
				/>
			</SimpleGrid>
		</VStack>
	);
}
