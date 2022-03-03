import { Box, Button, Text, VStack } from "@chakra-ui/react";
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
				<Button colorScheme='green'>Start Timer</Button>
			</VStack>
		</>
	)
}

export default Play