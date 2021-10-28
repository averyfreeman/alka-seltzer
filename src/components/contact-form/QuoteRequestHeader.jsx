import { Fragment } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
// import HappyPlant from '../assets/HappyPlant';
import MoneyQuestion from 'components/icons/MoneyQuestion';

const QuoteRequestHeader = (props) => (
	<Fragment>
		<Flex align="center" direction="column">
			<Box>
				<MoneyQuestion height={56} width={56} />
				<Text color={props.textColor} fontsize={{ base: '5x', md: '7x' }}>
					Let's get you some answers!
				</Text>
			</Box>
		</Flex>
	</Fragment>
);

export default QuoteRequestHeader;
