import { Table, TableCaption, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react"

export default function New() {
    return (
        <Table variant="simple">
            <TableCaption><b>10 Provinsi</b> Dengan Angka Covid Tertinggi di Indonesia</TableCaption>
            <Thead>
                <Tr>
                    <Th>Provinsi</Th>
                    <Th isNumeric>Kasus</Th>
                    <Th isNumeric>Sembuh</Th>
                    <Th isNumeric>Meninggal</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>inches</Td>
                    <Td isNumeric>25.4</Td>
                    <Td isNumeric>25.4</Td>
                    <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                    <Td>feet</Td>
                    <Td isNumeric>25.4</Td>
                    <Td isNumeric>25.4</Td>
                    <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                    <Td>yards</Td>
                    <Td isNumeric>25.4</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>25.4</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}