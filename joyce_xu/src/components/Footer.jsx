import React from 'react';
import {Box, Typography,Container,Link} from '@mui/material';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="http://joyce-xu-data.github.io/">
       Joyce Xu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
 
    
     <Box
        sx={{   
          marginTop: 8
         
        }}
      
      >
          <Container  maxWidth="sm">
            <Box textAlign="center">
               <Copyright />
            </Box>
        
          </Container>
        
     </Box>
   
  );
}

export default Footer;