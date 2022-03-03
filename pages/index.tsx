import { Button, Container, Flex, FormLabel, Heading, Input, Select, SimpleGrid, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spyfall Yeah</title>
      </Head>
      <Container mx='auto' py={8}>
        <Heading mb={4} textAlign='center' as='h1'>Spyfall</Heading>
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
      </Container>
    </>)
}

export default Home
