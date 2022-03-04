import { Box, SimpleGrid } from "@chakra-ui/react";

const placeholders = Array(4).fill("Placeholder")

function PlacesTable() {
	// TODO: Implement 
	return (
		<SimpleGrid columns={2}>
			{placeholders.map((p, i) =>
				<Box borderBottom='2px' borderColor='gray.300' textAlign='center' key={i}>Placeholder 1</Box>
			)}
		</SimpleGrid>
	)
}

export default PlacesTable;