import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function HomeBanner(props) {
	return (
		<Box
			mb="0"
			px="3"
			py="7"
			align="center"
			minW="100vw"
			bgColor={props.bgColor}
			borderWidth="3px"
			borderRadius="lg"
			textShadow="5px 5px 8px black"
			overflow="hidden"
		>
			<Box m="0">
				<Heading
					m="0"
					mb="0"
					as="h1"
					size="xl"
					sx={{ zIndex: 10 }}
					fontSize={props.titleSize}
					color={props.color}
					fontWeight={700}
					className={props.className}
					{...props}
				>
					{props.title}
					<Box>
						<Text color={props.subColor} as="i" fontSize={props.subTitleSize}>
							{props.subTitle}
						</Text>
					</Box>
				</Heading>
			</Box>
		</Box>
	);
}
