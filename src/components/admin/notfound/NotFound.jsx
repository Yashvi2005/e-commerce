import { Stack, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
      <>
        <Stack justifyContent={'center'} alignItems={'center'}sx={{height:'100vh',width:'100%',color:'#fff',backgroundColor:'black'}}>
            <Typography variant='h3'>404 not Found</Typography>
        </Stack>
      </>
  )
}

export default NotFound