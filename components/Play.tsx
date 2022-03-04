import { Box, Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import PlacesTable from "./PlacesTable";
import PlayerList from "./PlayerList";

function Play() {
	return (
		<>
			<PlayerList />
			<Box mt={8}>
				<PlacesTable />
			</Box>
			<VStack mt={4} spacing={2}>
				<Text>99:99</Text>
				<SimpleGrid columns={2} gap={4}>
					<Button colorScheme='green'>Start Timer</Button>
					<Button colorScheme='red'>Stop the game</Button>
				</SimpleGrid>
			</VStack>
		</>
	)
}

export default Play