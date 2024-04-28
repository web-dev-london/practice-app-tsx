import { Box, Button, Heading, Text } from "@chakra-ui/react"
import LocalStorage from "./LocalStorage"
import './styles.css'

const LightDarkMode = () => {
    const [theme, setTheme] = LocalStorage('mode', 'dark');

    const handleClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }


    return (
        <>
            <Box
                className="toggle-mode"
                data-theme={theme}
            >
                <Heading
                    as={'h2'}
                    fontSize={'18px'}
                    mb={'2rem'}
                >
                    Light Dark Mode
                </Heading>
                <Text
                    as={'p'}
                    mb={'1rem'}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis magnam, minus explicabo fugiat ipsa quas saepe voluptas perspiciatis consequuntur nam porro! Repellat perspiciatis totam ipsam sapiente laborum provident maxime libero.
                    Voluptatum blanditiis fugiat quas illum rerum, totam sit cupiditate iste. Officia similique ipsam aliquam quaerat, in mollitia culpa eius nostrum recusandae deleniti, perspiciatis deserunt facere, libero quis. Sed, tenetur est!
                </Text>
                <Button
                    as={'button'}
                    colorScheme="purple"
                    onClick={handleClick}
                >
                    Change Mode
                </Button>
            </Box>
        </>
    )
}

export default LightDarkMode