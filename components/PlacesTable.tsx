import { Box, SimpleGrid } from "@chakra-ui/react";

function PlacesTable() {
	return (
		<SimpleGrid columns={2}>
			<Box textAlign='center'>Placeholder 1</Box>
			<Box textAlign='center'>Placeholder 2</Box>
			<Box textAlign='center'>Placeholder 3</Box>
			<Box textAlign='center'>Placeholder 4</Box>
		</SimpleGrid>
	)
}

export default PlacesTable;