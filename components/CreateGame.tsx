import { VStack, Input, SimpleGrid, Button, FormLabel, Select } from "@chakra-ui/react";

function CreateGame() {
	return (
		<VStack>
			<Input></Input>
			<Input></Input>
			<SimpleGrid columns={2} gap={2} w='full'>
				<Button colorScheme='blue'>Add player</Button>
				<Button colorScheme='red'>Delete player</Button>
			</SimpleGrid>
			<FormLabel htmlFor='duration'>Duration</FormLabel>
			<Select id='duration' placeholder='Each round duration'>
				<option value={360}>6:00</option>
				<option value={420}>7:00</option>
				<option value={480}>8:00</option>
			</Select>
			<Button colorScheme='green' w='full'>Start game</Button>
		</VStack>
	)
}

export default CreateGame