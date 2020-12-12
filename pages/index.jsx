import { Container, Stack } from "@chakra-ui/react"
import Header from './components/Header';
import Card from './components/Card';
import Table from './components/Table';

export default function New() {
    return (
        <Container width={["fit-content", "fit-content", "4xl", "4xl"]} pt="5%" >
            <Stack spacing={10}>
                <Header />
                <Card />
                <Table />
            </Stack>
        </Container>
    )
}