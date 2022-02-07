import { useColorMode, IconButton, Box, Image, Text, Icon, Stack } from "@chakra-ui/react"
import { FaGithub, FaTwitter, FaSpotify } from "react-icons/fa"

const Socials = () => {
    const { colorMode } = useColorMode()
    const cardColour = {
        light: "gray.400",
        dark: "gray.700"
    }

    const borderColour = {
        light: "#171717",
        dark: "white"
    }

    const iconHoverBg = {
        light: "gray.600",
        dark: "gray.300"
    }

    return(
        <>
            <Stack direction="row" spacing='24px'>
                <a target="_blank" href="https://github.com/AlphaLupine" rel="noopener noreferrer">
                <Icon as={FaGithub} boxSize="7vh" _hover={{textColor: iconHoverBg[colorMode]}}/>
                </a>
                <a target="_blank" href="https://twitter.com/ARTIS_Lupine" rel="noopener noreferrer">
                <Icon as={FaTwitter} boxSize="7vh" _hover={{textColor: iconHoverBg[colorMode]}}/>
                </a>
                <a target="_blank" href="https://open.spotify.com/user/pjgvost9miptlyb4ki01h7ss5?si=b8aa0c4cd9304d2b" rel="noopener noreferrer">
                <Icon as={FaSpotify} boxSize="7vh" _hover={{textColor: iconHoverBg[colorMode]}}/>
                </a>
            </Stack>
        </> 
    )
}

export default Socials
