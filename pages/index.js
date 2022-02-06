import Head from 'next/head'
import Container from '../components/Container'
import { Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'

export default function Index() {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

  const phrases = [
    'Howdy Partner 🤠',
    'Hello Friend :D',
    'Hey Stranger!',
    'Hi Person :)',
    'Ahoy Matey!',
    "Greeting's Fellow",
    'Salutations Earthling'
  ]
  const {colorMode} = useColorMode()
  const secondaryColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Head>
        <title>Home - whoami</title>
      </Head>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mb={2}>
            <Typewriter
              onInit={(writer) => {
                  async function type(element) {
                    writer.typeString(phrases[element]).pauseFor(2500).deleteAll().start()
                    await sleep(3500)
                    type(element === phrases.length ? 0 : element+1)
                  }
                  type(0)
              }}
            />
          </Heading>
        </Flex>
      </Stack>

      <Stack
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
      >
      <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
      >
        <Text color={secondaryColor[colorMode]}>The name is Matthew, nice to meet you!</Text>
      </Flex>
      </Stack>


    </Container>
  )
}
