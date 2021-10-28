import React, { Fragment } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import HappyPlant from '../assets/HappyPlant';
// import MoneyQuestion from '../assets/vectors/MoneyQuestion';

const QuoteRequestHeader = () => (
  <Fragment>
    <Flex align="center" direction="column">
      <Box>
        <HappyPlant height={56} width={56} />
        <Text fontsize={{ base: '5x', md: '7x' }}>
          Let's get you some answers!
        </Text>
      </Box>
    </Flex>
  </Fragment>
);

export default QuoteRequestHeader;
