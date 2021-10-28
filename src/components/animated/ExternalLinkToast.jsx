import {
	Box,
	Button,
	Heading,
	HStack,
	Spinner,
	Text,
	VStack,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';

export default (props) => {
	const bgColor = useColorModeValue('gray.300', 'gray.600');
	const url = '#';
	const target = '_blank';
	const rel = 'noopener noreferrer';
	const toast = useToast();
	return (
		<VStack>
			<Button
				border="1px solid rgba(179,98,0,0.5)"
				colorScheme="blue"
				size="lg"
				variant="solid"
				onClick={() => {
					toast({
						position: 'top-right',
						render: () => (
							<Box
								align="center"
								color="black"
								p={3}
								bg="green.300"
								border="3px solid #333"
							>
								<Heading fontSize="lg" as="span">
									Loading article from LegalZoom
								</Heading>
								<Box>
									<Spinner
										thickness="4px"
										speed="0.65s"
										emptyColor="gray.200"
										color="blue.500"
										size="xl"
									/>
								</Box>
								<Text>This window will remain open</Text>
							</Box>
						),
					});
					setTimeout(() => {
						window.open(url, target, rel);
					}, 3000);
				}}
			>
				<HStack spacing={3}>
					<Box as="span">{questionIcon}</Box>
					<Text className="josefin-sans">Do I need a Notary?</Text>
				</HStack>
			</Button>
			<Text as="span" bg={bgColor} m={0} p={1} borderRadius="lg">
				(Link to LegalZoom article)
			</Text>
		</VStack>
	);
};
