import { Flex, Text, Box, Image, IconButton, useColorMode, Center, Grid, GridItem } from "@chakra-ui/react"
import { MoonIcon } from '@chakra-ui/icons'

function Layout() {

    return (
        <Flex>
            <Image src="https://res.cloudinary.com/alkautsars/image/upload/v1607532875/icon-192_njzvqa.png" alignSelf="center" alt="PantauCovid19" w={["20%", "20%", "10%", "10%"]} h="10%" />
            <Box ml="5" alignSelf="center">
                <Text fontSize={20} fontWeight="bold">
                    Pantau Covid19
                </Text>
                <Text fontSize="sm">Jaga Jarak, Cuci Tangan dan Pakai Masker.</Text>
            </Box>
        </Flex>
    )
}

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            <GridItem colSpan={3}>
                <Layout />
            </GridItem>
            <GridItem colStart={4} alignSelf="center">
                <Center>
                    <IconButton aria-label="Search database" icon={<MoonIcon />} onClick={toggleColorMode} />
                </Center>
            </GridItem>
        </Grid>
    )
}