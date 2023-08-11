import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export function OfficeList({ warehouses }) {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const columns = [
    { id: 'number', label: 'Відділення/поштомат', maxWidth: 170 },
    { id: 'address', label: 'Адреса', minWidth: 100 },
    {
      id: 'schedule',
      label: 'Графік роботи',
      align: 'right',
    },
    {
      id: 'weight',
      label: 'Вага до',
      align: 'right',
    },
  ];

  function createData(number, address, schedule, weight) {
    return { number, address, schedule, weight };
  }

  const DaySchedule = schedule => {
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
    return `Сьогодні: ${todaySchedule}\nЗавтра: ${tomorrowSchedule}`;
  };

  const rows = warehouses
    ? warehouses.map(office => {
        const weightAllowed =
          office.TotalMaxWeightAllowed !== '0'
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
          {isVisible && (
            <Box
              sx={{
                '& > :not(style)': {
                  m: 1,
                  position: 'fixed',
                  bottom: 24,
                  right: 24,
                },
              }}
            >
              <Fab color="primary" aria-label="scroll" onClick={scrollToTop}>
                <ArrowUpwardIcon />
              </Fab>
            </Box>
          )}
        </Paper>
      )}
    </>
  );
}