import { Button, Container, Flex, FormLabel, Heading, Input, Select, SimpleGrid, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import CreateGame from '../components/CreateGame'
import Play from '../components/Play'
import PlayerList from '../components/PlayerList'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spyfall Yeah</title>
      </Head>
      <Container mx='auto' py={8}>
        <Heading mb={2} textAlign='center' as='h1'>Spyfall</Heading>
        <Heading mb={4} textAlign='center' as='h2' color='red.600'>NOT PLAYABLE YET</Heading>
        <CreateGame />
      </Container>
    </>)
}

export default Home
