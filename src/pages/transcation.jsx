import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './transcation.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, accNo, amount, date,status) {
  return { id, name, accNo, amount, date,status };
}

const rows = [
  createData(571862, 'SBI', 'xxxx x...7854', 1000, '4/9/22 & 22.49','Successful'),
  createData(842582, 'RBI', 'xxxx x...7844', 3750, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(758462, 'KVB', 'xxxx x...4578', 2400, '4/9/22 & 22.49','Successful'),
  createData(785412, 'LBI', 'xxxx x...8642', 670, '4/9/22 & 22.49','Successful'),
  createData(785412, 'SBI', 'xxxx x...7825', 4500, '4/9/22 & 22.49','Successful'),
];

export default function CustomizedTables() {
  return (
      <div className='transcation'>
        <Link to="/desk"><ArrowBackIcon  className='arrow'/></Link>
       <LocalPrintshopIcon className='icon'/>
       <FilterAltIcon className='filter'/>
       <h2 id='head'><u>Transaction History</u></h2>
      <TableContainer className='contain' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Transcation id</StyledTableCell>
            <StyledTableCell align="right">Bank Name</StyledTableCell>
            <StyledTableCell align="right">Account Number</StyledTableCell>
            <StyledTableCell align="right">Transcation Amount</StyledTableCell>
            <StyledTableCell align="right">Date & Time</StyledTableCell>
            <StyledTableCell align="right">Transaction Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.accNo}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}