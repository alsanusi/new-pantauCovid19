import { Container, Stack } from "@chakra-ui/react"
import Header from './components/Header';
import Card from './components/Card';
import Table from './components/Table';

export default function New() {
    return (
        <Container w={["lg", "lg", "5xl", "5xl"]} pt="10">
            <Stack spacing={10}>
                <Header />
                <Card />
                <Table />
            </Stack>
        </Container>
    )
}