import Head from 'next/head'
import Container from '../components/Container'
import MyCard from '../components/MyCard'
import { Flex, Heading, Stack, Text, Image, useColorMode } from '@chakra-ui/react'

export default function Index() {

  const {colorMode} = useColorMode()
  const secondaryColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Head>
        <title>Whoami - whoami</title>
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
          <Heading mb={2}>¿Whoami?</Heading>
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
        <MyCard/>
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
      <Text align='center' color={secondaryColor[colorMode]}>This is the web presence of myself (Matthew), an individual based in Northern Ireland with a burning passion to learn any and all things related to tech. A passion that I very much intend to keep a 🔥blaze🔥 - that's all for now - one last question though... Who are you?</Text>
      </Flex>
      </Stack>

    </Container>
  )
}
