import { useColorMode, IconButton } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const ThemeModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColour = {
        light: "black",
        dark: "white"
    }
    return(
        <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}
            onClick={toggleColorMode}
            color={iconColour[colorMode]}
        />
    )
}

export default ThemeModeSwitch
