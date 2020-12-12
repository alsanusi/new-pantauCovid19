import { Container, SimpleGrid } from "@chakra-ui/react"
import Header from './components/Header';
import Table from './components/Table';

export default function New() {
    return (
        <Container maxW="5xl" pt="5%" >
            <SimpleGrid columns={1} spacing={10}>
                <Header />
                <Table />
            </SimpleGrid>
        </Container>
    )
}