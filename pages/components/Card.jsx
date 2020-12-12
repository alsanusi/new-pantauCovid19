import { Flex, Text, Box, Image, Grid, GridItem } from "@chakra-ui/react"
import { MoonIcon } from '@chakra-ui/icons'

function Layout({ ...props }) {

    return (
        <Flex maxW="100%" maxW="lg" shadow="md" alignItems="center" padding="10px" borderRadius="10px">
            <Box w="80%" ml="5">
                <Text fontSize={12}>
                    {props.title}
                </Text>
                <Text fontSize={30} fontWeight="bold">
                    {props.amount}
                </Text>
            </Box>
            <Image src={props.icon} w="12%" />
        </Flex>
    )
}

export default function CardFix() {

    const cards = [
        {
            id: 1,
            title: "TOTAL KASUS",
            amount: "200,000",
            icon: "https://res.cloudinary.com/alkautsars/image/upload/v1607797377/pantaucovid19/icons8-hospital-room-100_uxsiai.png"
        },
        {
            id: 2,
            title: "TOTAL SEMBUH",
            amount: "100,000",
            icon: "https://res.cloudinary.com/alkautsars/image/upload/v1607797298/pantaucovid19/icons8-organ-transplantation-100_q3gqot.png"
        },
        {
            id: 3,
            title: "TOTAL MENINGGAL",
            amount: "300,000",
            icon: "https://res.cloudinary.com/alkautsars/image/upload/v1607797298/pantaucovid19/icons8-skull-100_xn2jah.png"
        },
        {
            id: 4,
            title: "KASUS HARI INI",
            amount: "600,000",
            icon: "https://res.cloudinary.com/alkautsars/image/upload/v1607797297/pantaucovid19/icons8-hospital-wheel-bed-100_orwwfc.png"
        }
    ]

    return (
        <Grid
            templateColumns="repeat(4, 1fr)"
            gap={4}
        >
            {
                cards.map(x => (
                    <GridItem key={x.id} colSpan={[4, 4, 2, 2]}>
                        <Layout title={x.title} amount={x.amount} icon={x.icon} />
                    </GridItem>
                ))
            }
        </Grid>
    )
}