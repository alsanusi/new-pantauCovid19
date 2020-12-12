import { Flex, Text, Box, Image, Button, useColorMode, Grid, Center } from "@chakra-ui/react"

function Layout() {

    return (
        <Flex>
            <Image src="https://res.cloudinary.com/alkautsars/image/upload/v1607532875/icon-192_njzvqa.png" alt="" w="70px" />
            <Box ml="5" alignSelf="center">
                <Text fontSize={30} fontWeight="bold">
                    Pantau Covid19
                    </Text>
                <Text fontSize="sm">Track the spread of the Coronavirus Covid-19 outbreak!</Text>
            </Box>
        </Flex>
    )
}

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Grid templateColumns="repeat(2, 1fr)">
            <Box w="100%">
                <Layout w="100%" />
            </Box>
            <Box w="100%" alignSelf="center">
                <Center justifyContent="flex-end">
                    <Button onClick={toggleColorMode}>
                        Toggle {colorMode === "light" ? "Dark" : "Light"}
                    </Button>
                </Center>
            </Box>
        </Grid>
    )
}