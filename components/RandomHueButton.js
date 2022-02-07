import { useColorMode, Button, useToast, Box, Text } from "@chakra-ui/react"
import { GoLightBulb } from "react-icons/go"

const RandomHueButton = () => {
    const { colorMode } = useColorMode()
    const toast = useToast()
    const toastColour = {
        light: "gray.400",
        dark: "gray.700"
    }

    const toastTextColour = {
        light: "black",
        dark: "white"
    }

    const buttonColour = {
        light: "black",
        dark: "white"
    }

    const buttonHoverTextBg = {
        light: "white",
        dark: "black"
    }

    const buttonHoverBg = {
        light: "gray.600",
        dark: "gray.300"
    }

    return(
        <Button
            as="a"
            color={buttonColour[colorMode]}
            variant="outline"
            _hover={{backgroundColor: buttonHoverBg[colorMode], textColor: buttonHoverTextBg[colorMode]}}
            onClick={() => toast({
                position: "bottom-left",
                render: () => (
                    <Box borderRadius="full" color={toastTextColour[colorMode]} bg={toastColour[colorMode]}>
                        <Text px={2}>This feature has not yet been implemented</Text>
                    </Box>
                ),
            })}
        >Change My Phillips Hue Colour</Button>
    )
}

export default RandomHueButton
