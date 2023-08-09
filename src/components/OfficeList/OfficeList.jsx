import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function OfficeList({ warehouses }) {

  const columns = [
    { id: 'number', label: 'Відділення/поштомат', maxWidth: 170 },
    { id: 'address', label: 'Адреса', minWidth: 100 },
    {
      id: 'schedule',
      label: 'Графік роботи',
    //   minWidth: 170,
      align: 'right',
    },
    {
      id: 'weight',
      label: 'Вага до',
    //   minWidth: 170,
      align: 'right',
    },
  ];

  function createData(number, address, schedule, weight) {
    return { number, address, schedule, weight };
    }
    
  const DaySchedule = (schedule) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const today = new Date().getDay();
    const todaySchedule = schedule[daysOfWeek[today]];
    const tomorrowSchedule = schedule[daysOfWeek[(today + 1) % 7]];
    return (
`Сьогодні: ${todaySchedule}\nЗавтра: ${tomorrowSchedule}`
    );
    };
    
  const rows = warehouses
      ? warehouses.map(office => {
              const weightAllowed =
                office.TotalMaxWeightAllowed !== "0"
                  ? office.TotalMaxWeightAllowed
                  : office.PlaceMaxWeightAllowed;
          const schedule = DaySchedule(office.Schedule);
        return createData(
          `№ ${office.Number}`,
          `${office.ShortAddress}`,
          `${schedule}`,
          `${weightAllowed}`
        );
      })
    : [];

    return (
      <>
        {warehouses.length > 0 && (
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        whiteSpace: 'pre-line',
                        justifyContent: 'center',
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
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
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              minWidth: column.minWidth,
                              whiteSpace: 'pre-line',
                              justifyContent: 'center',
                            }}
                          >
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
        )}
      </>
    );
}

