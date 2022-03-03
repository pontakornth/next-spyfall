import { Button, VStack } from "@chakra-ui/react";

function PlayerList() {
	return (
		<VStack spacing={2}>
			<Button w='full' colorScheme='green'>P1</Button>
			<Button w='full' colorScheme='green'>P2</Button>
			<Button w='full' colorScheme='green'>P3</Button>
		</VStack>
	)
}

export default PlayerList;