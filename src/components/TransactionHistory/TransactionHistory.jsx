import { Table, Thead,TableTd, TableTr } from "./TransactionHistory.styled"


export const TransactionHistory = ({items}) => {

    return (
        <Table>
  <Thead>
    <TableTr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TableTr>
  </Thead>
{items.map (({id, type, amount, currency})=>(
    <tbody>
    <tr key={id}>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </tr>

  </tbody>


))
}



</Table>
    )
}