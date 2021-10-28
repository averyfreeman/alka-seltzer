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
		// console.log(height, width);
	}, [height, width]);

	return (
		<VStack>
			<SimpleGrid columns={{ base: 1, md: 2, '2xl': 4 }} spacing="5">
				<HomeCard
					title="About"
					desc="What I do, why I do it"
					icon={stackIcon}
					href="/about/index"
				/>
				<HomeCard
					title="Projects"
					desc="Showcase of certain projects (other than GitHub)"
					icon={mapIcon}
					href="/projects/index"
				/>
				<HomeCard
					title="Blog"
					desc="How-to articles, rendered by React"
					icon={plantIcon}
					href="/garden/index"
				/>
				<HomeCard
					title="Resume"
					desc="Seeing if I could whip up a resume using React"
					icon={resumeIcon}
					href="/resume/index"
				/>
			</SimpleGrid>
		</VStack>
	);
}
