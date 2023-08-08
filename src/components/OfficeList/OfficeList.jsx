import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function OfficeList({ warehouses }) {
  console.log(warehouses);

  const columns = [
    { id: 'number', label: 'Відділення/поштомат', minWidth: 170 },
    { id: 'address', label: 'Адреса', minWidth: 100 },
    {
      id: 'schedule',
      label: 'Графік роботи',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'weight',
      label: 'Вага до',
      minWidth: 170,
      align: 'right',
    },
  ];

  function createData(number, address, schedule, weight) {
    return { number, address, schedule, weight };
  }

  const rows = warehouses
    ? warehouses.map(office => {
        return createData(
          `№ ${office.Number}`,
          `${office.ShortAddress}`,
          `${office.Schedule}`,
          `${office.PlaceMaxWeightAllowed}`
        );
      })
    : [];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
            //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.number}
                  >
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
    </Paper>
  );
}

