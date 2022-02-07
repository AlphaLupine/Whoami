import { useColorMode, IconButton, Box, Image, Text } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const MyCard = () => {
    const { colorMode } = useColorMode()
    const cardColour = {
        light: "gray.400",
        dark: "gray.700"
    }

    const borderColour = {
        light: "#171717",
        dark: "white"
    }

    

    return(
        <>
        <Box bg={cardColour[colorMode]} w="100%" p={4} display="flex" borderRadius="md">
            <Box display="flex" alignContent="center" boxSize={["30vw","20vw","20vw","12vw", "9vw"]}>
                <Image alt="A picture of me" src="https://imgur.com/o8Qd59z.jpg" borderRadius="full" borderStyle="solid" borderWidth="5px" borderColor={borderColour[colorMode]}/>
            </Box>
            <Box maxWidth="300px" px={4} py={4}>
                <Text fontWeight="bold">Matthew Duff,</Text>
                <Text>Age: 19</Text>
                <Text>From: Northern Ireland</Text>
                <Text>Uses: JavaScript/TypeScript</Text>
                <Text>Career: In Progress</Text>
            </Box>
        </Box>
        </>
    )
}

export default MyCard
