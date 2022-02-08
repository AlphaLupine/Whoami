import React from "react"
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Text,
    Divider,
    Stack
} from "@chakra-ui/react"
import NextLink from "next/link"
import styled from "@emotion/styled"
import ThemeModeSwitch from "./ThemeModeSwitch"
import RandomHueButton from "./RandomHueButton"

const Container = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: "white",
        dark: "#171717"
    }

    const navHoverBg = {
        light: "gray.600",
        dark: "gray.300"
    }

    const navHoverTextBg = {
        light: "white",
        dark: "black"
    }

    const color = {
        light: "black",
        dark: "white"
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s
    `

    return(
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2,6,6]}
                py={2}
                mt={8}
                mb={[0,0,8]}
                mx="auto"
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverBg[colorMode], textColor: navHoverTextBg[colorMode]}}>Home</Button>
                    </NextLink>
                    <NextLink href="/whoami" passHref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverBg[colorMode], textColor: navHoverTextBg[colorMode]}}>Whoami</Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverBg[colorMode], textColor: navHoverTextBg[colorMode]}}>Blog</Button>
                    </NextLink>
                </Box>
                    
                <Box>
                    <ThemeModeSwitch />
                </Box>

            </StickyNav>
            <Flex
                as="main"
                justifyContent= "center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0,4,4]}
                mt={[4,8,8]}
                minWidth="460px"
            >
                {children}
                
            </Flex>

            <Stack
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
            >
            <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                maxWidth="700px"
            >
                <RandomHueButton/>
                <Divider py={2} variant="dashed"></Divider>
                <Text py={2} color={color[colorMode]}>Made with ❤️ by Matthew aka Lupine</Text>
            </Flex>
            </Stack>
            
        </>
    )
}

export default Container
