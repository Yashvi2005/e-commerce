import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { useGetEventQuery } from '../../../services/api';
import { useEventUserMutation } from '../../../services/admin';
import { useNavigate } from 'react-router-dom';


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
  
const BookedEvent = () => {
    const { data, isSuccess, isError } = useGetEventQuery()
    const [event_id,setEventId]=useState()
    const [respoInfo, response] = useEventUserMutation()
    // console.log(response,'responssdsdsd')
  console.log(event_id, 'event id')  
  const [dataById, setDatabyId] = useState([]);
  const [make, setMake] = useState([]);
  const navigate = useNavigate()

  // const [ids, setIds] = useState([])
  const ids = []

    useEffect(() => {
            ( async() => {
              // e.preventDefault();
                if (event_id !== undefined || null) {
                  await respoInfo(event_id)
                  // navigate(0)
                }           
            })()
            console.log(response,'responssdsdsd')
    }, [event_id])
  

    useEffect(() => {
      // setTimeout(() => {
        if (response.isSuccess === true) {
          console.log(response, 'Done ')
          response.data.data.forEach((el) => {
            ids.push(el.user_id)
          })
          
      }
    }, [response])
  
  useEffect(() => {
    if (ids) {
      console.log(ids[0],'idssd')
      console.log(ids,'idssd')
    }
  },[ids])
  
  
  
  useEffect(() => {

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const arr = [];
    if (ids.length > 0) {
      console.log(ids.length,'ids.length')

      for (var v = 0; v <= ids.length; v++) {
        fetch(`http://localhost:5000/userlogininfo/${ids[v]}`, requestOptions)
          .then((response) => response.json())
          .then((data) => arr.push(data));
      }
      setDatabyId(arr, "sdsd");
    }
  }, [ids]);

  useEffect(() => {
    if (dataById) {
      console.log(dataById,'setatabyid')
    }
  },[dataById])

   
  useEffect(() => {
    const timer = setTimeout(() => {
      const imake = [];
      if (dataById.length > 1) {
        // alert('Kaam hogaya')
        dataById.forEach((element) => {
          element.data.forEach((element2) => {
            imake.push(element2);
            setMake(imake);
          });
        });
      }
      }, 100);
      return () => clearTimeout(timer);
  }, [dataById]);

  useEffect(() => {
    if (make) {
      console.log(make,'make')
    }
  },[make])
  
  



//     useEffect(() => {
//         if (isSuccess === true) {
//         console.log(data.details,'data')
//     }
// },[isSuccess])

  
  return (
      <>
   <Box sx={{width:'100%',backgroundColor:'#fff',mt:'7rem'}}>
    <Container maxWidth={'md'} >
        <Stack justifyContent='center'>
           
          <FormControl fullWidth sx={{mt:'0.4rem',backgroundColor:'green',width:'100%'}}>
                <InputLabel id="demo-simple-select-label">location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={event_id || ''}
                  label="location"
                onChange={(e) => {e.preventDefault() ; setEventId(e.target.value)}}
                >
                              {isSuccess === true ? data?.details.map((element, i) => {
                                  return (                         
                                      <MenuItem key={i} value={element.id}>{i+1} {'   '} {element.title}</MenuItem>
                                              
                     )}):null }
                  
                </Select>
              </FormControl>
        </Stack>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>      
        <StyledTableRow>
          <StyledTableCell align="center">no.</StyledTableCell>
          <StyledTableCell align="center">Name</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Gender</StyledTableCell>
          <StyledTableCell align="center">Phone number</StyledTableCell>
        
        </StyledTableRow>
      
      </TableHead>
      <TableBody>

                {dataById !== undefined || null ? make.map((el, i) => {
               return(
                <StyledTableRow>
                <StyledTableCell align="center">{i+1}</StyledTableCell>
                <StyledTableCell align="center">{el.name}</StyledTableCell>
                <StyledTableCell align="center">{el.email}</StyledTableCell>
                <StyledTableCell align="center">{el.gender}</StyledTableCell>
                <StyledTableCell align="center">{el.phone_num}</StyledTableCell>
                
                    </StyledTableRow>
               )
                }) : 
                <StyledTableRow>
                <StyledTableCell align="center">hii</StyledTableCell>
                <StyledTableCell align="center">hii</StyledTableCell>
                <StyledTableCell align="center">hii</StyledTableCell>
                <StyledTableCell align="center">hii</StyledTableCell>
                <StyledTableCell align="center">hii</StyledTableCell>
                
                    </StyledTableRow>
             }
    
      </TableBody>
    </Table>
  </TableContainer>
  </Container>
  </Box>
      </>
  )
}

export default BookedEvent