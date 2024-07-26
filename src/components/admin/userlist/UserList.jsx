import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';
import axios from 'axios';




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



const UserList = () => {

  const [data , setData ] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:9328/api/v1/user/userget`)
    .then((result)=>{
      console.log(result)
      setData(result.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  
console.log(data,"data")

  return (
    <Box sx={{width:'100%',backgroundColor:'#fff',mt:'5.1rem'}}>
    <Container maxWidth={'md'} >
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
      <TableHead>
        <StyledTableRow>
          <StyledTableCell align="center">no.</StyledTableCell>
          <StyledTableCell align="center">FirstName</StyledTableCell>
          <StyledTableCell align="center">LastName</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          
        </StyledTableRow>
      </TableHead>

      <TableBody>
        {data ? data.map((element,i)=>{ return(
       <StyledTableRow key={i}>
      <StyledTableCell align="center">{i+1}</StyledTableCell>
      <StyledTableCell align="center">{element.firstName}</StyledTableCell>
      <StyledTableCell align="center">{element.lastName}</StyledTableCell>
      <StyledTableCell align="center">{element.email}</StyledTableCell>
      
      
          </StyledTableRow> 
          )}) : null }
      </TableBody>
  
    </Table>
  </TableContainer>
  </Container>
  </Box>
  
  )
}

export default UserList
